import { Auth } from "#/@type";
import { API } from "#/constants";
import axios from "axios";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const useInstance = () => {
    const { data } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/admin/login")
        }
    })
    const access_token = (data?.user as unknown as Auth | undefined)?.access_token

    const instance = axios.create({
        baseURL: API,
        headers: {
            "Authorization": `Bearer ${access_token}`
        },
        withCredentials: true
    })

    return instance
}