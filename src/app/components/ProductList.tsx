import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddToCart from './AddToCart'

interface PropType {
  item: {
    id: number,
    name: string,
    description: string,
    price: number,
    images: string[]
  }
}

const ProductList: React.FC<PropType> = ({ item }) => {

  return (
    <div className=' flex flex-col gap-2'>
      <Link href={`/product/${item.id}`} className=' flex flex-col gap-2 w-[300px]'>
        <div className=" relative overflow-hidden w-full h-[350px] flex items-center justify-center">
          <Image className="rounded-md w-full absolute z-10 hover:opacity-0 transition-opacity easy du" src={item.images[0]} height={1000} width={1000} alt="" />
          <Image className="rounded-md w-full" src={item.images[1]} height={1000} width={1000} alt="" />
        </div>
        <div className=' w-full flex items-center justify-between'>
          <span className=' text-lg font-semibold'>{item.name}</span>
          <span className=' text-lg font-semibold'>₹{item.price}</span>
        </div>
        <p className=' flex text-md text-gray-500'>{item.description.split(' ').splice(0, 12).join(' ')}</p>
      </Link>
      <AddToCart item={item} qty={1} />
    </div>
  )
}

export default ProductList