"use client"
import React, { useState } from 'react'
import { CartContext } from './CartContext';

interface CartType {
    id:number
    name: string;
    description: string;
    price: number;
    qty:number
    images: string[];
}

const CartContextProvider = ({children}:any) => {
    
    const [cart , setCart] = useState<CartType[]>([]);

  return (
    <CartContext.Provider value={{cart , setCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider