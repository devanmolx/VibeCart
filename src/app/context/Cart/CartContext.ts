import { createContext } from 'react';

export interface ProductType {
    _id: string
    name: string;
    description: string;
    price: number;
    images: string[];
}

export interface CartType {
    product: ProductType
    qty: number
}

interface CartContextType {
    cart: CartType[];
    setCart: (cart: CartType[]) => void;
}

const defaultCartContextValue: CartContextType = {
    cart: [],
    setCart: () => { }
};

export const CartContext = createContext<CartContextType>(defaultCartContextValue);
