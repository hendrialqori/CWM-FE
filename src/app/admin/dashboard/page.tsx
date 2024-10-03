import { ProductCardList } from "#/modules/dashboard/product-card-list";
import { Transactions } from "#/modules/dashboard/transactions";

export default function Dashboard() {
    return (
        <section className="space-y-24 pb-40">
           <ProductCardList />
           <Transactions />
        </section>
    )
}