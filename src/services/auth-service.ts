import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios"
import { API } from "#/constants";
import type { Credential, Success, Error } from "#/@type";

type Params = Pick<Credential, "email" | "password">

export async function login({ email, password }: Params): Promise<Success<{ access_token: string }> | undefined> {
    const req = await axios.post(`${API}/auth/login`, { email, password }, {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        }
    })

    return await req.data
}


export async function getProfile(): Promise<Success<Credential>> {
    const req = await axios.get(`${API}/auth/profile`, {
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        }

    })
    return req.data
}

// export function useLogin() {


//     // login action
//     const POST = async ({ email, password }: Params) => {
//         const req = await axios.post(`${API}/auth/login`, { email, password }, {
//             withCredentials: true,
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })

//         return await req.data
//     }

//     return useMutation<Success<unknown>, AxiosError<Error>, Params>({
//         mutationFn: POST
//     })
// }

// login action

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

    return useQuery<Success<Credential>, AxiosError<Error>>({
        queryKey: ["PROFILE"],
        queryFn: GET,
        staleTime: 1 * (60 * 1000)
    })
}