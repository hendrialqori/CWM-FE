import React from "react";
import Image from "next/image"
import { FiShoppingCart } from "react-icons/fi"
import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa6";
import china_flag from "#/assets/svg/china-flag.svg?url"
import green_blur_circle_shape from "#/assets/svg/green-blur-circle-shape.svg?url"

function Credits() {
    return (
        <div className="landing-page-container center-flex py-12 border-t border-[#D0D0D0]">
            <p className="text-sm font-mulish text-center">All Right Reserved@2024 - chinesewithmeggie</p>
        </div>
    )
}

function GreenBlurCircleShape() {
    return (
        <Image
            src={green_blur_circle_shape}
            className="size-28 absolute bottom-10 right-[30%]"
            width={288}
            height={288}
            alt="green_blur_circle_shape"
        />
    )
}

function Footer() {
    return (
        <React.Fragment>
            <footer className="landing-page-container relative flex flex-col md:flex-row justify-between items-center gap-16 md:gap-0 pt-24 pb-48">
                <GreenBlurCircleShape />
                <div className="w-full md:w-6/12 xl:w-4/12 space-y-5" aria-label="left-side">
                    <h2 className="font-fredoka font-bold text-lg md:text-3xl leading-[150%]">BEST DEAL Beli sekarang ​dan dapatkan GRATIS ​update konten selamanya !</h2>
                    <button
                        className="relative w-max bg-black rounded-lg center-flex gap-2 text-white px-6 py-2 z-[2] outline-double active:outline-black">
                        <p className="text-sm md:text-xl font-mulish font-medium">Beli sekarang</p>
                        <FiShoppingCart className="text-base md:text-xl" />
                    </button>
                </div>
                <div className="space-y-5" aria-label="right-side">
                    <div className="flex items-center justify-start md:justify-end">
                        <p className="font-fredoka font-semibold text-xl">Chinesewithmeggie</p>
                        <Image
                            src={china_flag} width={20} height={14} alt="china_flag"
                        />
                    </div>
                    <div className="center-flex justify-start md:justify-end gap-3">
                        <a href="#" target="_blank" rel="noopener" aria-label="Instagram">
                            <LuInstagram className="text-2xl" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FaTiktok className="text-xl" />
                        </a>
                    </div>
                    <p className="font-mulish text-sm font-medium">Home  |  Product  |  Testimony  |  What will you get  |  FAQ</p>
                </div>
            </footer>
            <Credits />
        </React.Fragment>
    )
}

export { Footer }