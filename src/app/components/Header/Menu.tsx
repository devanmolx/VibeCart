"use client"

import { CartContext } from '@/app/context/Cart/CartContext';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = () => {

    const [open, setOpen] = useState(false);
    const {cart} = useContext(CartContext);

    function TotalQty() {
        let qty = 0;
        for (let i = 0; i < cart.length; i++) {
            qty += cart[i].qty;
        }
        return qty;
    }

    return (
        <div>
            <button onClick={() => (setOpen(!open))}>
                <GiHamburgerMenu className=' text-3xl' />
            </button>
            {open && (
                <div className=' absolute bg-black text-white top-20 left-0 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-lg p-10 z-20'>
                    <Link href={"/"}>Homepage</Link>
                    <Link href={"/"}>Shop</Link>
                    <Link href={"/"}>Deals</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Contact</Link>
                    <Link onClick={()=>{setOpen(false)}} href={"/orders"}>Orders</Link>
                    <Link onClick={()=>{setOpen(false)}} href={"/cart"}>Cart({TotalQty()})</Link>
                    <Link href={"/"} onClick={ ()=> {
                        setOpen(false)
                        signOut();
                    }}>Logout</Link>
                </div>
            )}
        </div>
    )
}

export default Menu