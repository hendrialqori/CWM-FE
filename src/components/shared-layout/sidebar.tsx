import Image from "next/image"
import Link from "next/link"
import { CgNotes } from "react-icons/cg";

export default function Sidebar() {
    return (
        <aside className="bg-[#F2F4F7] block sticky top-0 w-[250px] h-dvh px-5">
            <Avatar />
            <nav className="my-10">
                <Link href="/admin/dashboard">
                    <div className="center-flex justify-start gap-3 bg-white hover:outline-double hover:outline-black rounded-xl py-3 pl-3">
                        <CgNotes />
                        <p className="text-sm font-medium">Dashboard</p>
                    </div>
                </Link>
            </nav>
        </aside>
    )
}


function Avatar() {
    return (
        <figure className="center-flex gap-2 mt-10">
            <Image
                src="/image/ishowspeed.jpg"
                width={60}
                height={60}
                className="size-10 rounded-full object-cover"
                alt="avatar"
            />
            <figcaption>
                <div>
                    <h2 className="-tracking-wider font-medium text-sm">Administrator</h2>
                    <p className="-tracking-wider text-xs font-medium text-gray-500">adminstrator@gmail.com</p>
                </div>
            </figcaption>
        </figure>
    )
}