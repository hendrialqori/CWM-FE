import Image from "next/image";
import china_flag from "#/assets/svg/china-flag.svg"
import circle_star from "#/assets/svg/circle-star.svg"
import { MdOutlineArrowForward } from "react-icons/md";
import { PiPlayLight } from "react-icons/pi";
import * as Utils from "#/lib/utils"

function Header() {
    return (
        <div className="landing-page-container py-10" aria-label="navbar">
            <section className="flex items-center">
                <p className="font-fredoka font-semibold text-xl">Chinesewithmeggie</p>
                <Image
                    src={china_flag} width={20} height={14} alt="china_flag"
                />
            </section>
        </div>
    )
}

function BlurEffectBackground() {
    return (
        <div className="absolute z-1 grid grid-cols-2 w-max">
            <div className="size-72 rounded-full bg-cwm_orange opacity-10 blur-2xl"/>
            <div className="size-72 rounded-full bg-cwm_green opacity-10 blur-2xl -translate-x-28"/>
            <div className="size-72 rounded-full bg-cwm_blue opacity-10 blur-2xl -translate-y-28"/>
            <div className="size-72 rounded-full bg-cwm_yellow opacity-10 blur-2xl -translate-x-28 -translate-y-28"/>
        </div>
    )
}

function Column(props: { children: React.ReactNode, className?: string }) {
    const className = Utils.merge(
        "space-y-3",
        props.className
    )

    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

function Hero() {
    return (
        <section className="bg-[#FEF9F6] pb-28">
            <Header />
            <div className="landing-page-container grid grid-cols-2 gap-14 relative">
                <BlurEffectBackground />
                <div className="space-y-10 mt-20 z-[2]" aria-label="left-side">
                    <div className="space-y-6" aria-label="tagline & descriptions">
                        <div className="bg-white w-max rounded-full px-4 py-1" aria-label="badge">
                            <p className="text-[#F07B48]">#1 E-book & Video Mandarin untuk tinggal di China</p>
                        </div>
                        <div className="space-y-1">
                            <h1 className="font-fredoka font-bold text-5xl">Bongkar Cara Survive di</h1>
                            <div className="center-flex justify-start gap-x-2">
                                <Image
                                    src={circle_star} width={44} height={44} alt="circle_star"
                                />
                                <h1 className="font-fredoka font-bold text-5xl">
                                    <span className="text-[#F1936B]">China</span> Tanpa Takut
                                </h1>
                            </div>
                        </div>
                        <p className="font-mulish font-medium max-w-lg">
                            Akses materi belajar yang komprehensif untuk menguasai bahasa Mandarin dan memahami budaya China.
                        </p>
                    </div>
                    <div className="center-flex justify-start gap-x-5" aria-label="call to action buttons">
                        <button className="bg-white rounded-full shadow-sm center-flex gap-3 py-2 px-5
                         hover:bg-gray-100 transition duration-200">
                            <p className="text-sm font-mulish font-semibold">Beli e-book ​sekarang</p>
                            <div className="center-flex rounded-full bg-cwm_blue size-8">
                                <MdOutlineArrowForward className="text-white text-xl" />
                            </div>
                        </button>
                        <button className="bg-white rounded-full shadow-sm center-flex gap-3 py-2 px-5
                         hover:bg-gray-100 transition duration-200">
                            <p className="text-sm font-mulish font-semibold">Tonton teaser video</p>
                            <div className="center-flex rounded-full bg-cwm_orange size-8">
                                <PiPlayLight className="text-white text-lg" />
                            </div>
                        </button>
                    </div>
                    <div className="center-flex justify-start gap-x-6" aria-label="reports">
                        <div className="font-mulish space-y-1">
                            <p className="text-4xl font-extrabold text-cwm_green">5+</p>
                            <p className="text-sm font-medium">Video panduan</p>
                        </div>
                        <div className="font-mulish space-y-1">
                            <p className="text-4xl font-extrabold text-cwm_green">8+</p>
                            <p className="text-sm font-medium">PDF panduan</p>
                        </div>
                        <div className="font-mulish space-y-1">
                            <p className="text-4xl font-extrabold text-cwm_green">3+</p>
                            <p className="text-sm font-medium">PDF panduan</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 z-[3]" aria-label="right-side">
                    <Column className="mt-10">
                        <Image
                            src="/image/cover-1.jpg"
                            width={285} height={324}
                            alt="cover-1"
                            className="rounded-tl-[50px] w-[285px] h-[324px] rounded-r-xl object-cover"
                        />
                        <Image
                            src="/image/cover-3.jpg"
                            width={285}
                            height={324}
                            alt="cover-3"
                            className="rounded-bl-[50px] w-[285px] h-[324px] rounded-r-xl object-cover"
                        />
                    </Column>
                    <Column>
                        <Image
                            src="/image/cover-2.jpg"
                            width={285} height={324}
                            alt="cover-1"
                            className="rounded-tr-[50px] w-[285px] h-[324px] rounded-l-xl object-cover"
                        />
                        <Image
                            src="/image/cover-4.jpg"
                            width={285}
                            height={324}
                            alt="cover-3"
                            className="rounded-br-[50px] w-[285px] h-[324px] rounded-l-xl object-cover"
                        />
                    </Column>
                </div>
            </div>
        </section>
    )
}

export { Hero }