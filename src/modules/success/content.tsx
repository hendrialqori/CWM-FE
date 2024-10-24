"use client"

import React from "react"
import Link from "next/link";
import Image from "next/image"
import china_flag from "#/assets/svg/china-flag.svg?url"
import { LuCheckCircle } from "react-icons/lu";
import confetti from "canvas-confetti"

function Header() {
    return (
        <header className="landing-page-container py-6 center-flex md:justify-start" aria-label="navbar">
            <section className="flex items-center">
                <p className="font-fredoka font-semibold text-xs md:text-base xl:text-xl">Chinesewithmeggie</p>
                <Image src={china_flag} width={20} height={14} alt="china_flag" />
            </section>
        </header>
    )
}

export function Content() {
    function showConfetti(delay: number = 0) {
        setTimeout(async () => {
            await confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            })
        }, delay)
    }

    React.useEffect(() => {
        showConfetti()
        showConfetti(1000)
        showConfetti(2000)
    }, [])

    return (
        <React.Fragment>
            <Header />
            <section className="min-h-[calc(100dvh_-_100px)] center-flex font-mulish">
                <div className="center-flex flex-col gap-6">
                    <div className="center-flex flex-col gap-[0.2rem]">
                        <LuCheckCircle className="text-green-500 text-3xl" />
                        <p className="text-sm md:text-lg font-bold">Pembayan berhasil</p>
                        <p className="text-gray-600 text-xs md:text-sm text-center px-3 !leading-[120%]">Silahkan cek alamat email anda untuk mengunduh file</p>
                    </div>
                    <Link href="/">
                        <div
                            className="w-max text-xs md:text-sm px-4 md:px-6 py-2 bg-black rounded-lg center-flex gap-2 text-white outline-double active:outline-black"
                        >
                            Kembali ke landing page
                        </div>
                    </Link>
                </div>
            </section>
        </React.Fragment>
    )
}