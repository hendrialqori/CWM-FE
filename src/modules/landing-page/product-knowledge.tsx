import Image from "next/image";
import star_shape from "#/assets/svg/star-shape.svg"
import dollar_shape from "#/assets/svg/dollar-shape.svg"

type PointProps = {
    number: number;
    title: string;
    description: string
}


function Point({ number, title, description }: PointProps) {

    function theme() {
        switch (number) {
            case 1:
                return "bg-[#F07B48]"
            case 2:
                return "bg-[#6E9FB8]"
            case 3:
                return "bg-[#ADC482]"
        }
    }

    return (
        <div className="flex gap-5">
            <div className={`center-flex size-11 rounded-xl ${theme()}`}>
                <span className="font-semibold text-xl text-white">{number}</span>
            </div>

            <div className="w-10/12 space-y-3">
                <h3 className="font-fredoka text-xl font-bold">{title}</h3>
                <p className="font-mulish font-medium text-[#5D5D5D]">{description}</p>
            </div>
        </div>
    )
}

function StarShape() {
    return (
        <Image
            src={star_shape}
            className="size-28 absolute -top-20 right-1/4"
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
            className="size-28 absolute bottom-0 right-40"
            width={112}
            height={112}
            alt="dollar-shape"
        />
    )
}

function ProductKnowledge() {
    return (
        <section className="landing-page-container flex py-24 mt-space_between_section relative">
            <StarShape />
            <div className="w-5/12 space-y-12" aria-label="product knowledge description">
                <div className="text-center space-y-2">
                    <h2 className="font-fredoka font-bold text-[2rem] leading-[2.25rem]">What will you get ?</h2>
                    <p className="font-mulish text-xl font-medium text-[#5D5D5D]">Skill yang bisa buat kamu menjadi makin percaya diri</p>
                </div>
                <Point
                    number={1}
                    title="Rahasia Check-in Hotel Secepat Kilat"
                    description="Trick “Magic words” buat upgrade kamar gratis dan cara dapat early check-in tanpa bayar tambahan."
                />
                <Point
                    number={2}
                    title="Rahasia Check-in di Bandara tanpa antri"
                    description="Rahasia pilih counter check-in tercepat serta cara bypass antrian panjang dengan kosakata ajaib"
                />
                <Point
                    number={3}
                    title="Cara ajaib pesan makanan enak tanpa bisa bahasa China"
                    description="10 Frasa ajaib buat pesan makanan favoritmu serta panduan lengkap baca menu Chinese + rekomendasi hidangan top!"
                />
            </div>
            <div className="w-7/12 center-flex flex-col" aria-label="image">
                <Image
                    src="/image/cover-ebook.png"
                    width={674}
                    height={440}
                    alt="cover-ebook"

                />
                <div className="flex gap-3">
                    <div className="h-1 w-14 bg-cwm_orange" />
                    <div className="h-1 w-14 bg-cwm_blue" />
                    <div className="h-1 w-14 bg-cwm_green" />
                </div>
            </div>
            <DollarShape />
        </section>
    )
}


export { ProductKnowledge }