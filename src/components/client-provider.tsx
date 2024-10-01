"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

type Props = {
    children: React.ReactNode
}

const queryClient = new QueryClient({
    defaultOptions:
    {
        queries: { refetchOnWindowFocus: false, staleTime: 60 * 1000, }
    }
})

export default function ClientProvider({ children }: Props) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}