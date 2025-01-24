"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from "next/link"
import CartModel from './CartModel';
import { IoCart } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CartContext } from '@/app/context/Cart/CartContext';
import { UserContext } from '@/app/context/User/UserContext';
import axios from 'axios';
import { useCookies } from 'react-cookie';

interface PropType {
    id: string | undefined
}

const NavbarIcons: React.FC<PropType> = ({ id }) => {

    const { cart, setCart } = useContext(CartContext)
    const { user, setUser } = useContext(UserContext);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [Cookie, setCookie, removeCookie] = useCookies();
    
    const profileRef = useRef<HTMLDivElement>(null);
    const cartRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (id) {
            fetchCart();
        }
    }, [])

    function handleProfile() {
        setIsProfileOpen(prev => !prev);
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

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
                setIsCartOpen(false);
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);

        return (() => {
            document.removeEventListener("mousedown", handleOutsideClick)
        })
    }, [])

    function handleLogout() {
        setUser({
            _id: "",
            name: "",
            email: "",
            image: "",
            address: "",
            pincode: 0,
            cart: [],
            orders: []
        });
        removeCookie("token");
    }

    return (
        <div className='flex items-center gap-3 relative'>
            <button className=' cursor-pointer' onClick={handleProfile}>
                {
                    user._id ? <FaUserCircle className=' text-3xl' /> : <Link href={"/signin"}><FaUserCircle className=' text-3xl' /></Link>
                }
            </button>
            <div ref={profileRef}>
                {isProfileOpen && user._id && (
                    <div className=' absolute flex flex-col items-center gap-2 top-12 left-0 p-3 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white'>
                        <Link href={"/orders"} onClick={() => { setIsProfileOpen(false); }}>Orders</Link>
                        <button onClick={() => { handleLogout() }}>Logout</button>
                    </div>
                )}
            </div>
            <button className=' flex  relative cursor-pointer' onClick={() => { setIsCartOpen(!isCartOpen) }}>
                <IoCart className=' text-3xl' />
                <div className='-right-0 h-6 w-6 -top-0 rounded-full bg-pink text-white'>{TotalQty()}</div>
            </button>
            {isCartOpen && <CartModel cartRef={cartRef} />}
        </div>
    )
}

export default NavbarIcons