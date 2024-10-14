"use client";

import Portal from "#/components/ui/portal";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Checkout } from "./checkout";
import { useProductOfferPublic } from "#/services/product-service";
import { priceFormat } from "#/lib/utils";
import { toast } from "sonner";

export function ProductOfferCheckout() {
    const { data: offer, isLoading, isError } = useProductOfferPublic()

    const [isCheckout, setChekcout] = React.useState(false)

    function checkoutProduct() {
        if (isError) {
            toast.error("Cannot checkout, something went wrong")
            return
        }
        setChekcout(true)
    }

    function closeCheckout() {
        setChekcout(false)
    }

    return (
        <React.Fragment>
            <div className="space-y-8 md:space-y-12">
                <div className="text-center">
                    <h4 className="font-fredoka text-base md:text-2xl font-bold">Total value:</h4>
                    <p className="font-mulish line-through font-medium text-lg md:text-3xl">Rp. {priceFormat(14999000)},-</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <p className="text-base md:text-xl lg:text-2xl text-center">
                        Aku tuangkan pengalamanku tinggal di China selama <span className="font-bold">5 tahun</span> dan aku rangkum ke dalam guidebook ini! Kamu bisa pelajari Bahasa Mandarin secara mandiri hanya dengan seharga:
                    </p>
                </div>
                <div className="text-center">
                    <h4 className="font-fredoka text-base md:text-2xl font-bold">All Guide book ini bisa kamu dapatkan dengan harga</h4>
                    <p className="font-mulish line-through font-medium text-lg md:text-3xl">Rp. {priceFormat(offer?.data.strikeoutPrice ?? 0)},-</p>
                </div>
                <div className="relative text-center z-[2]">
                    <p className="font-mulish font-semibold text-[#5D5D5D] text-sm md:text-base">Harga spesial hari ini!</p>
                    <h3 className="font-fredoka text-3xl md:text-6xl font-bold">Rp. {priceFormat(offer?.data.originalPrice ?? 0)},-</h3>
                </div>
                <button
                    className="relative w-max mx-auto bg-black rounded-lg center-flex gap-2 text-white px-6 py-2 z-[2] outline-double active:outline-black"
                    disabled={isLoading || isError}
                    onClick={checkoutProduct}
                >
                    <p className="text-sm md:text-xl font-mulish font-medium">Dapatkan sekarang!</p>
                    <FiShoppingCart className="text-base md:text-xl" />
                </button>
            </div>
            <Portal isOpen={isCheckout}>
                <Checkout
                    id={offer?.data.id ?? ""}
                    title={offer?.data.title ?? ""}
                    image={offer?.data.image ?? ""}
                    originalPrice={offer?.data.originalPrice ?? 0}
                    strikeoutPrice={offer?.data.strikeoutPrice ?? 0}
                    onClose={closeCheckout}
                />
            </Portal>
        </React.Fragment>
    )
}
