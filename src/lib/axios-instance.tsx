import axios from "axios";
import { API } from "#/constants";
import { signOut } from "next-auth/react";

export const useInstance = () => {
    const request = (access_token: string) => {
        const instance = axios.create({
            baseURL: API,
            timeout: 10 * 60 * 1000, // 10 minute
            headers: {
                "Authorization": `Bearer ${access_token}`
            },
            withCredentials: true
        })

        instance.interceptors.response.use(
            (response) => response,
            async (error) => {
                const unauthorize = error.response.status === 401
                if (unauthorize) {
                    await signOut({ redirect: true, callbackUrl: "/admin/login" })
                }

                return Promise.reject(error)
            }
        )

        return instance
    }

    return request
}