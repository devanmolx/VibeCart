import React from 'react'

const Filter = () => {
  return (
    <div className=' w-full flex items-center justify-between flex-wrap gap-y-4'>
        <div className=' flex items-center gap-4'>
            <input type="text" className=' rounded-full w-[100px] border border-lightgray p-2 focus:outline-none' placeholder=' min price' />
            <input type="text" className=' rounded-full w-[100px] border border-lightgray p-2 focus:outline-none' placeholder=' max price' />
            <button className=' p-2 bg-pink text-white rounded-full font-medium'>Apply Fliter</button>
        </div>
        <div className=' flex items-center'>    
            <select name="" id="" className=' rounded-full p-2 bg-white ring-1 ring-lightgray'>
                <option>Sort by</option>
                <option>Price (low to high)</option>
                <option>Price (high to low)</option>
                <option>Newest</option>
                <option>Oldest</option>
            </select>
        </div>
    </div>
  )
}

export default Filter