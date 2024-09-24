"use client"

import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion"

function Content({ children }: { children: React.ReactNode }) {

    const cloneChildren =
        React.isValidElement(children) &&
        React.cloneElement(children, { className: `${children.props.className} z-[2]` } as { className: string })

    if (!cloneChildren) throw new Error("Not valid element")

    return ReactDOM.createPortal(
        <motion.section
            className="fixed inset-0 center-flex z-50"
            initial={{ opacity: 0, top: -30 }}
            animate={{ opacity: 1, top: 0 }}
            exit={{ opacity: 0, top: -30 }}
            transition={{ duration: 0.1 }}
        >
            {cloneChildren}
            <div
                className="absolute inset-0 bg-black/80 z-1"
                aria-label="overlay" />
        </motion.section>,
        document.body
    )
}


type OverlayProps = {
    isOpen: boolean;
    onClose?: () => void
    children: React.ReactNode
}

export default function Overlay({ isOpen, onClose, children }: OverlayProps) {

    // set overvlow document body
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "unset"
        }
    }, [isOpen])

    React.useEffect(() => {
        const handleEsc = (e: React.KeyboardEvent) => {
            if (e.key == "Escape") {
                onClose?.()
            }
        }

        window.addEventListener("keydown",
            handleEsc as unknown as EventListener)

        return () => {
            window.removeEventListener("keydown",
                handleEsc as unknown as EventListener)
        }
    }, [onClose])

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <Content>
                {children}
            </Content>
        </AnimatePresence>
    )
}
