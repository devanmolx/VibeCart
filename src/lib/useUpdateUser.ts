"use client"
import { useContext, useCallback } from "react";
import axios from "axios";
import { UserContext } from "@/app/context/User/UserContext";

function useUpdateUser(id:string) {
    const { user, setUser } = useContext(UserContext);

    const updateUser = useCallback(async () => {
        const response = await axios.post("/api/user/me", { id });
        if(response.data.status){
            setUser(response.data.message);
        }
        return response.data.message;
    }, [user, setUser]);

    return updateUser;
}

export default useUpdateUser;