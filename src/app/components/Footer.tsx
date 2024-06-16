import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=' mt-10 w-screen flex flex-col md:flex-row md:justify-between lg:px-28 bg-lightgray py-10'>
      <div className=' w-full lg:w-1/4 flex flex-col gap-5 p-4'>
        <p className=' text-2xl'>VibeCart</p>
        <p className=' text-sm lg:w-[200px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, quod.</p>
        <p className=' text-md font-semibold'>hello@vibecart.dev</p>
        <p className=' text-md font-semibold'>+91123456789</p>
        <div className=' flex items-center gap-2 text-xl'>
        <FaFacebook />
        <FaInstagramSquare />
        <FaYoutube />
        <FaSquareXTwitter />
        </div>
      </div>
      <div className='hidden lg:flex items-center justify-around w-1/2'>
        <div className=' flex flex-col gap-8'>
          <h1 className=' text-xl font-medium'>COMPANY</h1>
          <div className=' flex flex-col gap-5 text-sm'>
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>Carrers</Link>
            <Link href={"/"}>Affiliates</Link>
            <Link href={"/"}>Blogs</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>
        </div>
        <div className=' flex flex-col gap-8'>
          <h1 className=' text-xl font-medium'>SHOP</h1>
          <div className=' flex flex-col gap-5 text-sm'>
            <Link href={"/"}>New Arrivals</Link>
            <Link href={"/"}>Accessories</Link>
            <Link href={"/"}>Men</Link>
            <Link href={"/"}>Woman</Link>
            <Link href={"/"}>All Products</Link>
          </div>
        </div>
        <div className=' flex flex-col gap-8'>
          <h1 className=' text-xl font-medium'>HELP</h1>
          <div className=' flex flex-col gap-5 text-sm'>
            <Link href={"/"}>Customer Service</Link>
            <Link href={"/"}>My Account</Link>
            <Link href={"/"}>Find a Store</Link>
            <Link href={"/"}>Legal & Privacy</Link>
            <Link href={"/"}>Gift Card</Link>
          </div>
        </div>
      </div>
      <div className=' w-full lg:w-1/4 flex flex-col gap-5 p-4'>
        <h1 className=' text-xl font-medium'>SUBSCRIBE</h1>
        <p className=' text-sm'>Be the first to get the latest news about trends, promotions and much more!</p>
        <div className=' flex w-full'>
          <input className=' focus:outline-none p-2 w-full text-md' placeholder='Email Address' type="text" />
          <button className=' text-white bg-pink text-lg font-semibold p-3'>Join</button>
        </div>
      </div>
    </div>
  )
}

export default Footer