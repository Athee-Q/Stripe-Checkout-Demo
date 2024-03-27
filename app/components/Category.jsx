import axios from "axios"
import TrekItems from "./TrekItems"
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { data } from "autoprefixer";
const Category = ({ price }) => {
    const [toggle, setToggle] = useState(false)

    const handlePayment = async (e) => {
        e.preventDefault();
        axios.post('/api/payment',
            {
                priceId: price.id
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        window.location.assign(data)
    }

    return (
        <div className="border-gray-100 shadow-2xl border-4 text-center mt-10 max-w-[1040px]">
            <div>
                <div className="bg-gray-100 h-28 items-center font-bold">
                    <h4 className="text-3xl">{price.nickname}</h4>
                    {price.nickname && <p className="text-[#f1592a] mt-1">For complete package</p>}
                    <h3>with required items</h3>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center pt-4">
                        <h1 className="text-5xl font-bold">
                            {(price.unit_amount / 100).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                        </h1>
                        <h3 className="flex items-center gap-5">Additional charges ₹ 50 / for DELIVERY <span className="flex gap-2 items-center  text-[#f1592a] font-[600] " >DETAIL <IoIosArrowDropdown onClick={() => setToggle(!toggle)} /></span> </h3>
                    </div>
                </div>
                <div>
                    <TrekItems price={price} toggle={toggle} />
                </div>
                <button onClick={handlePayment} className="flex w-full justify-center rounded-md border-transparent bg-[#f1592a] py-2 px-4 font-medium text-white shadow-sm">
                    Buy Your Products
                </button>
            </div>
        </div>
    )
}

export default Category