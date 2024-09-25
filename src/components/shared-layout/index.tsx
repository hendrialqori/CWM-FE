import Content from "./content"
import Header from "./header"
import Sidebar from "./sidebar"

type Props = {
    children: React.ReactNode
}

export default function SharedLayout({ children }: Props) {
    return (
        <main className="flex">
            <Sidebar />
            <Content>
                {/* <Header /> */}
                {children}
            </Content>
        </main>
    )
}