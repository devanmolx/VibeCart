import { createContext } from 'react';

export interface CartType {
    product: {
        _id: string
        name: string;
        description: string;
        price: number;
        images: string[];
    }
    qty:number
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
