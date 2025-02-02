"use client"
import React, { useContext } from 'react'
import { CartContext, CartType } from '../context/Cart/CartContext'
import axios from 'axios'
import { UserContext } from '../context/User/UserContext'
import { addToCartRoute, getCartRoute } from '@/lib/routeProvider'

interface PropType {
    item: {
        _id: string,
        name: string,
        description: string,
        price: number,
        images: string[]
    },
    qty: number
}

const AddToCart: React.FC<PropType> = ({ item, qty }) => {

    const { cart, setCart } = useContext(CartContext)
    const { user } = useContext(UserContext)

    async function addItemToCart() {

        const newItems = {
            product: item._id,
            qty
        }
        if (cart) {
            const index = cart.findIndex((cartItem) => cartItem.product._id === item._id)
            let updatedCart = [...cart];
            if (index === -1) {
                const newCartItem: CartType = {
                    product: {
                        _id: item._id,
                        name: item.name,
                        description: item.description,
                        price: item.price,
                        images: item.images
                    },
                    qty
                }

                setCart([...updatedCart, newCartItem])

            }
            else {

                const updatedCart = [...cart];
                updatedCart[index].qty += qty;
                setCart(updatedCart);

            }

        }

        if (user._id) {
            const res = await axios.post(addToCartRoute, { userId: user._id, newItems })
            const response = await axios.post(getCartRoute, { userId: user._id })
            setCart(response.data.cart);
        }
    }

    return (
        <button onClick={addItemToCart} className=' font-medium w-max p-2 text-pink border border-pink hover:bg-pink hover:text-white rounded-md'>Add to Cart</button>
    )
}

export default AddToCart