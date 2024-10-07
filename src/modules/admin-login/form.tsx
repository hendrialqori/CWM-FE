"use client";

import React from "react"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import {
    Form, FormItem,
    FormFieldError, FormFielDescription
} from "#/components/ui/form"
import { CgSpinner } from "react-icons/cg";
import Input from "#/components/ui/input"
import Portal from "#/components/ui/portal";

import { loginFormScheme, type LoginFormType } from "#/validations/login-form-validation"
import { signIn } from "next-auth/react";
import { Error } from "#/@type";

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
        resolver: zodResolver(loginFormScheme)
    })

    const router = useRouter()
    const [isLoading, setLoading] = React.useState(false)

    const submit = handleSubmit(async (state) => {
        const data = {
            email: state.email,
            password: state.password
        }

        setLoading(true)
        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        })

        if (!res?.ok) {
            const error = JSON.parse(res?.error as string) as Error
            toast.error(error.errors as string)
            setLoading(false)
            return
        }

        router.replace("/admin/dashboard")
    })

    return (
        <React.Fragment>
            <Form onSubmit={submit} className="w-full space-y-3 font-inter">
                <FormItem className="space-y-2">
                    {() => (
                        <React.Fragment>
                            <Input
                                {...register("email")}
                                placeholder="Email"
                                aria-invalid={Boolean(errors.email?.message)}
                            />
                            <FormFielDescription>
                                Enter your email
                            </FormFielDescription>
                            <FormFieldError>
                                {errors.email?.message as string}
                            </FormFieldError>
                        </React.Fragment>
                    )}
                </FormItem>
                <FormItem className="space-y-2">
                    {() => (
                        <React.Fragment>
                            {/* <FormLabel htmlFor={id}>Email</FormLabel> */}
                            <Input
                                {...register("password")}
                                placeholder="Password"
                                type="password"
                                aria-invalid={Boolean(errors.password?.message)}
                            />
                            <FormFielDescription>
                                Enter your password
                            </FormFielDescription>
                            <FormFieldError>
                                {errors.password?.message as string}
                            </FormFieldError>
                        </React.Fragment>
                    )}
                </FormItem>
                <div className="pt-6">
                    <button
                        disabled={isLoading}
                        className="w-full text-xs md:text-sm bg-black text-white rounded-lg py-2 h-10 outline-double active:outline-black"

                    >
                        Sign In
                    </button>
                </div>
            </Form>
            <Portal isOpen={isLoading}>
                <div className="text-white center-flex gap-2">
                    <p>Loading...</p>
                    <CgSpinner className="animate-spin text-xl" />
                </div>
            </Portal>
        </React.Fragment>
    )
}

export { LoginForm }