"use client";

import React from "react";
import axios from "axios";
import { API } from "#/constants";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function DownloadFile({ encrypted }: { encrypted: string }) {
    const router = useRouter()

    function download(blob: Blob, filename: string) {
        // create object url
        const file = URL.createObjectURL(blob)
        
        // Create a link element to trigger the download
        const anchor = document.createElement('a')
        anchor.href = file
        anchor.download = filename
        
        // append achor into document boby
        document.body.appendChild(anchor)
        
        // Trigger the click event on the link to initiate the download
        anchor.click()
        
        // Clean up
        document.body.removeChild(anchor)

        router.push("/")

        toast.success("Berhasil mendownload produk")
        setTimeout(() => {
            toast.success("Selamat belajar :)")
        }, 3000)
    }

    const requestAPI = React.useCallback(async () => {
        try {
            const res = await axios.get(`${API}/download/${encrypted}`, {
                responseType: "blob"
            })
            const blob = res.data as Blob
            //@ts-ignore
            const filename = res.headers.get("X-Filename")
            download(blob, filename)

        } catch (error) {
            console.error(error)
            router.push("/404")
        }
    }, [])

    React.useEffect(() => {
        requestAPI()
    }, [])

    return (
        <section aria-label="download-file" />
    )
}