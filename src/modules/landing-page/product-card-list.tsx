"use client";

import { Product } from "#/@type";
import Flow from "#/components/control-flow";
// import { useGetProductList } from "#/services/product.servic";
import { ProductCard, ProductCardSkeleton } from "./product-card";

const DUMMY = [
    {
        id: 1,
        image: "/image/cover-ebook.png",
        title: "Chinesewithmeggie limited edition",
        originalPrice: 150000,
        strikeoutPrice: 200000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        image: "/image/cover-ebook.png",
        title: "Chinesewithmeggie limited edition",
        originalPrice: 150000,
        strikeoutPrice: 200000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        id: 3,
        image: "/image/cover-ebook.png",
        title: "Chinesewithmeggie limited edition",
        originalPrice: 150000,
        strikeoutPrice: 200000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        createdAt: new Date(),
        updatedAt: new Date()
    }
] as Product[]

function ProductCardList() {

    // const { data: products, isPending, isSuccess } = useGetProductList()

    return (
        <section className="space-y-10 md:space-y-20 pt-10 md:pt-20" aria-label="product list card">
            <h4 className="font-fredoka text-lg md:text-2xl font-bold text-center">
                Atau bisa juga pilih e-book yg lebih relevan buat kamu
            </h4>
            <Flow>
                <Flow.If condition={false}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <ProductCardSkeleton key={i} />
                        ))}
                    </div>
                </Flow.If>
                <Flow.ElseIf condition={true}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
                        {DUMMY?.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </Flow.ElseIf>
                <Flow.Else>
                    <p className="text-xs md:text-sm lg:text-base text-red-500 text-center">Something when wrong!</p>
                </Flow.Else>
            </Flow>


        </section>
    )
}

export { ProductCardList }