"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { CartContext } from '../context/Cart/CartContext'
import { UserContext } from '../context/User/UserContext'
import axios from 'axios'

interface PropType{
    item:{
        id:number
        name: string;
        description: string;
        price: number;
        qty:number
        images: string[];
    }
}

const CartItem:React.FC<PropType> = ({item}) => {

    const {cart , setCart} = useContext(CartContext)
    const {user} = useContext(UserContext)

    async function removeItemFromCart(){
        const itemIndex = cart.findIndex(product => product.id === item.id)
        let newCart = [...cart];

        if(item.qty > 1){
          newCart[itemIndex] = { ...newCart[itemIndex] , qty: newCart[itemIndex].qty -1};
        }
        else{
          newCart.splice(itemIndex , 1);
        }
        setCart(newCart);

        if(user._id){
          const response = await axios.post("/api/user/cart/update" , {item:JSON.stringify(newCart) , id:user._id});
        }
        
    }

  return (
    <div className=' flex items-center justify-between gap-2 w-full'>
            <div className=' h-[90px] w-[100px] rounded-md'>
              <Link href={`/product/${item.id}`}>
                <Image src={item.images[0]} alt='' height={1000} width={1000} className=' w-full bg-white' />
              </Link>
            </div>
            <div className=' flex flex-col h-full gap-4 w-full'>
              <div className=' flex flex-col w-full justify-between'>
                <div className='w-full flex items-center justify-between'>
                  <p className=' font-semibold'>{item.name}</p>
                  <p>₹{item.price}</p>
                </div>
                <p className=' text-gray-500'>available</p>
              </div>
              <div className=' w-full flex items-center justify-between'>
                <p>Qty {item.qty}</p>
                <button onClick={removeItemFromCart} className=' text-blue-500'>Remove</button>
              </div>
            </div>
          </div>
  )
}

export default CartItem