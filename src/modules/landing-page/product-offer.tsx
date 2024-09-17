import { BsCameraVideo } from "react-icons/bs"
import { LiaAssistiveListeningSystemsSolid } from "react-icons/lia";
import { MdOutlineQuiz } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";


function BlurEffectBackground() {
    return (
        <div className="flex w-max absolute z-1 -translate-x-1/2 left-1/2 top-16">
            <div className="size-72 rounded-full bg-cwm_blue opacity-25 blur-2xl translate-x-8" />
            <div className="size-72 rounded-full bg-cwm_green opacity-25 blur-2xl -translate-x-20 -translate-y-14" />
        </div>
    )
}

function ProductOffer() {
    return (
        <section className="bg-[#FEF9F6] py-24 mt-space_between_section" aria-label="product-offer">
            <div className="landing-page-container2nd space-y-16">
                <div className="center-flex flex-col" aria-label="title">
                    <h2 className="font-fredoka font-bold text-[2rem]">Apa yang bakal kamu dapatkan jika membeli produk ini ?</h2>
                    <p className="font-mulish text-xl font-medium text-[#5D5D5D]">Banyak benefit yang bakal kamu dapatkan</p>
                </div>
                <div className="grid grid-cols-3 place-items-start gap-8" aria-label="offers">
                    <div className="center-flex flex-col space-y-6" aria-label="offer">
                        <div className="center-flex flex-col">
                            <BsCameraVideo className="text-5xl text-[#F07B48]" />
                            <h3 className="font-fredoka text-2xl font-bold text-[#F07B48]">Video</h3>
                        </div>
                        <p className="text-center font-medium text-[#3A3A3A]">
                            Video tutorial ekslusif dan premium, 10 Episode seru total 2 jam termasuk “Blooper & Funny moments” di China
                        </p>
                    </div>
                    <div className="center-flex flex-col space-y-6" aria-label="offer">
                        <div className="center-flex flex-col">
                            <LiaAssistiveListeningSystemsSolid className="text-5xl text-cwm_blue" />
                            <h3 className="font-fredoka text-2xl font-bold text-cwm_blue">Listening</h3>
                        </div>
                        <p className="text-center font-medium text-[#3A3A3A]">
                            Latihan listening rahasia seperti Native Speaker, 20 audio percakapan real situation dan bonus playlist mandarin hits buat latihan
                        </p>
                    </div>
                    <div className="center-flex flex-col space-y-6" aria-label="offer">
                        <div className="center-flex flex-col">
                            <MdOutlineQuiz className="text-5xl text-cwm_green" />
                            <h3 className="font-fredoka text-2xl font-bold text-cwm_green">Quiz</h3>
                        </div>
                        <p className="text-center font-medium text-[#3A3A3A]">
                            Quiz seru dengan hadiah menarik, 5 level quiz dari newbie sampai expert serta “Grand Prize” Voucher hotel bintang 5
                        </p>
                    </div>
                </div>
                <div className="relative space-y-14">
                    <BlurEffectBackground />
                    <div className="text-center">
                        <h4 className="font-fredoka text-2xl font-bold">Bisa kamu dapatkan hanya dengan harga</h4>
                        <p className="font-mulish line-through font-medium text-2xl">Rp. 1,499,999</p>
                    </div>
                    <div className="relative text-center z-[2]">
                        <p className="font-mulish font-semibold text-[#5D5D5D]">Harga spesial hari ini!</p>
                        <h3 className="font-fredoka text-6xl font-bold">Rp. 149.000,-</h3>
                    </div>
                    <button 
                        className="relative w-max mx-auto bg-black rounded-lg center-flex gap-2 text-white px-6 py-2 z-[2]">
                        <p className="text-xl font-mulish font-medium">Beli sekarang</p>
                        <FiShoppingCart className="text-xl" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export { ProductOffer }