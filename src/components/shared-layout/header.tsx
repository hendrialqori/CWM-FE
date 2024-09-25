import { MdLogout } from "react-icons/md";

export default function Header() {
    return (
        <header className="flex justify-end p-2">
            <button className="center-flex gap-x-2 rounded-lg bg-black text-white px-4 py-2 outline-double hover:outline-black">
                <MdLogout />
                <p className="text-sm font-medium">Logout</p>
            </button>
        </header>
    )
}