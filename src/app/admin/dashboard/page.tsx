import { ManageProduct } from "#/modules/dashboard/manage-product";
import { TransactionHistory } from "#/modules/dashboard/transaction-history";

export default function Dashboard() {
    return (
        <section className="space-y-24 pb-40">
           <ManageProduct />
           <TransactionHistory />
        </section>
    )
}