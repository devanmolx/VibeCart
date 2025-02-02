"use client"
import React, { useContext, useEffect } from 'react'
import { UserContext, UserType } from '../context/User/UserContext'
import { CartContext, CartType } from '../context/Cart/CartContext';

interface PropType {
    user: UserType
    cart: CartType[]
}

const UpdateDetails: React.FC<PropType> = ({ user, cart }) => {

    const { setUser } = useContext(UserContext);
    const { setCart } = useContext(CartContext);

    useEffect(() => {
        if (user) {
            setUser(user);
        }
        if (cart) {
            setCart(cart);
        }
    }, [cart, user, setCart, setUser])

    return (
        null
    )
}

export default UpdateDetails