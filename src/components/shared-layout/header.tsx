import Avatar from "./avatar";
import ButtonToggleSidebar from "./button-toggle-sidebar";

export default async function Header() {
    return (
        <header className="flex justify-between">
            <ButtonToggleSidebar />
            <Avatar />
        </header>
    )
}