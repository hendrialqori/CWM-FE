import React from "react";
import Image from "next/image"
import green_shape from "#/assets/svg/green-shape.svg?url"
import blue_shape from "#/assets/svg/blue-shape.svg?url"
import pink_circle_shape from "#/assets/svg/pink-circle-shape.svg?url"
import { Testimony as TTestimony } from "#/@type";
import { testimonial } from "#/constants";

type TestimonyProps = TTestimony & { number: number }

function colorPick(number: number) {
    if (number % 3 === 0) return "bg-[#ADC482]"
    else if (number % 2 === 0) return "bg-[#6E9FB8]"
    else return "bg-[#F07B48]"
}

function Testimony({ number, image, message, person }: TestimonyProps) {
    const theme = colorPick(number)
    return (
        <figure
            className={`w-full md:w-[48%] xl:w-[30%] rounded-[30px] relative overflow-hidden px-8 py-6 space-y-3 ${theme}`} style={{ "--tw-bg-opacity": "0.15" } as React.CSSProperties}
        >
            <div className="flex justify-between items-end">
                <Image
                    src={image}
                    alt="testimony-image"
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover"
                />
                <div className={`center-flex size-6 rounded-full ${theme} text-xl text-white`}>
                    <p className="translate-y-1 font-mulish">“</p>
                </div>
            </div>
            <figcaption className="space-y-3 flex flex-col">
                <p className="font-mulish text-sm font-semibold">{message}</p>
                <p className="font-mulish text-xs font-semibold ml-auto mr-0">{person.name}, {person.age} tahun - {person.job}</p>
            </figcaption>
        </figure>
    )

}

function GreenShape() {
    return (
        <Image
            src={green_shape}
            className="size-10 md:size-20 lg:size-28 absolute -top-3 md:top-0 -left-0 xl:-left-20"
            width={112}
            height={112}
            alt="green-shape"
        />
    )
}

function BlueShape() {
    return (
        <Image
            src={blue_shape}
            className="size-10 md:size-20 lg:size-28 absolute -top-10 md:-top-20 -right-0 xl:-right-20"
            width={112}
            height={112}
            alt="blue-shape"
        />
    )
}

function PinkCircleShape() {
    return (
        <Image
            src={pink_circle_shape}
            className="size-10 md:size-20 lg:size-28 absolute -top-4 md:-top-20 -left-0 xl:-left-20"
            width={112}
            height={112}
            alt="pink-circle-shape"
        />
    )
}

function Testimonial() {
    return (
        <section
            className="mt-space_between_section_sm md:mt-space_between_section_md xl:mt-space_between_section"
            aria-label="testimonial">
            <div className="landing-page-container2nd relative">
                <GreenShape />
                <BlueShape />
            </div>
            <div className="landing-page-container2nd space-y-10 md:space-y-20 py-7 md:py-14 relative">
                <div className="center-flex flex-col" aria-label="title">
                    <h2 className="font-fredoka font-bold text-xl md:text-[2rem]">Apa kata Mereka?</h2>
                    <p className="font-mulish text-sm md:text-xl font-medium text-[#5D5D5D]">lihat pengalaman yang mereka dapatkan</p>
                </div>
                <div className="flex justify-center flex-wrap gap-5">
                    {testimonial.map((testimony, i) => (
                        <Testimony
                            key={i}
                            number={i + 1}
                            image={testimony.image}
                            message={testimony.message}
                            person={testimony.person}
                        />
                    ))}
                </div>
            </div>
            <div className="landing-page-container2nd relative">
                <PinkCircleShape />
            </div>
        </section>
    )
}

export { Testimonial }