import React from 'react'
import CartPage from '../components/CartPage'

const Page = () => {
    return (
        <div className='  mt-10 px-4 md:px-8 xl:px-32 2xl:px-64 w-full'>
            <div className=' flex flex-col items-center w-full gap-8'>
                <p className=' text-xl font-medium'>Shopping Cart</p>
                <div className=' flex flex-col items-center gap-6 w-full lg:w-[800px]'>
                    <CartPage />
                </div>
            </div>
        </div>
    )
}

export default Page