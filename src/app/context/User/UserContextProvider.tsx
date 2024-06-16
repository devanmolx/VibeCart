"use client"
import React, { useState } from 'react';
import { UserContext, UserType } from './UserContext';

const UserContextProvider = ({ children }: any) => {

    const [user, setUser] = useState<UserType>({
        _id: "",
        name: "",
        email: "",
        image: "",
        address:"",
        pincode:0,
        cart: [],
        orders:[]
    });

    return (
        <div>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default UserContextProvider;
