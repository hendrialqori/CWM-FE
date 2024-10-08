import dynamic from "next/dynamic"
import Content from "./content"
import Header from "./header"
import Sidebar from "./sidebar"

type Props = {
    children: React.ReactNode
}

const ProtectRoute = dynamic(() => import("#/lib/protect-route"), { ssr: false })

export default function SharedLayout({ children }: Props) {
    return (
        <ProtectRoute>
            <main className="flex">
                <Sidebar />
                <Content>
                    <Header />
                    {children}
                </Content>
            </main>
        </ProtectRoute>
    )
}