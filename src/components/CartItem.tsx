"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { CartContext, CartType } from '@/app/context/Cart/CartContext'
import { UserContext } from '@/app/context/User/UserContext'
import axios from 'axios'
import { removeFromCartRoute } from '@/lib/routeProvider'


const CartItem = ({ item }: { item: CartType }) => {

  const { cart, setCart } = useContext(CartContext)
  const { user } = useContext(UserContext)

  async function removeItemFromCart() {

    const index = cart.findIndex((cartItem) => cartItem.product._id === item.product._id)

    if (index !== -1) {
      let updatedCart = [...cart];
      if (cart[index].qty === 1) {
        updatedCart = updatedCart.filter((cartItem) => cartItem.product._id !== item.product._id);
      }
      else {
        updatedCart[index].qty -= 1;
      }
      setCart(updatedCart);
    }
    if (user._id) {
      const response = await axios.post(removeFromCartRoute, { userId: user._id, itemId: item.product._id })
    }

  }

  return (
    <div className=' flex items-center justify-between gap-2 w-full z-10'>
      <div className=' h-[90px] w-[100px] rounded-md'>
        <Link href={`/product/${item.product._id}`}>
          <Image src={item.product.images[0]} alt='' height={1000} width={1000} className=' w-full bg-white' />
        </Link>
      </div>
      <div className=' flex flex-col h-full gap-4 w-full'>
        <div className=' flex flex-col w-full justify-between'>
          <div className='w-full flex items-center justify-between'>
            <p className=' font-semibold'>{item.product.name}</p>
            <p>₹{item.product.price}</p>
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