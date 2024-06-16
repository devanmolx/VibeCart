import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import SearchBar from './SearchBar'
import NavbarIcons from './NavbarIcons'
import { getServerSession } from 'next-auth'
import authOptions from '@/lib/authOptions'

const Navbar = async () => {

  const session = await getServerSession(authOptions);

  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-screen relative'>
      {/* Small Screen */}
      <div className=' md:hidden h-full flex items-center justify-between'>
        <Link href={"/"} className=' text-2xl tracking-wide'>VIBE CART</Link>
        <Menu />
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
          { <NavbarIcons id={session?.user.id} />}
        </div>
      </div>
    </div>
  )
}

export default Navbar