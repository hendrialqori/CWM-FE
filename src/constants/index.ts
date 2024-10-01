import { type Testimony } from "#/@type";

export const CLIENT = process.env.NEXT_PUBLIC_CLIENT

export const API = CLIENT + "/api"

export const STATIC = CLIENT + "/static"

export const IS_EXPAND_SIDEBAR = false

export const testimonial: Testimony[] = [
    {
        image: "/image/cewek-random.jpg",
        message: "Dikira orang lokal gara-gara lancar banget! Dapet diskon ​khusus local di mana-mana!",
        person: { name: "Rini", age: 24, job: "Karyawan swasta" }
    },
    {
        image: "/image/cewek-random.jpg",
        message: "Bisa nabung 50% budget karena gak perlu guide! Shopping ​jadi lebih banyak, hehe.",
        person: { name: "Dinda", age: 28, job: "Traveler" }
    },
    {
        image: "/image/cewek-random.jpg",
        message: "Serius, ini ebook paling praktis yang pernah aku coba. Dalam seminggu aja udah bisa ngobrol basic Mandarin! Super puas",
        person: { name: "Andi", age: 25, job: "Mahasiswa" }
    },
    {
        image: "/image/cewek-random.jpg",
        message: "Aku biasanya bosen kalau belajar bahasa, tapi ebook ini beda banget. Lucu, interaktif, dan ngebantu banget buat liburan ke China. Recommended!",
        person: { name: "Dian", age: 33, job: "Freelancer" }
    },
    {
        image: "/image/cewek-random.jpg",
        message: "Gak nyangka bisa ngobrol Mandarin secepat ini! Ebook-nya bener-bener gampang dipahami, dan materinya langsung bisa dipakai buat sehari-hari.",
        person: { name: "Sarah", age: 28, job: "Traveler" }
    }
]

export const productKnowledgePoints = [
    "Check-in di bandara China dengan mudah!",
    "Percakapan checkin bagasi di bandara China dan memilih tempat duduk di pesawat dalam Bahasa Mandarin!",
    "Membuka topik percakapan dengan orang China supaya bisa merasakan budaya China lebih dekat lag",
    "Pesan makanan di restoran dalam Bahasa Mandarin gak bingung lagi!",
    "Tips and trick cara pesan makanan dalam menu Bahasa Mandarin serta rekomendasi menu masakan ala China yang lagi ngetrend banget!",
    "Cara berkenalan dengan orang lokal China pakai Bahasa Mandarin!"
]