import { useQuery } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import type { Success, Error, Transaction } from "#/@type"
import { API } from "#/constants"

type Query = {
    page: number;
    limit: number
    start_date: string;
    end_date: string
}

export function useGetTransactiontList(query: Query) {
    type Params = { signal: AbortSignal }

    const queries = new URLSearchParams()
    queries.set("page", query.page.toString())
    queries.set("limit", query.limit.toString())
    queries.set("start_date", query.start_date)
    queries.set("end_date", query.end_date)

    const GET = async ({ signal }: Params) => {
        const req = await axios.get(`${API}/transaction/list?${queries.toString()}`, {
            withCredentials: true,
            signal
        })
        return req.data
    }

    return useQuery<Success<Transaction[]>, AxiosError<Error>>({
        queryKey: ["TRANSACTION/LIST", query],
        queryFn: GET
    })
}

