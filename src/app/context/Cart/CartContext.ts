import React, { createContext } from 'react';

interface CartType {
    id:number
    name: string;
    description: string;
    price: number;
    qty:number
    images: string[];
}

interface CartContextType {
    cart: CartType[];
    setCart: (cart: CartType[]) => void;
}

const defaultCartContextValue: CartContextType = {
    cart: [],
    setCart: () => {}
};

export const CartContext = createContext<CartContextType>(defaultCartContextValue);
