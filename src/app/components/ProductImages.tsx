"use client"
import Image from 'next/image'
import React, { useState } from 'react'

interface PropType{
    images:string[]
}

const ProductImages:React.FC<PropType> = ({images}) => {

    const [currentImage , setCurrentImage] = useState(images[0])

  return (
    <div className=' flex flex-col gap-6'>
        <div className=' w-full'>
            <Image src={currentImage} alt='' width={1000} height={1000} className=' w-full rounded-md' />
        </div>
        <div className=' flex flex-wrap gap-2 overflow-x-scroll w-full scrollbar-hidden cursor-pointer'>
            {images.map(photo =>(
                <div key={photo[0]} onClick={()=>{setCurrentImage(photo)}} className=' w-[150px]'>
                    <Image src={photo} alt='' width={1000} height={1000} className=' w-full rounded-md' />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductImages