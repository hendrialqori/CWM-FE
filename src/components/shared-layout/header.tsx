// import { useSidebar } from "#/stores/use-sidebar";
import Image from "next/image";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default async function Header() {
    // const toggle = useSidebar().toggle

    return (
        <header className="flex justify-between">
            <button
                className="center-flex rounded-full bg-gray-200 p-[6px] hover:outline hover:outline-black visible lg:invisible"
            // onClick={toggle}
            >
                <MdKeyboardDoubleArrowLeft className="text-xl" />
            </button>
            <figure className="center flex cursor-pointer gap-2">
                <Image
                    src="/image/ishowspeed.jpg"
                    width={60}
                    height={60}
                    className="size-8 rounded-full object-cover"
                    alt="avatar"
                />
                <figcaption>
                    <div className="-space-y-1">
                        <h2 className="-tracking-wider font-medium text-sm">Administrator</h2>
                        <p className="-tracking-wider text-[12px] text-gray-500">adminstrator@gmail.com</p>
                    </div>
                </figcaption>
            </figure>
        </header>
    )
}