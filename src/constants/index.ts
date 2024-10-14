import { type Testimony } from "#/@type";

export const CLIENT = process.env.NEXT_PUBLIC_CLIENT

export const API = CLIENT + "/api"

export const STATIC = CLIENT + "/static"

export const IS_EXPAND_SIDEBAR = false

export const testimonial = [
    {
        image: "/image/WA-testimoni-1.jpeg",
        message: "Dikira orang lokal gara-gara lancar banget! Dapet diskon ​khusus local di mana-mana!",
        person: { name: "Rini", age: 24, job: "Karyawan swasta" }
    },
    {
        image: "/image/WA-testimoni-2.jpeg",
        message: "Bisa nabung 50% budget karena gak perlu guide! Shopping ​jadi lebih banyak, hehe.",
        person: { name: "Dinda", age: 28, job: "Traveler" }
    },
    {
        image: "/image/WA-testimoni-3.jpeg",
        message: "Serius, ini ebook paling praktis yang pernah aku coba. Dalam seminggu aja udah bisa ngobrol basic Mandarin! Super puas",
        person: { name: "Andi", age: 25, job: "Mahasiswa" }
    },
    {
        image: "/image/WA-testimoni-1.jpeg",
        message: "Aku biasanya bosen kalau belajar bahasa, tapi ebook ini beda banget. Lucu, interaktif, dan ngebantu banget buat liburan ke China. Recommended!",
        person: { name: "Dian", age: 33, job: "Freelancer" }
    },
    {
        image: "/image/WA-testimoni-2.jpeg",
        message: "Gak nyangka bisa ngobrol Mandarin secepat ini! Ebook-nya bener-bener gampang dipahami, dan materinya langsung bisa dipakai buat sehari-hari.",
        person: { name: "Sarah", age: 28, job: "Traveler" }
    },
    {
        image: "/image/WA-testimoni-3.jpeg",
        message: "Gak nyangka bisa ngobrol Mandarin secepat ini! Ebook-nya bener-bener gampang dipahami, dan materinya langsung bisa dipakai buat sehari-hari.",
        person: { name: "Sarah", age: 28, job: "Traveler" }
    }
]

export const productKnowledgePoints = [
    "Cara check-in bagasi di China dalam Bahasa Mandarin!",
    "Cara memilih tempat duduk di pesawat~",
    "Membuka topik percakapan dengan orang China supaya bisa merasakan budaya China lebih dekat lagi~!",
    "Tips and trick cara pesan makanan dalam menu Bahasa Mandarin",
    "Rekomendasi menu masakan ala China yang lagi ngetrend banget!",
    "Cara berkenalan dengan orang lokal China pakai Bahasa Mandarin!",
    "Cara memesan taxi di aplikasi China",
    "Cara check-in dan check-out di hotel China",
    "Belanja online dan offline di China dalam Bahasa Mandarin!",
    "Cara top Up Alipay & Wechat Pay",
    "Banyak latihan listening dan mini quiz!"
]