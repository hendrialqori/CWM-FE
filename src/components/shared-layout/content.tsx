type Props = {
    children: React.ReactNode
}

export default function Content({ children }: Props) {
    return (
        <section
            className="relative w-full min-h-screen w-7xl max-w-[2550px] mx-auto px-2 md:px-5 xl:px-10 pt-5 space-y-8"
            aria-label="content container"
        >
            {children}
        </section>
    )
}