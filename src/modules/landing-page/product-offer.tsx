import Image from "next/image";
import { BsCameraVideo } from "react-icons/bs"
import { LiaAssistiveListeningSystemsSolid } from "react-icons/lia";
import { MdOutlineQuiz } from "react-icons/md";
import { ProductCardList } from "./product-card-list";
import rocket_shape from "#/assets/svg/rocket-shape.svg"
import orange_circle_shape from "#/assets/svg/orange-circle-shape.svg"
import green_circle_shape from "#/assets/svg/green-circle-shape.svg"
import ahalf_orange_shape from "#/assets/svg/ahafl-orange-shape.svg"
import { ProductOfferCheckoutAction } from "./product-offer-checkout-action";

function BlurEffectBackground() {
    return (
        <div className="flex w-max absolute z-1 -translate-x-1/2 left-1/2 top-16">
            <div className="size-72 rounded-full bg-cwm_blue opacity-25 blur-2xl translate-x-8" />
            <div className="size-72 rounded-full bg-cwm_green opacity-25 blur-2xl -translate-x-20 -translate-y-14" />
        </div>
    )
}

function RocketShape() {
    return (
        <Image
            src={rocket_shape}
            className="size-10 md:size-20 lg:size-28 absolute -top-20 left-0"
            width={112}
            height={112}
            alt="rocket_shape"
        />
    )
}

function OrangeCircleShape() {
    return (
        <Image
            src={orange_circle_shape}
            className="size-10 md:size-20 lg:size-28 absolute -bottom-16 md:-bottom-20 left-0"
            width={112}
            height={112}
            alt="orange_circle_shape"
        />
    )
}

function GreenCircleShape() {
    return (
        <Image
            src={green_circle_shape}
            className="size-[18rem] absolute bottom-1/4 -translate-y-1/2 -right-10"
            width={288}
            height={288}
            alt="green_circle_shape"
        />
    )
}

function AhaflOrangeShape() {
    return (
        <Image
            src={ahalf_orange_shape}
            className="size-52 absolute -bottom-10 -left-20"
            width={215}
            height={215}
            alt="ahalf_orange_shape"
        />
    )
}

function ProductOffer() {
    return (
        <section className="bg-[#FEF9F6] relative overflow-hidden py-20 md:py-24 mt-space_between_section_sm md:mt-space_between_section_md xl:mt-space_between_section" aria-label="product-offer">
            <div className="relative landing-page-container space-y-10 md:space-y-20">
                <RocketShape />
                <div className="center-flex flex-col space-y-0 md:space-y-2" aria-label="title">
                    <h2 className="font-fredoka font-bold text-xl md:text-[2rem] text-center md:text-left">Alasan Guidebook Ini One of a Kind</h2>
                    <p className="font-mulish text-sm md:text-xl font-medium text-[#5D5D5D]">Banyak benefit yang bakal kamu dapatkan</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 place-items-start gap-8" aria-label="offers">
                    <div className="center-flex flex-col space-y-6" aria-label="offer">
                        <div className="center-flex flex-col">
                            <BsCameraVideo className="text-4xl md:text-5xl text-[#F07B48]" />
                            <h3 className="font-fredoka text-lg md:text-2xl font-bold text-[#F07B48]">Guiding Video</h3>
                        </div>
                        <p className="text-center text-sm md:text-base font-medium text-[#3A3A3A] font-mulish">
                            Tidak cuman gambar dan tulisan, di setiap bab Meggie sertakan video yg akan membantu kamu untuk lebih memahami cara baca, ejaan, dan nada bahasa mandarin
                        </p>
                    </div>
                    <div className="center-flex flex-col space-y-6" aria-label="offer">
                        <div className="center-flex flex-col">
                            <LiaAssistiveListeningSystemsSolid className="text-4xl md:text-5xl text-cwm_blue" />
                            <h3 className="font-fredoka text-lg md:text-2xl font-bold text-cwm_blue">Listening Pratice</h3>
                        </div>
                        <p className="text-center text-sm md:text-base font-medium text-[#3A3A3A] font-mulish">
                            Tidak cuman membaca dan menonton, Meggie juga akan kasih km latihan mendengarkan. Dalam belajar bahasa penting banget untuk latihan mendengarkan supaya km makin terbiasa
                        </p>
                    </div>
                    <div className="center-flex flex-col space-y-6" aria-label="offer">
                        <div className="center-flex flex-col">
                            <MdOutlineQuiz className="text-4xl md:text-5xl text-cwm_green" />
                            <h3 className="font-fredoka text-lg md:text-2xl font-bold text-cwm_green">Interactive Quiz</h3>
                        </div>
                        <p className="text-center text-sm md:text-base font-medium text-[#3A3A3A] font-mulish">
                            Meggie juga akan kasih km bonus quiz latihan nih, supaya kamu bisa tes pemahaman kamu
                        </p>
                    </div>
                </div>
                <div className="relative space-y-14">
                    <BlurEffectBackground />
                    <div className="text-center">
                        <h4 className="font-fredoka text-base md:text-2xl font-bold">All Guide book ini bisa kamu dapatkan dengan harga</h4>
                        <p className="font-mulish line-through font-medium text-lg md:text-2xl">Rp. 399,000</p>
                    </div>
                    <div className="relative text-center z-[2]">
                        <p className="font-mulish font-semibold text-[#5D5D5D] text-sm md:text-base">Harga spesial hari ini!</p>
                        <h3 className="font-fredoka text-3xl md:text-6xl font-bold">Rp. 149.000,-</h3>
                    </div>
                    {/* button checkout */}
                    <ProductOfferCheckoutAction />

                    {/* shape */}
                    <OrangeCircleShape />
                </div>
                <ProductCardList />
            </div>
            {/* shape */}
            <GreenCircleShape />
            {/* shape */}
            <AhaflOrangeShape />

        </section>
    )
}

export { ProductOffer }