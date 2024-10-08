import { useMutation, useQuery } from "@tanstack/react-query"
import { useInstance } from "#/lib/axios-instance"
import { type AxiosError } from "axios"
import type { Success, Product, Error } from "#/@type"
import { useCredential } from "#/lib/credential"

type Params = { signal: AbortSignal }

export function useGetProductList() {
    const instance = useInstance()
    const { credential } = useCredential()

    const GET = async ({ signal }: Params) => {
        const req = await instance(credential?.access_token ?? "")
            .get("/product/list", {
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
    const instance = useInstance()
    const { credential } = useCredential()

    const GET = async ({ signal }: Params) => {
        const req = await instance(credential?.access_token ?? "")
            .get(`/product/${id}`, {
                signal
            })

        return req.data
    }

    return useQuery<Success<Product>, AxiosError<Error>>({
        queryKey: ["PRODUCT/DETAIL", id],
        queryFn: GET,
        enabled: false
    })
}

export function useMutationProduct() {
    const instance = useInstance()
    const { credential } = useCredential()

    type PostParams = { formData: FormData }
    type DeleteParams = { id: number }
    type UpdateParams = PostParams & DeleteParams

    const POST = async ({ formData }: PostParams) => {
        const req = await instance(credential?.access_token ?? "")
            .post("/product/add", formData)
        return req.data
    }

    const UPDATE = async ({ id, formData }: UpdateParams) => {
        const req = await instance(credential?.access_token ?? "")
            .put(`/product/${id}/update`, formData)
        return req.data
    }

    const DELETE = async ({ id }: DeleteParams) => {
        const req = await instance(credential?.access_token ?? "")
            .delete(`/product/${id}/remove`)
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