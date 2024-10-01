"use client";

import React from "react";
import Image from "next/image"
import { priceFormat } from "#/lib/utils";
import { FiTrash } from "react-icons/fi";
import { TbPencil } from "react-icons/tb";
import Portal from "#/components/ui/portal";
import { ProductForm } from "./form";
import { ProductDelete } from "./product-delete";
import { Product } from "#/@type";
import { STATIC } from "#/constants";

const modalState = {
    update: false,
    delete: false
}

function ProductCard(props: Product) {

    const [modal, setModal] = React.useState(modalState)

    function showModalAction(type: "update" | "delete") {
        return () => setModal(({ ...modalState, [type]: true }))
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

                    />
                </div>
                <figcaption>
                    <div className="space-y-2 md:space-y-4 px-5 py-6">
                        <h3 className="font-semibold text-sm md:text-base">{props.title ?? "[No-name]"}</h3>
                        <p className="text-[#5D5D5D] font-semibold text-xs md:text-sm">
                            {props.description} {" "}
                            <span role="button" tabIndex={-1} className="hover:underline cursor-pointer">[read more]</span>
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="">
                                <p className="line-through text-sm font-medium text-red-600">Rp {priceFormat(props.strikeoutPrice)}</p>
                                <p className="font-bold text-sm md:text-lg">Rp {priceFormat(props.originalPrice)}</p>
                            </div>
                            <div className="space-x-4">
                                <button
                                    className="bg-[#F8F8F8] border border-[#DBDBDB] rounded-md p-[2px] hover:outline-double hover:outline-black"
                                    onClick={showModalAction("delete")}
                                >
                                    <FiTrash className="text-2xl" />
                                </button>
                                <button
                                    className="bg-[#F8F8F8] border border-[#DBDBDB] rounded-md p-[2px] hover:outline-double hover:outline-black"
                                    onClick={showModalAction("update")}
                                >
                                    <TbPencil className="text-2xl" />
                                </button>
                            </div>
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

export { ProductCard }