import CustomizeProducts from '@/app/components/CustomizeProducts'
import ProductImages from '@/app/components/ProductImages'
import React from 'react'
import axios from 'axios'
import { productsRoute } from '@/lib/routeProvider'

const Page = async ({ params }: any) => {
  const response = await axios.get(`${productsRoute}/${params.slug}`);
  const product = response.data.product

  return (
    <div className="  mt-10 px-4 md:px-8 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-10">
      <div className=' w-full lg:w-1/2 lg:sticky top-20'>
        <ProductImages images = {product.images} />
      </div>
      <div className=' w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className=' text-2xl font-semibold'>{product.name}</h1>
        <p className=' text-gray-600'>{product.description}</p>
        <hr />
        <p className=' text-xl font-semibold text-gray-600 flex items-center gap-4'> <s>₹{product.price + 0.20* product.price}</s> <span className=' text-2xl font-bold text-black'>₹{product.price}</span> </p>
        <hr />
        <CustomizeProducts item={product} />
        <div className=' flex flex-col gap-6'>
          <div className=' flex flex-col gap-4'>
            <p className=' text-xl font-medium'>RETURN & REFUND POLICY</p>
            <p className=' text-base text-gray-700'>Returns accepted within 30 days of purchase with original receipt. Items must be unused and in original packaging. Refunds processed within 7-10 business days to the original payment method. Return shipping costs are the customer&apos;s responsibility unless the item is defective or incorrect. Contact customer service for assistance.</p>
          </div>
          <div className=' flex flex-col gap-4'>
            <p className=' text-xl font-medium'>SHIPPING INFO</p>
            <p className=' text-base text-gray-700'>Orders are processed within 1-2 business days. Standard shipping takes 3-5 business days. Expedited options available at checkout. Free shipping on orders over $50. Tracking information provided via email upon shipment.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page