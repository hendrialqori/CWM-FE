"use client";

import Portal from "#/components/ui/portal";
import { CgSpinner } from "react-icons/cg";
import { useCredential } from "./credential";

export default function ProtectRoute({ children }: { children: React.ReactNode }) {
    const { status } = useCredential()

    if (status === "loading") {
        return (
            <Portal isOpen>
                <div className="text-white center-flex gap-2">
                    <p>Redirecting to dashboard...</p>
                    <CgSpinner className="animate-spin text-xl" />
                </div>
            </Portal>
        )
    }

    return children
}