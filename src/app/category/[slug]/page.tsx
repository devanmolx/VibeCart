import Image from 'next/image'
import React from 'react'
import Filter from '../../components/Filter'
import ProductList from '../../components/ProductList'
import axios from 'axios'
import { allProductsRoute } from '@/lib/routeProvider'

interface ProductType{
  _id: string;
  name: string;
  description: string;
  images:string[]
  price: number;
}

const Page = async ({ params }: any) => {
  const response = await axios.get(`${allProductsRoute}/${params.slug}`)
  const product:ProductType[] = response.data.products;

  return (
    <div className="mt-10 px-4 md:px-8 xl:px-32 2xl:px-64">
      <div className='w-full bg-lightpink flex items-center justify-between px-10 h-[100px] lg:h-auto'>
        <div className='flex flex-col items-center'>
          <h1 className='text-lg md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-gray-700'>Grab up to 50% off on Selected Products</h1>
          <button className='py-2 px-3 lg:px-8 lg:py-4 bg-pink text-white w-max text-sm lg:text-lg font-semibold rounded-full'>Buy Now</button>
        </div>
        <div className='h-full w-[50%]'>
          <Image
            src={"/woman.png"}
            alt=''
            className='object-cover h-full'
            height={1000}
            width={1000}
          />
        </div>
      </div>
      <div className='mt-10 flex flex-col gap-8'>
        <Filter />
        <div className='w-full flex flex-col md:flex-row flex-wrap items-center justify-between gap-x-6 gap-y-12'>
          {product.map(item => (
            <ProductList key={item._id} item={item} />
          ))}
          {product.length === 0 && (
            <p>No products found for {params.slug}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Page;
