import Image from "next/image"
import yellow_round_shape from "#/assets/svg/yellow-round-shape.svg"

function YellowRoundShape() {
    return (
        <Image
            src={yellow_round_shape}
            width={135}
            height={135}
            className="size-32 rounded-full"
            alt="yellow-round-shape"
        />
    )
}

function UniqueSellingPoint() {
    return (
        <section className="py-24" aria-label="unique selling point">
            <div className="landing-page-container2nd">
                <YellowRoundShape />
            </div>
            <div className="landing-page-container2nd grid grid-cols-8 grid-rows-2 gap-5">
                <h2 className="font-bold text-3xl font-fredoka col-span-3 center-flex">
                    Mengapa harus beli di chinesewithmeggie ?
                </h2>
                <div className="relative flex col-span-5 rounded-3xl bg-[#F07B48]/15" aria-label="usp-description">
                    <div className="w-7/12 pl-7 py-12 space-y-3">
                        <h3 className="font-fredoka font-bold text-xl">Easy to use</h3>
                        <p className="font-mulish">Platform kami memiliki antarmuka yang intuitif dan mudah dinavigasi.
                            Kamu bisa langsung mengakses materi dengan cepat, tanpa kebingungan atau hambatan
                        </p>
                    </div>
                    <div className="w-5/12 relative rounded-r-3xl overflow-hidden h-full">
                        <div className="size-80 rounded-full bg-[#FEC7B0] absolute -right-[100px] -top-[100px]" />
                        <div className="size-80 rounded-full bg-[#F07B48] absolute -bottom-[150px] -right-[130px] z-[2]" />
                    </div>
                    <Image
                        src="/image/meggie-1.png"
                        width={154}
                        height={300}
                        alt="meggie-1"
                        className="absolute right-8 bottom-0 w-[154px] h-[270px] object-contain z-[3]"
                    />
                </div>
                <div className="relative flex col-span-4 rounded-3xl bg-[#ADC482]/15" aria-label="usp-description">
                    <div className="w-5/12 relative rounded-l-3xl overflow-hidden h-full">
                        <div className="size-80 rounded-full bg-[#EDFFCB] absolute -left-[170px] -top-[100px]" />
                        <div className="size-80 rounded-full bg-[#ADC482] absolute -bottom-[150px] -left-[150px] z-[2]" />
                    </div>
                    <div className="w-9/12 pr-8 py-12 space-y-3">
                        <h3 className="font-fredoka font-bold text-xl">Easy to read</h3>
                        <p className="font-mulish">
                            Dengan font yang bersih dan tata letak yang rapi,
                            e-book dan video kami sangat nyaman untuk dibaca dan diikuti.
                        </p>
                    </div>
                    <Image
                        src="/image/meggie-2.png"
                        width={154}
                        height={300}
                        alt="meggie-2"
                        className="absolute left-3 bottom-0 w-[154px] h-[290px] object-contain z-[3]"
                    />
                </div>
                <div className="relative flex col-span-4 rounded-3xl bg-[#6E9FB8]/15" aria-label="usp-description">
                    <div className="w-7/12 pl-7 py-12 space-y-3">
                        <h3 className="font-fredoka font-bold text-xl">Easy to learn</h3>
                        <p className="font-mulish">
                            Materi disajikan dengan langkah-langkah yang jelas dan terstruktur,
                            membuat belajar bahasa Mandarin jadi lebih mudah dan menyenangkan
                        </p>
                    </div>
                    <div className="w-5/12 relative rounded-r-3xl overflow-hidden h-full">
                        <div className="size-80 rounded-full bg-[#D2F0FF] absolute -right-[130px] -top-[100px]" />
                        <div className="size-80 rounded-full bg-[#6E9FB8] absolute -bottom-[150px] -right-[130px] z-[2]" />
                    </div>
                    <Image
                        src="/image/meggie-3.png"
                        width={154}
                        height={300}
                        alt="meggie-3"
                        className="absolute right-2 bottom-0 w-[180px] h-[270px] object-contain z-[3]"
                    />
                </div>
            </div>
        </section>
    )
}

export { UniqueSellingPoint }