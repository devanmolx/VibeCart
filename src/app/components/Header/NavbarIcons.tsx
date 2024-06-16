"use client"
import React, { useContext, useEffect, useState } from 'react'
import Link from "next/link"
import CartModel from './CartModel';
import useUpdateUser from '@/lib/useUpdateUser';
import { IoCart } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CartContext } from '@/app/context/Cart/CartContext';
import { UserContext } from '@/app/context/User/UserContext';
import { signIn, signOut } from 'next-auth/react';
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';

interface PropType {
    id: string
}

const NavbarIcons: React.FC<PropType> = ({ id }) => {

    const { cart , setCart } = useContext(CartContext)
    const { user } = useContext(UserContext);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const updateUser = useUpdateUser(id);

    useEffect(() => {
        if (id) {
            updateUser();
            fetchCart();
        }
    }, [])

    function handleProfile() {
        setIsProfileOpen(!isProfileOpen);
    }

    async function fetchCart() {
        const response = await axios.post("/api/user/cart/get", { id })
        if (response.data.status) {
            setCart(response.data.message)
        }
    }

    function TotalQty() {
        let qty = 0;
        for (let i = 0; i < cart.length; i++) {
            qty += cart[i].qty;
        }
        return qty;
    }

    return (
        <div className='flex items-center gap-3 relative'>
            <button className=' cursor-pointer' onClick={handleProfile}>
                <FaUserCircle className=' text-3xl' />
            </button>
            {isProfileOpen && user._id && (
                <div className=' absolute flex flex-col items-center gap-2 top-12 left-0 p-3 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white'>
                    <Link href={"/orders"}>Orders</Link>
                    <button onClick={() => { signOut() }}>Logout</button>
                </div>
            )}
            {isProfileOpen && !user._id &&
                (
                    <div className=' absolute flex flex-col items-center gap-2 top-12 left-0 p-3 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white'>
                        <button className=' w-max cursor-pointer p-2 rounded-md flex items-center gap-1 bg-blue-500 text-white font-semibold' onClick={() => { signIn('google') }}>
                            <FaGoogle /> Sign in Google
                        </button>
                    </div>
                )}
            <button className=' flex  relative cursor-pointer' onClick={() => { setIsCartOpen(!isCartOpen) }}>
                <IoCart className=' text-3xl' />
                <div className='-right-0 h-6 w-6 -top-0 rounded-full bg-pink text-white'>{TotalQty()}</div>
            </button>
            {isCartOpen && <CartModel />}
        </div>
    )
}

export default NavbarIcons