"use client"

import React from "react"
import { CgSpinner } from "react-icons/cg"
import { signOut } from "next-auth/react"
import Portal from "#/components/ui/portal"

type Props = {
    onClose: () => void
}

export function Logout({ onClose }: Props) {
    const [isLoading, setLoading] = React.useState(false)

    async function logoutAction() {
        setLoading(true)
        await signOut({ redirect: true, callbackUrl: "/admin/login" })

    }

    return (
        <React.Fragment>
            <div className="bg-white rounded-xl px-10 py-10 w-[360px] space-y-7">
                <p className="text-sm md:text-base font-medium text-center">Logout ?</p>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        className="text-sm font-medium bg-[#F8F8F8] border border-[#DBDBDB] rounded-lg py-2 h-10 hover:outline-double hover:outline-black"
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        Batal
                    </button>
                    <button
                        className="text-sm font-medium bg-black text-white rounded-lg py-2 h-10 outline-double active:outline-black"
                        onClick={logoutAction}
                    >
                        Logout
                    </button>
                </div>
            </div>
            <Portal isOpen={isLoading}>
                <div className="text-white center-flex gap-2">
                    <p>Loading...</p>
                    <CgSpinner className="animate-spin text-xl" />
                </div>
            </Portal>
        </React.Fragment>
    )
}