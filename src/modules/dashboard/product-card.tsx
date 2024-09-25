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
        <figure className="bg-white rounded-2xl overflow-hidden shadow-md z-[3] w-full max-w-[300px]">
            <div className="bg-[#F5F5F5] flex justify-center items-center" aria-label="image-wrapper">
                <Image
                    src={props.image}
                    width={303}
                    height={300}
                    alt="product-pannel"

                />
            </div>
            <figcaption>
                <div className="space-y-4 px-5 py-6">
                    <h3 className="font-semibold text-base">{props.title}</h3>
                    <p className="text-[#5D5D5D] font-semibold text-sm">
                        It is a long established fact that a reader will be distracted by the...
                        <span role="button" tabIndex={-1} className="hover:underline cursor-pointer">[read more]</span>
                    </p>
                    <div className="flex justify-between">
                        <div className="">
                            <p className="line-through text-sm font-medium">Rp {priceFormat(props.strikeThroughPrice)}</p>
                            <p className="font-bold text-base md:text-lg">Rp {priceFormat(props.originalPrice)}</p>
                        </div>
                        <button className="flex items-center justify-between gap-x-3 px-3 md:px-5 py-2 md:py-[10px] text-white rounded-lg
                     bg-gradient-to-r from-[#6E9FB8] to-[#ADC482] outline-double hover:outline-[#6E9FB8]">
                            <span className="text-sm font-semibold ">Beli sekarang</span>
                            <FiShoppingCart className="text-xl" />
                        </button>
                    </div>
                </div>
            </figcaption>
        </figure>
    )
}

export { ProductCard }