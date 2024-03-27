import { AiFillCheckCircle } from 'react-icons/ai'
import { useState } from "react"



const TrekItems = ({ price ,toggle }) => {
    const [trekItems, setTrekItems] = useState({
        TREKKING_GEAR: [
            'Ruck sack bag with rain cover. Qty -1',
            'Day Pack Bag ',
            'Head Torch with spare Batteries. Qty -1',
            'U V protection sunglasses. Qty -1',
            'Water Bottles: 2 bottles of 1 liter each',
        ],

        FOOTWEAR: [

            'Non-skid, deep treaded, high-ankle trekking shoes Qty -1',
            'Pair of light weight Slipper/Sandals Qty -1',
        ],
        CLOTHING: [
            'Quick Dry Warm lower or Track Pants. Qty - 2',
            'Full sleeves T-shirts/ Sweatshirts. Qty -1',
            'Pair of thick woolen socks. Qty -1',
            'Thermal Body warmer Upper & Lower. Qty-1',
            'Undergarments. Qty - 1 for every day of trekking',
            'Warm jacket closed at wrist & neck .Qty-1',
            'Full sleeves sweater. Qty -1',
            'Rain wear ( Jacket & Pants ) . Qty-1',
            'Pair of waterproof, warm gloves. Qty-1',
            'Woolen cap. Qty-1',
            'Sun shielding Hat. Qty -1',
        ],
        TOILETRIES: [
            'Personal toiletries kit. Qty -1',
            'Sun screen lotion small pack. Qty -1',
            'Lip Balm small pack. Qty-1',
        ],
        UTENSILS: [
            'Small size, Light weight & Leak proof lunch box. Qty-1',
            'Plate. Qty- 1',
            'Spoon.Qty-1',
            'Tea/Coffee (plastic) Mug.Qty-1 ',
        ],
        MISCELLANEOUS: [
            'Camera (Optional not included) ',
            'Medical kit. Qty -1',
            'Dry fruits, Nuts, Chocolate bars',
        ]
    })


    return (
        <>
            {Object.keys(trekItems).map((category, index) => (
                (category === price.nickname && toggle) &&
                <div key={index} className="mt-6 space-y-4 p-4 pb-0">
                    {trekItems[category].map((item, itemIndex) => (
                        <div key={itemIndex} className="flex space-x-3 pt-4 border-t-2">
                            <AiFillCheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 ml-2" aria-hidden='true' />
                            <h3 className="text-sm text-gray-500">{item}</h3>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

export default TrekItems