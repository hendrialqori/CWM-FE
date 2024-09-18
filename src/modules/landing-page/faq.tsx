"use client";

import React from "react"
import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io";
import blue_circle_shape from "#/assets/svg/blue-circle-shape.svg"

function Dropdown({ ask, answer }: { ask: string; answer: string }) {
    let [isShow, setShow] = React.useState(false)
    const toggle = () => setShow(prev => !prev)

    return (
        <div className="border-t-2 border-black w-full space-y-6">
            <button className="flex items-center justify-between gap-1 w-full my-4" onClick={toggle}>
                <p className="font-fredoka text-xl font-bold">{ask}</p>
                <IoIosArrowForward
                    style={{ transform: isShow ? "rotate(0)" : "rotate(90deg)" }}
                    className="text-3xl"
                />
            </button>
            <div
                className="overflow-hidden"
                style={{ height: isShow ? "0px" : "max-content" }}
            >
                <p className="font-mulish text-lg text-[#5D5D5D]">
                    {answer}
                </p>
            </div>
        </div>
    )
}

function BlueCircleShape() {
    return (
        <Image
            src={blue_circle_shape}
            className="size-[23rem] absolute bottom-0 -left-20"
            width={288}
            height={288}
            alt="blue_circle_shape"
        />
    )
}

function FAQ() {
    return (
        <section className="py-24 relative overflow-hidden">
            <BlueCircleShape />
            <div className="landing-page-container2nd grid grid-cols-2 gap-14">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <h2 className="font-fredoka font-bold text-[2rem]">Frequently Asked Questions</h2>
                        <h4 className="font-fredoka font-bold text-xl text-[#5D5D5D]">Meggie jawab pertanyaan kalian</h4>
                    </div>
                    <Image
                        src="/image/faq.png"
                        alt="faq"
                        height={497}
                        width={392}
                    />
                </div>
                <div className="space-y-10" aria-label="description">
                    <Dropdown
                        ask="Apa bisa langsung jago setelah baca e-book ini"
                        answer="YES! 95% pembaca langsung praktek di China tanpa kendala, Bahkan ada yang langsung dapat job di sana!"
                    />
                    <Dropdown
                        ask="Berapa lama e-book ini bisa dipelajari"
                        answer="Secepat kamu nge-binge Netflix! 1 hari bisa, 2 jam juga bisa, Tergantung seberapa cepat kamu mau jadi expert!"
                    />
                    <Dropdown
                        ask="Apa bedanya dengan e-book China lain"
                        answer="Cuma e-book ini yang  punya garansi survival di China atau uang kembali 100%!, kontennya  update terus sesuai kondisi terkini di China!"
                    />
                </div>
            </div>
        </section>
    )
}

export { FAQ }