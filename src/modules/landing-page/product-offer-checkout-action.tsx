"use client";

import Portal from "#/components/ui/portal";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Checkout } from "./checkout";


function ProductOfferCheckoutAction() {
    const [isCheckout, setChekcout] = React.useState(false)

    function toggleCheckout(type: "open" | "close") {
        return () => setChekcout(type === "open" ? true : false)
    }

    return (
        <React.Fragment>
            <button
                className="relative w-max mx-auto bg-black rounded-lg center-flex gap-2 text-white px-6 py-2 z-[2] outline-double active:outline-black"
                onClick={toggleCheckout("open")}
            >
                <p className="text-sm md:text-xl font-mulish font-medium">Beli sekarang</p>
                <FiShoppingCart className="text-base md:text-xl" />
            </button>
            <Portal isOpen={isCheckout}>
                <Checkout
                    id={1}
                    title="Chinesewithmeggie limited Edition"
                    image="/image/cover-ebook.png"
                    originalPrice={149000}
                    strikeoutPrice={399000}
                    onClose={toggleCheckout("close")}
                />
            </Portal>
        </React.Fragment>
    )
}

export { ProductOfferCheckoutAction }