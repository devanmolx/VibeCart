"use client"
import { ProductType } from '@/app/context/Cart/CartContext';
import { searchProductsRoute } from '@/lib/routeProvider';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useRef, useState } from 'react'

const SearchBar = () => {

    const router = useRouter();
    const [name, setName] = useState("");
    const [products, setProducts] = useState<ProductType[]>([]);

    const productRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleOutsideClick(event: MouseEvent) {
            if (productRef && !productRef.current?.contains(event.target as Node)) {
                setName("");
                setProducts([]);
            }
        }

        document.addEventListener("mousedown", handleOutsideClick)
    }, [])

    useEffect(() => {
        if (name) {

            axios.get(`${searchProductsRoute}/${name}`)
                .then((response) => {
                    console.log(response.data.products)
                    setProducts(response.data.products);
                })
        }
        else {
            setProducts([])
        }
    }, [name])

    function handleProductClick() {
        setName("");
        setProducts([]);
    }


    return (
        <div className=' relative'>
            <form className=' flex items-center justify-between bg-gray-200 rounded-md px-4 py-3 flex-1'>
                <input className=' w-full bg-transparent focus:outline-none' type="text" placeholder='Search...' onChange={(e) => { setName(e.target.value) }} />
                <button type='submit' className=' cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </form>
            <div ref={productRef} >
                {
                    products.length > 0 &&
                    <div className=' w-full max-h-96 z-10 absolute top-full shadow-lg  overflow-y-auto left-0  bg-white p-4 rounded-lg'>
                        {products.map(product => (
                            <Link onClick={handleProductClick} href={`/product/${product._id}`} key={product._id} className=' flex items-center py-2 gap-2'>
                                {product.images?.length > 0 && (
                                    <Image
                                        src={product.images[0]}
                                        alt=''
                                        height={50}
                                        width={50} />
                                )}
                                <div className=' w-full flex items-center justify-between'>
                                    <p className=' text-lg'>{product.name}</p>
                                    <p className=' text-lg font-semibold'>₹{product.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default SearchBar