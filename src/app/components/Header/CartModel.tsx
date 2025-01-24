"use client"
import { CartContext } from '@/app/context/Cart/CartContext'
import React, { Ref, useContext } from 'react'
import CartItem from '../CartItem'
import axios from 'axios'
import { UserContext } from '@/app/context/User/UserContext'
import useUpdateUser from '@/lib/useUpdateUser'
import Link from 'next/link'

const CartModel = ({cartRef}:{cartRef:Ref<HTMLDivElement>}) => {

  const { cart, setCart } = useContext(CartContext)
  const { user } = useContext(UserContext)
  const updateUser = useUpdateUser();


  function TotalPrice() {
    let cost = 0;
    for (let i = 0; i < cart.length; i++) {
      cost += cart[i].qty * cart[i].price;
    }
    return cost
  }

  async function Checkout() {
    const response = await axios.post("/api/user/order", { cart: JSON.stringify(cart), id: user._id })
    if (response.data.status) {
      setCart([]);
      const response = await axios.post("/api/user/cart/clear", { id: user._id })
      await updateUser();
    }
  }

  return (
    <div ref={cartRef} className=' w-[410px] absolute flex flex-col gap-3 top-12 right-0 p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white'>
      <p className=' text-xl font-medium'>Shopping Cart</p>
      {
        !user._id &&
        <div className=" p-4 text-sm text-yellow-800 rounded-lg bg-yellow-50">
          <span className="font-medium">To complete your purchase, Please sign in.</span>
        </div>
      }
      <div className=' flex flex-col w-full gap-4'>
        {cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className=' w-full flex flex-col gap-4'>
        <div className=' w-full flex items-center justify-between'>
          <p className=' text-xl font-medium'>Subtotal</p>
          <p className=' text-xl font-semibold'>₹{TotalPrice()}</p>
        </div>
        <div className=' w-full flex items-center justify-between'>
          <Link href={"/cart"}><button className='font-medium p-3 rounded-md border border-gray-400'>View cart</button></Link>
          <button onClick={() => { Checkout() }} disabled={user._id && cart.length >= 1 ? false : true} className='font-medium p-3 rounded-md text-white bg-black disabled:bg-gray-700 disabled:cursor-not-allowed'>Check out</button>
        </div>
      </div>
    </div>
  )
}

export default CartModel