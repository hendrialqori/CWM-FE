import Image from "next/image"
import china_flag from "#/assets/svg/china-flag.svg?url"
import { LoginForm } from "#/modules/login/form"

export default function Login() {
    return (
        <main className="bg-[#F4F4F4] w-full min-h-screen">
            <header className="px-2 md:px-10 py-5">
                <div className="flex items-center justify-start">
                    <p className="font-fredoka font-semibold text-sm md:text-lg">Chinesewithmeggie</p>
                    <Image
                        src={china_flag} width={20} height={14} alt="china_flag"
                    />
                </div>
            </header>
            <section className="min-h-[calc(100vh_-_200px)] center-flex">
                <div className="w-11/12 md:max-w-[320px] min-h-max mx-auto my-auto space-y-14"
                    aria-label="login content container">
                    <div className="font-mulish text-center space-y-1">
                        <h1 className="font-bold text-2xl md:text-3xl -tracking-wider">Welcome back admin</h1>
                        <h2 className="font-medium -tracking-wider">Enter yout account details</h2>
                    </div>
                    <LoginForm />
                </div>
            </section>
        </main>
    )
}