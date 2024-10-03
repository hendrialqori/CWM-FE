"use client";

import React from "react";
import Image from "next/image"
import { priceFormat } from "#/lib/utils";
import { FiTrash } from "react-icons/fi";
import { TbPencil } from "react-icons/tb";
import Portal from "#/components/ui/portal";
import { ProductForm } from "./form";
import { ProductDelete } from "./delete";
import { Product } from "#/@type";
import { STATIC } from "#/constants";

const modalState = {
    update: false,
    delete: false
}

function ProductCard(props: Product) {
    const [modal, setModal] = React.useState(modalState)
    const [expand, setExpand] = React.useState(false)

    function showModalAction(type: "update" | "delete") {
        return () => setModal(({ ...modalState, [type]: true }))
    }

    function truncateDescription(text: string) {
        const slice = text.slice(0, 50) + " ..."
        return expand ? text : slice
    }

    function toggleExpandAction() {
        setExpand(prev => !prev)
    }

    function resetModalAction() {
        setModal(modalState)
    }

    return (
        <>
            <figure className="bg-white rounded-2xl overflow-hidden shadow-md z-[3] w-full">
                <div className="bg-[#F5F5F5] flex justify-center items-center" aria-label="image-wrapper">
                    <Image
                        src={`${STATIC}/${props.image}`}
                        width={303}
                        height={300}
                        alt="product-pannel"
                        className="object-cover h-60 w-full"
                        priority
                    />
                </div>
                <figcaption className="space-y-5 px-5 py-6">
                    <div className="space-y-2" aria-label="title & discription">
                        <h3 className="font-fredoka font-bold text-base md:text-lg">{props.title}</h3>
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
                    <div className="flex items-center justify-between">
                        <div className="">
                            <p className="line-through text-sm font-medium text-red-600">Rp {priceFormat(props.strikeoutPrice)}</p>
                            <p className="font-bold text-sm md:text-lg">Rp {priceFormat(props.originalPrice)}</p>
                        </div>
                        <div className="space-x-4">
                            <button
                                className="bg-[#F8F8F8] border border-[#DBDBDB] rounded-md p-[2px] hover:outline-double hover:outline-black"
                                onClick={showModalAction("update")}
                            >
                                <TbPencil className="text-2xl" />
                            </button>
                            <button
                                className="bg-[#F8F8F8] border border-[#DBDBDB] rounded-md p-[2px] hover:outline-double hover:outline-black"
                                onClick={showModalAction("delete")}
                            >
                                <FiTrash className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </figcaption>
            </figure>
            <Portal isOpen={modal.update}>
                <ProductForm
                    type="UPDATE"
                    id={props.id}
                    onClose={resetModalAction}
                />
            </Portal>
            <Portal isOpen={modal.delete} >
                <ProductDelete id={props.id}
                    onClose={resetModalAction} />
            </Portal>
        </>
    )
}

function ProductCardSkeleton() {
    return (
        <div className="bg-gray-300 rounded-2xl overflow-hidden shadow-md z-[3] h-52 animate-pulse" />
    )
}

export { ProductCard, ProductCardSkeleton }