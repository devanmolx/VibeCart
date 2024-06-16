import React from 'react'
import { products } from "@/lib/Products"
import ProductList from '@/app/components/ProductList';

const page = ({params}:any) => {

  const product = products.filter(item => item.name.toLowerCase().includes(params.slug));

  return (
    <div className=' mt-10 px-4 md:px-8 xl:px-32 2xl:px-64'>
      <div className=' w-full flex flex-col md:flex-row justify-center flex-wrap items-center gap-8'>
        {product.map(item => (
          <ProductList key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default page