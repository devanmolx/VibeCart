"use client"
import React, { useState } from 'react'
import AddToCart from './AddToCart';

interface PropType{
    item: {
        id: number,
        name: string,
        description: string,
        price: number,
        images: string[]
    }
}

const CustomizeProducts:React.FC<PropType>= ({item}) => {

    const [Quantity, setQuantity] = useState(1);

    function increaseQty() {
        setQuantity(Quantity + 1);
    }
    function decreaseQty() {
        if (Quantity > 1) {
            setQuantity(Quantity - 1);
        }
    }

    return (
        <div>
            <div className=' flex flex-col gap-3'>
                <p>Choose a Quantity</p>
                <div className=' flex items-center justify-between '>
                    <div className=' flex items-center justify-between w-[130px] bg-gray-200 gap-6 py-2 px-4 rounded-full text-xl'>
                        <button onClick={decreaseQty}>-</button>
                        {Quantity}
                        <button onClick={increaseQty}>+</button>
                    </div>
                    <AddToCart item={item} qty={Quantity}  />
                </div>
            </div>
        </div>
    )
}

export default CustomizeProducts