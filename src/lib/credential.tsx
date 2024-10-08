import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export function useCredential() {

    const { data, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/admin/login")
        }
    })

    return { credential: data?.user, status }

}