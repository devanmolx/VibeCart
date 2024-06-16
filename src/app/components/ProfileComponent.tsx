"use client"
import React, { useContext } from 'react'
import { UserContext } from '../context/User/UserContext'
import Image from 'next/image';
import Link from 'next/link';

interface OrderItemType {
    id: number;
    name: string;
    description: string;
    price: number;
    qty: number;
    images: string[];
}

const ProfileComponent = () => {

    const { user } = useContext(UserContext);

    function TotalAmount(order: OrderItemType[]) {
        let cost = 0;
        for (let i = 0; i < order.length; i++) {
            cost += order[i].qty * order[i].price;
        }
        return cost;
    }

    return (
        <>
            <div className=' flex flex-col items-center w-full'>
                <h1 className=' text-2xl font-medium w-full'>Your Orders</h1>
                <div className=' w-full flex flex-col items-center gap-8 mt-10'>
                    {user.orders.length === 0 && (
                        <div className=' w-full'>
                            <p className='text-xl font-medium'>No orders found</p>
                        </div>
                    )}
                    {user.orders.map(order => (
                        <div key={order.date.toString()} className=' w-full flex flex-col items-center p-8 rounded-3xl gap-4 border border-gray-300'>
                            <div className=' w-full flex items-center gap-8 '>
                                <div className='flex flex-col'>
                                    <p className=' font-semibold text-gray-500'>Order Date:</p>
                                    <p className=' font-semibold'>{(new Date(order.date)).toLocaleString().split(',')[0]}</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className=' font-semibold text-gray-500'>Total Amount:</p>
                                    <p className=' font-semibold'>₹{TotalAmount(order.items)}</p>
                                </div>
                            </div>
                            <div className=' flex flex-col w-full gap-4'>
                                {order.items.map(item => (
                                    <div key={item.id} className=' w-full flex items-center'>
                                        <div className=' h-full w-[200px]'>
                                            <Link href={`/product/${item.id}`} target='_blank' >
                                                {item.images?.length > 0 && (
                                                    <Image
                                                        src={item.images[0]}
                                                        alt=''
                                                        height={1000}
                                                        width={1000}
                                                        className=' w-full object-cover' />
                                                )}

                                            </Link>
                                        </div>
                                        <div className=' w-full flex flex-col p-4 gap-4'>
                                            <div className='w-full flex justify-between'>
                                                <p className=' text-lg md:text-xl font-semibold'>{item.name}</p>
                                                <p className=' text-lg md:text-xl font-semibold'>₹{item.price}</p>
                                            </div>
                                            <div className=' w-full lg:w-[800px]'>
                                                <p className=' text-sm md:text-base font-medium text-gray-500'>{item.description}</p>
                                            </div>
                                            <div className=' flex flex-col md:flex-row md:items-center justify-between gap-2'>
                                                <p className=' font-semibold text-gray-600'>Quantity: <span className=' text-black'>{item.qty}</span></p>
                                                <Link href={`/product/${item.id}`} target='_blank'><p className=' font-semibold text-[#5A52E7]'>View Product</p></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProfileComponent