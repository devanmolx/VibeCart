"use client"
import React, { useContext } from 'react'
import { CartContext } from '../context/Cart/CartContext'
import axios from 'axios'
import { UserContext } from '../context/User/UserContext'

interface PropType {
    item: {
        id: number,
        name: string,
        description: string,
        price: number,
        images: string[]
    },
    qty:number
}

const AddToCart: React.FC<PropType> = ({ item , qty }) => {

    const {cart ,setCart} = useContext(CartContext)
    const {user} = useContext(UserContext)

    async function addItemToCart() {

        const itemIndex = cart.findIndex(product => product.id === item.id)
        let newCart;
        
        if(itemIndex  === -1){
            const addItem = {
                id:item.id,
                name:item.name,
                description:item.description,
                price:item.price,
                qty:qty,
                images:item.images
            }
            newCart = [...cart , addItem];
        }
        else{
            newCart = cart.map((item , index) => 
            index === itemIndex ? { ...item , qty: item.qty + qty} : item)
        }

        setCart(newCart)
        if(user._id){
            const response = await axios.post("/api/user/cart/update" , {item:JSON.stringify(newCart) , id:user._id});
        }
    }

    return (
        <button onClick={addItemToCart} className=' font-medium w-max p-2 text-pink border border-pink hover:bg-pink hover:text-white rounded-md'>Add to Cart</button>
    )
}

export default AddToCart