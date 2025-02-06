import React from 'react'
import { cookies } from "next/headers"
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { getOrdersRoute } from '@/lib/routeProvider';

interface OrderItem {
    product: {
        _id: string,
        name: string,
        description: string,
        images: string[],
        price: number,
        category: string
    },
    qty: number;
    _id: string
}

interface OrderType {
    _id: string;
    items: OrderItem[];
    amount: number;
    createdAt: Date;
}

const ProfileComponent = async () => {

    const cookieStore = await cookies();

    const userId = cookieStore.get("token")?.value;
    let orders: OrderType[] = [];
    if (userId) {

        const response = await axios.post(getOrdersRoute, { userId });
        if (response.data.status) {
            orders = response.data.orders;
        }
    }

    return (
        <>
            <div className=' flex flex-col items-center w-full'>
                <h1 className=' text-2xl font-medium w-full'>Your Orders</h1>
                <div className=' w-full flex flex-col items-center gap-8 mt-10'>
                    {orders.length === 0 && (
                        <div className=' w-full'>
                            <p className='text-xl font-medium'>No orders found</p>
                        </div>
                    )}
                    {orders.map(order => (
                        <div key={order._id} className=' w-full flex flex-col items-center p-8 rounded-3xl gap-4 border border-gray-300'>
                            <div className=' w-full flex items-center gap-8 '>
                                <div className='flex flex-col'>
                                    <p className=' font-semibold text-gray-500'>Order Date:</p>
                                    <p className=' font-semibold'>{order.createdAt.toLocaleString()}</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className=' font-semibold text-gray-500'>Total Amount:</p>
                                    <p className=' font-semibold'>₹{order.amount}</p>
                                </div>
                            </div>
                            <div className=' flex flex-col w-full gap-4'>
                                {order.items.map(item => (
                                    <div key={item._id} className=' w-full flex items-center'>
                                        <div className=' h-full w-[200px] flex items-center justify-center'>
                                            <Link href={`/product/${item.product._id}`} target='_blank' >
                                                {item.product.images?.length > 0 && (
                                                    <Image
                                                        src={item.product.images[0]}
                                                        alt=''
                                                        height={1000}
                                                        width={1000}
                                                        className=' w-full object-cover' />
                                                )}

                                            </Link>
                                        </div>
                                        <div className=' w-full flex flex-col p-4 gap-4'>
                                            <div className='w-full flex justify-between'>
                                                <p className=' text-lg md:text-xl font-semibold'>{item.product.name}</p>
                                                <p className=' text-lg md:text-xl font-semibold'>₹{item.product.price}</p>
                                            </div>
                                            <div className=' w-full lg:w-[800px]'>
                                                <p className=' text-sm md:text-base font-medium text-gray-500'>{item.product.description}</p>
                                            </div>
                                            <div className=' flex flex-col md:flex-row md:items-center justify-between gap-2'>
                                                <p className=' font-semibold text-gray-600'>Quantity: <span className=' text-black'>{item.qty}</span></p>
                                                <Link href={`/product/${item.product._id}`} target='_blank'><p className=' font-semibold text-[#5A52E7]'>View Product</p></Link>
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