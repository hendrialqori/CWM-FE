"use client";

import React from "react"
import Image from "next/image"
import { Dropdown } from "./faq-dropdown";
import blue_circle_shape from "#/assets/svg/blue-circle-shape.svg?url"

function BlueCircleShape() {
    return (
        <Image
            src={blue_circle_shape}
            className="size-[23rem] absolute bottom-0 -left-20 z-[1] opacity-30 md:opacity-100"
            width={288}
            height={288}
            alt="blue_circle_shape"
        />
    )
}

function FAQ() {
    return (
        <section className="py-20 md:py-24 relative overflow-hidden">
            <BlueCircleShape />
            <div className="landing-page-container2nd grid grid-cols-1 md:grid-cols-2 gap-14">
                <div className="flex flex-col items-center space-y-2">
                    <div className="text-center space-y-2">
                        <h2 className="font-fredoka font-bold text-xl md:text-[2rem]">Frequently Asked Questions</h2>
                        <h3 className="font-fredoka font-bold text-sm md:text-xl text-[#5D5D5D]">Meggie jawab pertanyaan kalian</h3>
                    </div>
                    <Image
                        src="/image/meggie-1.png"
                        alt="faq"
                        height={497}
                        width={392}
                        className="w-5/12"
                    />
                </div>
                <div className="space-y-10" aria-label="description">
                    <Dropdown
                        ask="Apakah ebook ini cocok untuk pemula ?"
                        answer="Tentu saja! Ebook ini dirancang untuk semua level, termasuk pemula. Materinya mudah dipahami dan langsung bisa dipraktikkan!"
                    />
                    <Dropdown
                        ask="Berapa lama saya bisa mulai berbicara Mandarin setelah membaca ebook ini ?"
                        answer="Dengan latihan rutin, banyak pengguna melaporkan bisa ngobrol dasar dalam waktu singkat! Setiap orang berbeda, tapi ebook ini akan membantu mempercepat proses belajar kamu"
                    />
                    <Dropdown
                        ask="Apakah saya bisa mengakses ebook di berbagai perangkat ?"
                        answer="Tentu! Ebook ini bisa diakses di smartphone, tablet, dan laptop—belajar di mana saja, kapan saja!"
                    />
                    <Dropdown
                        ask="Apakah ada pembaruan konten di masa depan ?"
                        answer="Kami selalu berusaha memberikan konten terbaru! Dengan pembelian ebook, kamu akan mendapatkan akses ke pembaruan gratis."
                    />
                    <Dropdown
                        ask="Apakah saya perlu memiliki pengetahuan dasar tentang bahasa Mandarin sebelum membaca ebook ini ?"
                        answer="Tidak perlu! Ebook ini cocok untuk semua level, termasuk yang belum pernah belajar bahasa Mandarin sebelumnya."
                    />
                </div>
            </div>
        </section>
    )
}

export { FAQ }