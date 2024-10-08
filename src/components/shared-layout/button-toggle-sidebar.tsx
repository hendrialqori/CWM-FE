"use client";

import { useSidebar } from "#/stores/use-sidebar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function ButtonToggleSidebar() {
    const toggle = useSidebar().toggle
    return (
        <button
            className="center-flex rounded-full bg-gray-200 size-7 hover:outline hover:outline-black visible lg:invisible"
            onClick={toggle}
        >
            <MdKeyboardDoubleArrowRight className="text-base" />
        </button>
    )
}