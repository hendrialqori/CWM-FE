"use client"

import { useGetProductList } from "#/services/product.servic";
import { ProductCard } from "./product-card";
import { ButtonAddProduct } from "./button-add-product";

function ManageProduct() {

    const { data: products } = useGetProductList()

    return (
        <div className="space-y-10" aria-label="manage product container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <h2 className="-tracking-wider text-base md:text-lg font-semibold">Manage product</h2>
                <ButtonAddProduct />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products?.data.map((product) => (
                    <ProductCard key={product.id} {...product}/>
                ))}
            </div>
        </div>
    )
}

export { ManageProduct }