import dynamic from "next/dynamic";
import SharedLayout from "#/components/shared-layout";

const ProductCardList = dynamic(() => import("#/modules/dashboard/product-card-list"), {
    ssr: false
})

const Transactions = dynamic(() => import("#/modules/dashboard/transactions"), {
    ssr: false
})

export default function Dashboard() {
    return (
        <SharedLayout>
            <section className="space-y-24 pb-40">
                <ProductCardList />
                <Transactions />
            </section>
        </SharedLayout>

    )
}