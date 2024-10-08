"use client";

import React, { ReactNode } from "react";
import Image from "next/image"
import Link from "next/link"
import Portal from "#/components/ui/portal";
import { motion } from "framer-motion";
import { CgNotes } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { cn } from "#/lib/utils";
import china_flag from "#/assets/svg/china-flag.svg?url"
import { useSidebar } from "#/stores/use-sidebar";
import { Logout } from "./logout";

const SidebarContext = React.createContext({ expand: false })

const useContext = () => React.useContext(SidebarContext)

function ButtonShrinkingSidebar() {
    const toggle = useSidebar().toggle
    return (
        <button
            className="translate-x-[15px] rounded-full bg-gray-200 p-[5px] hover:outline hover:outline-black block lg:hidden"
            onClick={toggle}
        >
            <MdKeyboardDoubleArrowLeft className="text-base" />
        </button>
    )
}

function SidebarRoot({ children }: { children: React.ReactNode }) {

    const [expand, setExpand] = React.useState(true)
    const [showModal, setShowModal] = React.useState(false)
    const sidebar = useSidebar((state) => state)

    function sidebarAction() {
        setExpand(prev => !prev)
    }

    function modalLogoutAction(condition: "open" | "close") {
        return () => setShowModal(condition === "open" ? true : false)
    }

    React.useEffect(function resizeWindow() {

        function resize() {
            const width = window.innerWidth;
            const table_landscape = 1024
            if (width >= table_landscape) {
                sidebar.onShow()
            }
        }

        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize)
        }
    }, [sidebar])

    return (
        <motion.aside
            className="border-r border-[#F2F4F7] fixed lg:sticky z-[10] top-0 h-dvh px-1 md:px-2 py-3 bg-gray-50"
            animate={{ x: sidebar.show ? 0 : "-120%" }}
            transition={{ bounce: false, duration: 0.2 }}
        >
            <nav className="relative h-full flex flex-col space-y-10">
                <div className="center-flex justify-between">
                    <div
                        className="flex items-center px-2 cursor-pointer"
                        onClick={sidebarAction}
                    >
                        <Image src={china_flag} width={20} height={14} alt="china_flag" />
                        <span className={
                            cn(expand ?
                                " w-32 ml-3" : "w-0",
                                "text-xs md:text-sm text-left font-fredoka font-bold overflow-hidden"
                            )}>
                            Chinesewithmeggie
                        </span>
                    </div>
                    <ButtonShrinkingSidebar />
                </div>
                <ul className="h-full">
                    <SidebarContext.Provider value={{ expand }}>
                        {children}
                    </SidebarContext.Provider>
                </ul>
                <button
                    className="flex items-center py-2 px-3 rounded-lg hover:outline hover:outline-black hover:bg-gray-100 transition-colors duration-300"
                    onClick={modalLogoutAction("open")}
                >
                    <HiOutlineLogout className="size-5" />
                    <span className={cn(expand ? " w-32 ml-3" : "w-0", "text-sm text-left font-medium overflow-hidden")}>Logout</span>
                </button>
            </nav>
            <Portal isOpen={showModal}>
                <Logout onClose={modalLogoutAction("close")} />
            </Portal>
        </motion.aside>
    )
}

function SidebarItem({ href, icon, text }:
    { href: string, icon: ReactNode, text: string, active: boolean }) {

    const { expand } = useContext()

    return (
        <Link href={href}>
            <div className="flex items-center border py-2 px-3 rounded-lg bg-gray-100">
                {icon}
                <span className={cn(expand ? "w-32 ml-3" : "w-0", "text-xs md:text-sm font-medium overflow-hidden")}>{text}</span>
            </div>
        </Link>
    )
}

export default function Sidebar() {
    return (
        <SidebarRoot>
            <SidebarItem
                href="/admin/dashboard"
                icon={<CgNotes className="size-4 md:size-5" />}
                text="Dashboard"
                active
            />
        </SidebarRoot>
    )
}

