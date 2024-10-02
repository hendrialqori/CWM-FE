import { ProductCardList } from "#/modules/dashboard/product-card-list";
import { TransactionHistory } from "#/modules/dashboard/transaction-history";

export default function Dashboard() {
    return (
        <section className="space-y-24 pb-40">
           <ProductCardList />
           <TransactionHistory />
        </section>
    )
}