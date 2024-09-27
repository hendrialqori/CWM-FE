import { ProductCard } from "./product-card";
import { ButtonAddProduct } from "./button-add-product";

function ManageProduct() {

    return (
        <div className="space-y-10" aria-label="manage product container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <h2 className="-tracking-wider text-base md:text-lg font-semibold">Manage product</h2>
                <ButtonAddProduct />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <ProductCard
                    id={1}
                    image="/image/cover-ebook.png"
                    title="Survive in Chinese part 1 Bab 1-5"
                    description="lorem ipsum dolor si amet"
                    originalPrice={99000}
                    strikeThroughPrice={199000}
                />
                <ProductCard
                    id={1}
                    image="/image/cover-ebook.png"
                    title="Survive in Chinese part 1 Bab 1-5"
                    description="lorem ipsum dolor si amet"
                    originalPrice={99000}
                    strikeThroughPrice={199000}
                />
                <ProductCard
                    id={1}
                    image="/image/cover-ebook.png"
                    title="Survive in Chinese part 1 Bab 1-5"
                    description="lorem ipsum dolor si amet"
                    originalPrice={99000}
                    strikeThroughPrice={199000}
                />
                <ProductCard
                    id={1}
                    image="/image/cover-ebook.png"
                    title="Survive in Chinese part 1 Bab 1-5"
                    description="lorem ipsum dolor si amet"
                    originalPrice={99000}
                    strikeThroughPrice={199000}
                />
            </div>
        </div>
    )
}

export { ManageProduct }