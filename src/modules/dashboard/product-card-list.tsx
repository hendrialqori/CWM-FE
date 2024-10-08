"use client"

import { useGetProductList } from "#/services/product-service";
import { ProductCard, ProductCardSkeleton } from "./product-card";
import { ButtonAddProduct } from "./button-add-product";
import Flow from "#/components/control-flow";

export default function ProductCardList() {
    const { data: products, isPending, isSuccess } = useGetProductList()

    return (
        <div className="space-y-10" aria-label="manage product container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <h2 className="font-fredoka -tracking-wide text-base md:text-lg font-semibold">Manage product</h2>
                <ButtonAddProduct />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <Flow>
                    <Flow.If condition={isPending}>
                        {Array.from({ length: 3 }).map((_, i) =>
                            <ProductCardSkeleton key={i} />
                        )}
                    </Flow.If>
                    <Flow.ElseIf condition={isSuccess}>
                        {products?.data.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </Flow.ElseIf>
                    <Flow.Else>
                        <p className="text-xs md:text-sm lg:text-base text-red-500">Something when wrong!</p>
                    </Flow.Else>
                </Flow>

            </div>
        </div>
    )
}
