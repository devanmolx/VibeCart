import { createContext } from "react";

interface Cart{
    id:number,
    name : string,
    description : string,
    price : number,
    category : string,
    qty: number,
    images: string[]
}

interface Order{
    items:Cart[],
    date: Date
}

export interface UserType {
    _id: string
    name: string
    email: string
    image: string
    address:string
    pincode:number
    cart: Cart[]
    orders: Order[]
}

type UserContextType = {
    user: UserType,
    setUser: (user:UserType) => void
}

const userContextDefaultValue: UserContextType = {
    user:{
        _id: "",
        name: "",
        email: "",
        image: "",
        address:"",
        pincode: 0,
        cart: [],
        orders: []
    },
    setUser: () => {}
}

export const UserContext = createContext<UserContextType>(userContextDefaultValue);