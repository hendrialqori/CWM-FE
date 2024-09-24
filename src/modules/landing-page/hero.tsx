import Image from "next/image";
import china_flag from "#/assets/svg/china-flag.svg"
import { MdOutlineArrowForward } from "react-icons/md";
import * as Utils from "#/lib/utils"
import { HeroVideoButton } from "./hero-video-button";

function Header() {
    return (
        <div className="landing-page-container py-6 md:py-10" aria-label="navbar">
            <section className="flex items-center">
                <p className="font-fredoka font-semibold text-base md:text-xl">Chinesewithmeggie</p>
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
            <div className="size-72 rounded-full bg-cwm_orange opacity-10 blur-2xl" />
            <div className="size-72 rounded-full bg-cwm_green opacity-10 blur-2xl -translate-x-28" />
            <div className="size-72 rounded-full bg-cwm_blue opacity-10 blur-2xl -translate-y-28" />
            <div className="size-72 rounded-full bg-cwm_yellow opacity-10 blur-2xl -translate-x-28 -translate-y-28" />
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
        <section className="bg-[#FEF9F6] pb-20 md:pb-28">
            <Header />
            <div className="landing-page-container grid grid-cols-1 xl:grid-cols-2 gap-16 md:gap-28 xl:gap-14">
                <div className="relative space-y-10 mt-0 xl:mt-20 z-[2] mx-auto xl:mx-[0] overflow-hidden" aria-label="left-side">
                    <BlurEffectBackground />
                    <div className="relative space-y-6 z-[2]" aria-label="tagline & descriptions">
                        <div className="bg-white w-full md:w-max rounded-full px-4 py-1" aria-label="badge">
                            <p className="text-[#F07B48] text-xs text-center md:text-left md:text-base lg:text-xl">#1 Practical guide book survive, tinggal dan liburan di China</p>
                        </div>
                        <div className="space-y-1">
                            <h1 className="font-fredoka font-bold text-center md:text-left text-2xl md:text-4xl lg:text-5xl !leading-[120%]">
                                Siap PD ngobrol
                                <span id="hero-custom-text" className="relative text-[#F1936B] px-1 md:px-3">
                                    Mandarin?</span>
                                Guide Book Mandarin untuk hidup sehari-hari
                            </h1>
                        </div>
                        <p className="font-mulish font-light md:font-medium text-xs md:text-base max-w-lg text-center md:text-left">
                            Akses materi belajar yang komprehensif untuk menguasai bahasa Mandarin dan memahami budaya China.
                        </p>
                    </div>
                    <div className="relative center-flex flex-col md:flex-row justify-center md:justify-start gap-2 md:gap-5 z-[3]" aria-label="call to action buttons">
                        <button className="bg-white rounded-full shadow-sm center-flex gap-3 py-2 px-3 md:px-5
                         hover:bg-gray-100 transition duration-200">
                            <p className="text-xs md:text-sm font-mulish font-semibold">Beli e-book ​sekarang</p>
                            <div className="center-flex rounded-full bg-cwm_blue size-6 md:size-8">
                                <MdOutlineArrowForward className="text-white text-xl" />
                            </div>
                        </button>
                        <HeroVideoButton />
                    </div>
                    <div className="relative center-flex justify-center md:justify-start gap-3 md:gap-x-6 z-[4]" aria-label="reports">
                        <div className="font-mulish space-y-1">
                            <p className="text-xl md:text-4xl font-extrabold text-cwm_green">5+</p>
                            <p className="text-xs md:text-sm font-medium">Video panduan</p>
                        </div>
                        <div className="font-mulish space-y-1">
                            <p className="text-xl md:text-4xl font-extrabold text-cwm_green">8+</p>
                            <p className="text-xs md:text-sm font-medium">PDF panduan</p>
                        </div>
                        <div className="font-mulish space-y-1">
                            <p className="text-xl md:text-4xl font-extrabold text-cwm_green">3+</p>
                            <p className="text-xs md:text-sm font-medium">PDF panduan</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 z-[3]" aria-label="right-side">
                    <Column className="mt-10">
                        <Image
                            src="/image/cover-1.jpg"
                            width={285} height={324}
                            alt="cover-1"
                            className="rounded-tl-[50px] w-full xl:w-[285px] h-[200[px] md:h-[400px] xl:h-[324px] rounded-r-xl object-cover"
                        />
                        <Image
                            src="/image/cover-3.jpg"
                            width={285}
                            height={324}
                            alt="cover-3"
                            className="rounded-bl-[50px] w-full xl:w-[285px] h-[200[px] md:h-[400px] xl:h-[324px] rounded-r-xl object-cover"
                        />
                    </Column>
                    <Column>
                        <Image
                            src="/image/cover-2.jpg"
                            width={285} height={324}
                            alt="cover-1"
                            className="rounded-tr-[50px] w-full xl:w-[285px] h-[200[px] md:h-[400px] xl:h-[324px] rounded-l-xl object-cover"
                        />
                        <Image
                            src="/image/cover-4.jpg"
                            width={285}
                            height={324}
                            alt="cover-3"
                            className="rounded-br-[50px] w-full xl:w-[285px] h-[200[px] md:h-[400px] xl:h-[324px] rounded-l-xl object-cover"
                        />
                    </Column>
                </div>
            </div>
        </section>
    )
}

export { Hero }