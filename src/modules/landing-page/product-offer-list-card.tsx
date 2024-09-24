import { priceFormat } from "#/lib/utils";
import Image from "next/image"
import { FiShoppingCart } from "react-icons/fi";

type ProductCardProps = {
    id: number
    image: string;
    title: string;
    description: string;
    originalPrice: number;
    strikeThroughPrice: number
}

function ProductCard(props: ProductCardProps) {
    return (
        <figure className="bg-white rounded-2xl overflow-hidden shadow-md z-[3]">
            <div className="bg-[#F5F5F5] flex justify-center items-center" aria-label="image-wrapper">
                <Image
                    src={props.image}
                    width={303}
                    height={300}
                    alt="product-pannel"

                />
            </div>
            <figcaption>
                <div className="space-y-7 px-5 py-6">
                    <h3 className="font-fredoka font-bold text-base md:text-xl">{props.title}</h3>
                    <p className="text-[#5D5D5D] font-semibold text-sm md:text-base">
                        It is a long established fact that a reader will be distracted by the...
                        <span role="button" tabIndex={-1} className="hover:underline cursor-pointer">[read more]</span>
                    </p>
                    <div className="flex justify-between">
                        <div className="font-mulish">
                            <p className="line-through text-sm font-medium">Rp {priceFormat(props.strikeThroughPrice)}</p>
                            <p className="font-bold text-base md:text-lg">Rp {priceFormat(props.originalPrice)}</p>
                        </div>
                        <button className="flex items-center justify-between gap-x-3 px-3 md:px-5 py-2 md:py-[10px] text-white rounded-lg
                         bg-gradient-to-r from-[#6E9FB8] to-[#ADC482] outline-double hover:outline-[#6E9FB8]">
                            <span className="text-sm font-semibold font-mulish">Beli sekarang</span>
                            <FiShoppingCart className="text-xl" />
                        </button>
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}

function ProductListCard() {
    return (
        <section className="space-y-10 md:space-y-20 pt-10 md:pt-20" aria-label="product list card">
            <h4 className="font-fredoka text-lg md:text-2xl font-bold text-center">Atau bisa juga pilih e-book yg lebih relevan buat kamu</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
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
                    title="Survive in Chinese part 2 Bab 6-10"
                    description="lorem ipsum dolor si amet"
                    originalPrice={99000}
                    strikeThroughPrice={199000}
                />
                <ProductCard
                    id={1}
                    image="/image/cover-ebook.png"
                    title="Survive in Chinese Complete edition"
                    description="lorem ipsum dolor si amet"
                    originalPrice={99000}
                    strikeThroughPrice={199000}
                />
            </div>
        </section>
    )
}

export { ProductListCard }