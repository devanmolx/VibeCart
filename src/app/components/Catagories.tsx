import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const categoryList = [
    {
        id: 0,
        name: "Electronics",
        image: "https://m.media-amazon.com/images/I/61H76AyN6pL._SL1500_.jpg",
        category: "electronics"
    },
    {
        id: 1,
        name: "Summer Collections",
        image: "https://m.media-amazon.com/images/I/61Ihgz8JotL._SY741_.jpg",
        category: "summer"
    },
    {
        id: 2,
        name: "Winter Collections",
        image: "https://m.media-amazon.com/images/I/41YMvi2psXL.jpg",
        category: "winter"
    },
    {
        id: 3,
        name: "Spring Collections",
        image: "https://m.media-amazon.com/images/I/61ai5LJMmjL._SY741_.jpg",
        category: "spring"
    },
]

const Catagories = () => {
    return (
        <div className=' flex overflow-x-scroll scrollbar-hidden'>
            <div className=' flex gap-4 md:gap-8 py-4 flex-shrink-0'>
                {
                    categoryList.map(item => (
                        <Link key={item.id} href={`/category/${item.category}`} className=' flex flex-col gap-3'>
                            <div className=' w-[300px]'>
                                <Image
                                    src={item.image}
                                    className=' w-full object-cover overflow-hidden h-[300px]'
                                    height={1000}
                                    width={1000}
                                    alt='' />
                            </div>
                            <div className=' text-xl font-medium'>
                                {item.name}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Catagories