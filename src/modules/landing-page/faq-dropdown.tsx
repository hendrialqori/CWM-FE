"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Dropdown({ ask, answer }: { ask: string; answer: string }) {
    const [isShow, setShow] = React.useState(false)
    const toggle = () => setShow(prev => !prev)

    return (
        <div className="relative border-t md:border-t-2 border-black w-full space-y-4 md:space-y-6 z-[3]">
            <button className="flex items-start justify-between gap-4 w-full my-4" onClick={toggle}>
                <h4 className="font-fredoka text-left text-base md:text-xl font-bold w-11/12">{ask}</h4>
                <IoIosArrowForward
                    style={{ transform: isShow ? "rotate(0)" : "rotate(90deg)" }}
                    className="text-xl md:text-3xl"
                />
            </button>
            <div
                className="overflow-hidden"
                style={{ height: isShow ? "0px" : "max-content" }}
            >
                <p className="font-mulish text-sm md:text-lg text-[#5D5D5D]">
                    {answer}
                </p>
            </div>
        </div>
    )
}


export { Dropdown }