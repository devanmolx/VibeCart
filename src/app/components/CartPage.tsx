"use client"
import React, { useContext } from 'react'
import { CartContext } from '../context/Cart/CartContext'
import CartPageItem from './CartPageItem'
import axios from 'axios'
import useUpdateUser from '@/lib/useUpdateUser'
import { UserContext } from '../context/User/UserContext'

const CartPage = () => {

  const { cart, setCart } = useContext(CartContext)
  const { user } = useContext(UserContext);
  const updateUser = useUpdateUser(user._id);

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
    <>
      {cart.map(item => (
        <CartPageItem key={item.id} item={item} />
      ))}
      <div className=' w-full flex flex-col gap-4'>
        <div className=' w-full flex items-center justify-between'>
          <p className=' text-xl font-medium'>Subtotal</p>
          <p className=' text-xl font-semibold'>₹{TotalPrice()}</p>
        </div>
        <div className=' w-full flex items-center justify-between mt-10'>
          <button onClick={() => { Checkout() }} disabled={user._id && cart.length >= 1 ? false : true} className='font-medium p-3 rounded-md text-white bg-black disabled:bg-gray-700 disabled:cursor-not-allowed'>Check out</button>
        </div>
      </div>
    </>
  )
}

export default CartPage