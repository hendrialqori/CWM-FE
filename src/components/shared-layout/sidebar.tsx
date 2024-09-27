"use client";

import React, { ReactNode } from "react";
import Image from "next/image"
import Link from "next/link"
import Portal from "#/components/ui/portal";
import { motion } from "framer-motion";
import { CgNotes } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { cn } from "#/lib/utils";
import china_flag from "#/assets/svg/china-flag.svg"
import { useSidebar } from "#/stores/use-sidebar";

const SidebarContext = React.createContext({ expand: false })

const useContext = () => React.useContext(SidebarContext)

function Sidebar({ children }: { children: React.ReactNode }) {

    const [expand, setExpand] = React.useState(true)
    const [showModal, setShowModal] = React.useState(false)
    const sidebar = useSidebar((state) => state)

    function sidebarAction() {
        setExpand(prev => !prev)
    }

    function modalLogoutAction(condition: "open" | "close") {
        return () => setShowModal(condition === "open" ? true : false)
    }

    React.useEffect(() => {
        
    })

    return (
        <motion.aside
            className="border-r border-[#F2F4F7] fixed lg:sticky z-[10] top-0 h-dvh px-1 md:px-2 py-3 bg-gray-50"
            animate={{ x: sidebar.show ? 0 : "-100%" }}
            transition={{ bounce: false, duration: 0.2 }}
        >
            <nav className="relative h-full flex flex-col space-y-10">
                <div className="flex items-center px-2 cursor-pointer" onClick={sidebarAction}>
                    <Image
                        src={china_flag} width={20} height={14} alt="china_flag"
                    />
                    <span className={cn(expand ? " w-32 ml-3" : "w-0", "text-sm text-left font-fredoka font-bold overflow-hidden")}>Chinesewithmeggie</span>
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
                <div className="bg-white rounded-xl px-10 py-10 w-[360px] space-y-7">
                    <p className="text-sm md:text-base font-medium text-center">Logout ?</p>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            className="text-sm font-medium bg-[#F8F8F8] border border-[#DBDBDB] rounded-lg py-2 h-10 hover:outline-double hover:outline-black"
                            onClick={modalLogoutAction("close")}
                        >
                            Batal
                        </button>
                        <button className="text-sm font-medium bg-black text-white rounded-lg py-2 h-10 outline-double active:outline-black">
                            Logout
                        </button>
                    </div>
                </div>
            </Portal>
        </motion.aside>
    )
}

function SidebarItem({ href, icon, text, active }:
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

export default function Content() {
    return (
        <Sidebar>
            <SidebarItem
                href="/admin/dashboard"
                icon={<CgNotes className="size-4 md:size-5" />}
                text="Dashboard"
                active
            />
        </Sidebar>
    )
}

