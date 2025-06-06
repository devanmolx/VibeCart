import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import NavbarIcons from './NavbarIcons'

const Navbar = () => {
  return (
    <div className=' z-10 h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-screen relative'>
      {/* Small Screen */}
      <div className=' md:hidden h-full flex items-center justify-between'>
        <Link href={"/"} className=' text-2xl tracking-wide'>VIBE CART</Link>
        <NavbarIcons />
      </div>
      {/* Medium Screen */}
      <div className='hidden h-full w-full md:flex items-center justify-between'>
        <div className=' w-1/3 xl:w-1/2 flex items-center gap-12'>
          <Link href={"/"} className=' text-2xl tracking-wide'>VIBE CART</Link>
          <div className=' hidden xl:flex gap-4'>
            <Link href={""}>Homepage</Link>
            <Link href={""}>Shop</Link>
            <Link href={""}>Deals</Link>
            <Link href={""}>About</Link>
            <Link href={""}>Contact</Link>
          </div>
        </div>
        <div className=' w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  )
}

export default Navbar