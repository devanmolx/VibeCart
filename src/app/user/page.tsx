"use client"
import React, { useContext } from 'react'
import AddDetails from '../components/addDetails'
import { CartContext } from '../context/Cart/CartContext'
import { UserContext } from '../context/User/UserContext'

const Page =() => {

  const {cart} = useContext(CartContext)
  const {user} = useContext(UserContext)

  return (
    <div>
      {JSON.stringify(cart)}
      {JSON.stringify(user)}
    </div>
  )
}

export default Page