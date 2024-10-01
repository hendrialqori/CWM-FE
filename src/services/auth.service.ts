import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios"
import { API } from "#/constants";
import type { Auth, Success, Error } from "#/@type";

export async function getProfile(): Promise<Success<Auth>> {
    const req = await axios.get(`${API}/auth/profile`, {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        }

    })
    return req.data
}

export function useLogin() {
    type Params = Pick<Auth, "email" | "password">

    // login action
    const POST = async ({ email, password }: Params) => {
        const req = await axios.post(`${API}/auth/login`, { email, password }, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            }
        })

        return await req.data
    }

    return useMutation<Success<unknown>, AxiosError<Error>, Params>({
        mutationFn: POST
    })
}

export function useLogout() {
    const DELETE = async () => {
        const req = await axios.delete(`${API}/auth/logout`)
        return req.data
    }

    return useMutation<Success<unknown>, AxiosError<Error>>({
        mutationFn: DELETE
    })
}

export function useProfile() {
    const GET = getProfile

    return useQuery<Success<Auth>, AxiosError<Error>>({
        queryKey: ["PROFILE"],
        queryFn: GET,
        staleTime: 1 * (60 * 1000)
    })
}