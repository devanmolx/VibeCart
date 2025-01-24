"use client"
import { useContext, useCallback } from "react";
import axios from "axios";
import { UserContext } from "@/app/context/User/UserContext";
import { useCookies } from "react-cookie";

function useUpdateUser() {
    const { setUser } = useContext(UserContext);
    const [Cookie] = useCookies();

    const updateUser = useCallback(async () => {
        if (Cookie.token) {
            const response = await axios.post("/api/user/me", { id:Cookie.token });
            if (response.data.status) {
                console.log(response.data.message)
                setUser(response.data.message);
            }
            return response.data.message;
        }
    }, [setUser , Cookie.token]);

    return updateUser;
}

export default useUpdateUser;