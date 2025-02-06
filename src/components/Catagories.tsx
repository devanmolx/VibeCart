import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CategoryType {
    _id: string;
    name: string;
    displayName: string;
    image: string;
    createdAt: string
}

interface PropType {
    categories: CategoryType[]
}

const Catagories: React.FC<PropType> = ({ categories }) => {

    return (
        <div className='w-full flex flex-col md:flex-row justify-center flex-wrap items-center gap-8'>
            {categories &&
                categories.map(item => (
                    <Link key={item._id} href={`/category/${item._id}`} className=' flex flex-col gap-3 w-[220px]'>
                        <div className=' relative w-full h-[220px]'>
                            <Image
                                src={item.image}
                                className=' w-full object-cover overflow-hidden h-[300px]'
                                fill
                                alt='' />
                        </div>
                        <div className=' text-xl font-medium'>
                            {item.name}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Catagories