// "use client"
// import axios from 'axios';
// import Router from "next/router";
// import React, { useContext, useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { UserContext } from '../context/User/UserContext';

// const AddDetails = () => {

//     const {user} = useContext(UserContext);
//     const [address, setAddress] = useState<string>("");
//     const [pincode, setPincode] = useState<number | "">(0);

//     async function handleSubmit(e: any) {
//         e.preventDefault();

//         if (address.length > 10 && pincode.toString().length === 6) {

//             const response = await axios.post("/api/user/update", JSON.stringify({ id:user._id ,address, pincode }))
//             if (response.data.status) {
//                 Router.reload();
//             }
//             else{
//                 toast.error(response.data.status)
//             }

//         }
//         else {
//             toast.error("Invalid inputs")
//         }
//     }

//     return (
//         <div className='w-full flex flex-col items-center gap-8 pt-8'>
//             <h1 className='text-lg text-center'>Please Enter the below Details to complete the Signup Process</h1>
//             <form onSubmit={handleSubmit} className='flex flex-col text-lg gap-2 w-[350px]'>
//                 <label htmlFor="address">Address</label>
//                 <textarea className='bg-gray-200 p-2 rounded-lg focus:outline-none' id='address' onChange={(e) => { setAddress(e.target.value) }}></textarea>
//                 <label htmlFor="pincode">Pincode</label>
//                 <input className='bg-gray-200 p-2 rounded-lg focus:outline-none' id='pincode' maxLength={6} type="number" onChange={(e) => { setPincode(parseInt(e.target.value) || "") }} />
//                 <button className='mt-4 p-2 rounded-lg text-lg font-medium border border-pink text-pink hover:bg-pink hover:text-white'>Submit</button>
//             </form>
//             <ToastContainer />
//         </div>
//     )
// }

// export default AddDetails
