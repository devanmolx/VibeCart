"use client"
import axios from 'axios';
import { useContext, useEffect } from 'react'
import { getCartRoute, userRoute } from '@/lib/routeProvider';
import Cookie from 'js-cookie'
import { CartContext } from '@/app/context/Cart/CartContext';
import { UserContext } from '@/app/context/User/UserContext';

const UpdateUserDetails = () => {

    const { setUser } = useContext(UserContext);
    const { setCart } = useContext(CartContext);

    async function fetchUserDetails() {
        const token = Cookie.get('token');
        let user;
        let cart;
        if (token) {
            const response1 = await axios.post(userRoute, { userId: token });
            const response2 = await axios.post(getCartRoute, { userId: token });

            if (response1.data.status) {
                user = response1.data.user
                console.log(user);
                setUser(user);
            }

            if (response2.data.status) {
                cart = response2.data.cart;
                console.log(cart);
                setCart(cart);
            }
        }
    }

    useEffect(() => {
        fetchUserDetails();
    } , [])

    return (
        null
    )
}

export default UpdateUserDetails