"use client";

import React from "react"
import Portal from "#/components/ui/portal"
import { IoMdAdd } from "react-icons/io"
import { ProductForm } from "./form"

function ButtonAddProduct() {
    const [isOpen, setOpen] = React.useState(false)

    function modalStateAction(condition: "open" | "close") {
        return () => setOpen(condition === "open" ? true : false)
    }

    return (
        <React.Fragment>
            <button
                className="center-flex gap-x-2 rounded-lg bg-black text-white px-3 md:px-4 py-2 outline-double hover:outline-black"
                onClick={modalStateAction("open")}
            >
                <IoMdAdd />
                <p className="text-xs md:text-sm font-medium">Add new product</p>
            </button>
            <Portal isOpen={isOpen}>
                <ProductForm type="CREATE" onClose={modalStateAction("close")} />
            </Portal>
        </React.Fragment>
    )
}

export { ButtonAddProduct }