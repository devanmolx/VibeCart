'use client'
import React from 'react'
import ProductList from './ProductList'

interface itemType {
    _id: string,
    name: string,
    description: string,
    price: number,
    images: string[]
}

interface PropType {
    products: itemType[]

}

const FeaturedProducts: React.FC<PropType> = ({ products }) => {

    return (
        <div className=' w-full flex flex-col md:flex-row justify-center flex-wrap items-center gap-8'>
            {products.map(product => (
                <ProductList key={product._id} item={product} />
            ))}
        </div>
    )
}

export default FeaturedProducts