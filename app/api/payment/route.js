import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request){
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json();
    let priceId = data.priceId;
    const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        line_items:[{
                price:{priceId},
                quantity:1,
            }],
        mode:'payment',
        success_url:`${request.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url:`${request.headers.origin}/cancel`,
    });
 console.log(session.success_url);
    return NextResponse.json(session.url)
}