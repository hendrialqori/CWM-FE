import { useMutation, useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import type { Success, Product, Error } from "#/@type"
import { API } from "#/constants"

export function useGetProductList() {

    type Params = { signal: AbortSignal }

    const GET = async ({ signal }: Params) => {
        const req = await axios.get(`${API}/product/list`, {
            withCredentials: true,
            signal
        })

        return req.data
    }

    return useQuery<Success<Product[]>, AxiosError<Error>>({
        queryKey: ["PRODUCT/LIST"],
        queryFn: GET
    })
}

export function useGetProduct({ id }: { id: number }) {

    type Params = { signal: AbortSignal }

    const GET = async ({ signal }: Params) => {
        const req = await axios.get(`${API}/product/${id}`, {
            withCredentials: true,
            signal
        })

        return req.data
    }

    return useQuery<Success<Product>, AxiosError<Error>>({
        queryKey: [`PRODUCT/DETAIL`, id],
        queryFn: GET,
        enabled: false
    })
}

export function useMutationProduct() {

    type PostParams = { formData: FormData }

    type DeleteParams = { id: number }

    type UpdateParams = PostParams & DeleteParams

    const POST = async ({ formData }: PostParams) => {
        const req = await axios.post(`${API}/product/add`, formData, {
            withCredentials: true
        })

        return req.data
    }

    const UPDATE = async ({ id, formData }: UpdateParams) => {
        const req = await axios.put(`${API}/product/${id}/update`, formData, {
            withCredentials: true
        })

        return req.data
    }

    const DELETE = async ({ id }: DeleteParams) => {
        const req = await axios.delete(`${API}/product/${id}/remove`)
        return req.data
    }

    const postMutation = useMutation<
        Success<Omit<Product, "createdAt" | "updatedAt">>,
        AxiosError<Error>,
        PostParams>({
            mutationFn: POST
        })

    const updateMutation = useMutation<
        Success<Omit<Product, "createdAt" | "updatedAt">>,
        AxiosError<Error>,
        UpdateParams>({
            mutationFn: UPDATE
        })

    const deleteMutation = useMutation<Success<unknown>, AxiosError<Error>, DeleteParams>({
        mutationFn: DELETE
    })

    return { postMutation, updateMutation, deleteMutation }

}