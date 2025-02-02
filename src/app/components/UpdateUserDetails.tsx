import axios from 'axios';
import React from 'react'
import { cookies } from "next/headers"
import { getCartRoute, userRoute } from '@/lib/routeProvider';
import UpdateDetails from './UpdateDetails';

const UpdateUserDetails = async () => {

    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value;
    let user;
    let cart;
    if (token) {
        const response1 = await axios.post(userRoute, { userId: token });
        const response2 = await axios.post(getCartRoute, { userId: token });

        if (response1.data.status) {
            user = response1.data.user
        }

        if (response2.data.status) {
            cart = response2.data.cart;
        }
    }

    return (
        <UpdateDetails user={user} cart={cart} />
    )
}

export default UpdateUserDetails