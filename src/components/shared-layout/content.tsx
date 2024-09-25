type Props = {
    children: React.ReactNode
}

export default function Content({ children }: Props) {
    return (
        <section
            className="relative w-full min-h-screen max-w-7xl mx-auto px-5 pt-5"
            aria-label="content container"
        >
            {children}
        </section>
    )
}