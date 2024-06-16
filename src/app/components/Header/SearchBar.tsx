"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SearchBar = () => {

    const router = useRouter();
    const [name , setName] = useState("");

    function handleOnSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(name){
            router.push(`/list?name=${name}`)
        }
    }

    return (
        <form className=' flex items-center justify-between bg-gray-200 rounded-md px-4 py-3 flex-1' onSubmit={handleOnSubmit}>
            <input className=' w-full bg-transparent focus:outline-none' type="text" placeholder='Search...' onChange={(e)=>{setName(e.target.value)}} />
            <button type='submit' className=' cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </form>
    )
}

export default SearchBar