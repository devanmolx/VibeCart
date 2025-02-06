import React from 'react'
import { ClipLoader } from "react-spinners";


const Loading = () => {
    return (
        <div className=' left-0 top-0 fixed w-screen h-screen bg-white flex items-center justify-center'>
            <ClipLoader color="#09f" size={50} />
        </div >
    )
}

export default Loading