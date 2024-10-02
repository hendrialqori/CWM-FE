import React from "react";
import Image from "next/image";
import { Product } from "#/@type";
import { cn, priceFormat } from "#/lib/utils";
import { FiShoppingCart } from "react-icons/fi";
import { STATIC } from "#/constants";
import Portal from "#/components/ui/portal";
import { Checkout } from "./checkout";

function ProductCard(props: Product) {

    const [isCheckout, setChekcout] = React.useState(false)
    const [expand, setExpand] = React.useState(false)

    function truncateDescription(text: string) {
        const slice = text.slice(0, 50) + " ..."
        return expand ? text : slice
    }

    function toggleExpandAction() {
        setExpand(prev => !prev)
    }
    function checkoutAction(type: "open" | "close") {
        return () => setChekcout(type === "open" ? true : false)
    }

    return (
        <React.Fragment>
            <figure className="bg-white rounded-2xl overflow-hidden shadow-md z-[3]">
                <div className="bg-[#F5F5F5] flex justify-center items-center" aria-label="image-wrapper">
                    <Image
                        src={STATIC + "/" + props.image}
                        width={303}
                        height={300}
                        alt="product-pannel"
                        className="h-52 w-full object-cover"

                    />
                </div>
                <figcaption className="space-y-5 px-5 py-6">
                    <div className="space-y-2" aria-label="title & discription">
                        <h3 className="font-fredoka font-bold text-base md:text-xl">{props.title}</h3>
                        <div className="min-h-20 text-[#5D5D5D] font-medium text-sm md:text-base">
                            <p>{truncateDescription(props?.description ?? "")} {" "}</p>
                            <span
                                role="button"
                                tabIndex={-1}
                                className={`${expand && "text-black"} hover:underline cursor-pointer`}
                                onClick={toggleExpandAction}
                            >
                                {expand ? "[show less]" : "[read more]"}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="font-mulish">
                            <p className="line-through text-sm font-medium">Rp {priceFormat(props.strikeoutPrice)}</p>
                            <p className="font-bold text-base md:text-lg">Rp {priceFormat(props.originalPrice)}</p>
                        </div>
                        <button
                            className={cn(
                                "flex items-center justify-between gap-x-3 px-3 md:px-5 py-2 md:py-[10px] text-white rounded-lg",
                                "bg-gradient-to-r from-[#6E9FB8] to-[#ADC482] outline-double hover:outline-[#6E9FB8]"
                            )}
                            onClick={checkoutAction("open")}
                        >
                            <span className="text-sm font-semibold font-mulish">Beli sekarang</span>
                            <FiShoppingCart className="text-xl" />
                        </button>
                    </div>
                </figcaption>
            </figure>
            <Portal isOpen={isCheckout}>
                <Checkout
                    {...props}
                    image={STATIC + "/" + props.image}
                    onClose={checkoutAction("close")}
                />
            </Portal>
        </React.Fragment>
    )
}


function ProductCardSkeleton() {
    return <div className="bg-gray-300 rounded-2xl overflow-hidden shadow-md z-[3] h-52 animate-pulse" />
}

export { ProductCard, ProductCardSkeleton }