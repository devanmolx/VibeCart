"use client"
import React, { useState } from 'react'
import { CartContext, CartType } from './CartContext';

const CartContextProvider = ({children}:any) => {
    
  const [cart , setCart] = useState<CartType[]>([]);

  return (
    <CartContext.Provider value={{cart , setCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider