import { IoMdAdd } from "react-icons/io";
import { ProductCard } from "./product-card";

function ManageProduct() {
    
    return (
        <div className="space-y-10" aria-label="manage product container">
            <div className="flex justify-between items-center">
                <h2 className="-tracking-wider text-xl font-semibold">Manage product</h2>
                <button className="center-flex gap-x-2 rounded-lg bg-black text-white px-4 py-2 outline-double hover:outline-black">
                    <IoMdAdd />
                    <p className="text-sm font-medium">Add new product</p>
                </button>
            </div>
            <div className="grid grid-cols-3 gap-6">
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