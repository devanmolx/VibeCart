"use client"
import { useContext, useCallback } from "react";
import axios from "axios";
import { UserContext } from "@/app/context/User/UserContext";
import Cookie from "js-cookie";

function useUpdateUser() {
    const { setUser } = useContext(UserContext);

    const updateUser = useCallback(async () => {
        const token = Cookie.get("token");
        if (token) {
            const response = await axios.post("/api/user/me", { id:token });
            if (response.data.status) {
                console.log(response.data.message)
                setUser(response.data.message);
            }
            return response.data.message;
        }
    }, [setUser]);

    return updateUser;
}

export default useUpdateUser;