"use client";

import React from "react"
import Portal from "#/components/ui/portal"
import { PiPlayLight } from "react-icons/pi";
import { VscChromeClose } from "react-icons/vsc";

function HeroVideoButton() {

    const [isOpen, setOpen] = React.useState(false)

    const toggle = (condition?: "open" | "close") =>
        () => setOpen((prev) => condition === "open" ? true : !prev)

    return (
        <React.Fragment>
            <button
                className="bg-white rounded-full shadow-sm center-flex gap-3 py-2 px-3 md:px-5
                hover:bg-gray-100 transition duration-200"
                onClick={toggle("open")}
            >
                <p className="text-[0.6rem] md:text-sm font-mulish font-semibold">Tonton teaser video</p>
                <div className="center-flex rounded-full bg-cwm_orange p-1 md:size-8">
                    <PiPlayLight className="text-white text-base md:text-lg" />
                </div>
            </button>
            <Portal isOpen={isOpen} onClose={toggle("close")}>
                <div className="size-max relative">
                    <button className="absolute top-3 right-3 z-[2]" onClick={toggle("close")}>
                        <VscChromeClose className="text-white text-2xl"/>
                    </button>
                    <video controls className="max-h-[calc(100vh_-_40px)] max-w-none object-contain rounded-xl relative z-1">
                        <source src="/video/teaser.mp4" type="video/mp4" />
                    </video>
                </div>
            </Portal>
        </React.Fragment>
    )
}

export { HeroVideoButton }