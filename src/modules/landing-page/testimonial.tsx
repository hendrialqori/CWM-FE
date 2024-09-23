import React from "react";
import Image from "next/image"
import green_shape from "#/assets/svg/green-shape.svg"
import blue_shape from "#/assets/svg/blue-shape.svg"
import pink_circle_shape from "#/assets/svg/pink-circle-shape.svg"

type TestimonyProps = {
    theme: "orange" | "blue" | "green"
    image: string;
    message: string;
    person: { name: string, age: number }

}

function Testimony({ theme, image, message, person }: TestimonyProps) {

    const themes = {
        orange: "bg-[#F07B48]",
        blue: "bg-[#6E9FB8]",
        green: "bg-[#ADC482]"
    }

    const selectedTheme = themes[theme as keyof typeof themes]

    return (
        <figure
            className={`w-[48%] rounded-[30px] relative overflow-hidden
             ${selectedTheme}`} style={{ "--tw-bg-opacity": "0.15" } as React.CSSProperties}
        >
            <Image
                src={image}
                alt="testimony-image"
                width={144}
                height={144}
                className="size-32 rounded-full object-cover absolute -top-5 -right-5"
            />
            <figcaption className="space-y-3 flex flex-col m-14">
                <div className={`center-flex size-8 rounded-full ${selectedTheme} text-4xl text-white`}>
                    <p className="translate-y-2 font-mulish">“</p>
                </div>
                <p className="font-mulish text-xl font-semibold">{message}</p>
                <p className="font-mulish text-sm font-semibold text-gray-600 ml-auto mr-0">{person.name}, {person.age} tahun</p>
            </figcaption>
        </figure>
    )

}

function GreenShape() {
    return (
        <Image
            src={green_shape}
            className="size-28 absolute top-0 -left-20"
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
            className="size-28 absolute -top-20 -right-20"
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
            className="size-28 absolute -top-20 -left-20"
            width={112}
            height={112}
            alt="pink-circle-shape"
        />
    )
}

function Testimonial() {
    return (
        <section className="mt-space_between_section" aria-label="testimonial">
            <div className="landing-page-container2nd relative">
                <GreenShape />
                <BlueShape />
            </div>
            <div className="landing-page-container2nd space-y-20 py-14 relative">
                <div className="center-flex flex-col" aria-label="title">
                    <h2 className="font-fredoka font-bold text-[2rem]">Apa kata Mereka?</h2>
                    <p className="font-mulish text-xl font-medium text-[#5D5D5D]">lihat pengalaman yang mereka dapatkan</p>
                </div>
                <div className="flex flex-wrap justify-center gap-5">
                    <Testimony
                        theme="orange"
                        image="/image/cewek-random.jpg"
                        message="Dikira orang lokal gara-gara lancar banget! Dapet diskon ​khusus local di mana-mana!"
                        person={{ name: "Rini", age: 24 }}
                    />
                    <Testimony
                        theme="blue"
                        image="/image/cewek-random.jpg"
                        message="Bisa nabung 50% budget karena gak perlu guide! Shopping ​jadi lebih banyak, hehe."
                        person={{ name: "Dinda", age: 28 }}
                    />
                    <Testimony
                        theme="green"
                        image="/image/cewek-random.jpg"
                        message="Dari takut ke China jadi berani solo travel! Malah extend 2 ​minggu!"
                        person={{ name: "Sari", age: 25 }}
                    />
                </div>
            </div>
            <div className="landing-page-container2nd relative">
                <PinkCircleShape />
            </div>
        </section>
    )
}

export { Testimonial }