import Image from "next/image";
import star_shape from "#/assets/svg/star-shape.svg"
import dollar_shape from "#/assets/svg/dollar-shape.svg"
import { LuCheck } from "react-icons/lu";
import { productKnowledgePoints } from "#/constants";


function Point({ description }: { description: string }) {
    return (
        <div className="flex justify-start items-start gap-4">
            <div className="bg-cwm_green rounded-[0.25rem] p-[2px]">
                <LuCheck className="text-white text-base md:text-lg" />
            </div>
            <p className="text-xs md:text-lg md:-translate-y-1 font-medium">{description}</p>
        </div>
    )
}

function StarShape() {
    return (
        <Image
            src={star_shape}
            className="size-10 md:size-20 lg:size-28 absolute -top-2 md:-top-20 right-10 md:right-1/4"
            width={112}
            height={112}
            alt="star-shape"
        />
    )
}

function DollarShape() {
    return (
        <Image
            src={dollar_shape}
            className="size-10 md:size-20 lg:size-28 absolute -bottom-10 md:bottom-0 right-20 md:right-40"
            width={112}
            height={112}
            alt="dollar-shape"
        />
    )
}

function ProductKnowledge() {
    return (
        <section className="landing-page-container relative flex flex-col lg:flex-row gap-8 py-12 md:py-24 t-space_between_section_sm md:mt-space_between_section_md xl:mt-space_between_section">
            <StarShape />
            <div className="w-full lg:w-5/12 space-y-10 md:space-y-12" aria-label="product knowledge description">
                <div className="text-center space-y-0 md:space-y-2">
                    <h2 className="font-fredoka font-bold text-xl md:text-[2rem] leading-[2.25rem]">What will you get ?</h2>
                    <p className="font-mulish text-sm md:text-xl font-medium text-[#5D5D5D]">Skill yang bisa buat kamu menjadi makin percaya diri</p>
                </div>
                {productKnowledgePoints.map((point, i) => (
                    <Point
                        key={i}
                        description={point}
                    />
                ))}
            </div>
            <div className="w-full lg:w-7/12 center-flex flex-col" aria-label="image">
                <Image
                    src="/image/cover-ebook.png"
                    width={674}
                    height={440}
                    alt="cover-ebook"

                />
                <div className="flex gap-3">
                    <div className="h-1 w-7 md:w-14 bg-cwm_orange" />
                    <div className="h-1 w-7 md:w-14 bg-cwm_blue" />
                    <div className="h-1 w-7 md:w-14 bg-cwm_green" />
                </div>
            </div>
            <DollarShape />
        </section>
    )
}


export { ProductKnowledge }