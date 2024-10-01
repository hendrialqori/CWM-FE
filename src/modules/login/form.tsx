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
import { useLogin } from "#/services/auth.service";

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
        resolver: zodResolver(loginFormScheme)
    })
    const router = useRouter()
    const login = useLogin()

    const submit = handleSubmit((state) => {
        const data = {
            email: state.email,
            password: state.password
        }

        login.mutate(data, {
            onSuccess: () => {
                router.push("/admin/dashboard")
            },
            onError: (error) => {
                const message = error.response?.data.errors
                toast.error(message)
            }
        })
    })

    return (
        <React.Fragment>
            <Form onSubmit={submit} className="w-full space-y-3">
                <FormItem className="space-y-2">
                    {(id) => (
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
                    {(id) => (
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
                        className="w-full text-xs md:text-sm bg-black text-white rounded-lg py-2 h-10 outline-double active:outline-black"
                        disabled={login.isPending}
                    >
                        Sign In
                    </button>
                </div>
            </Form>
            <Portal isOpen={login.isPending}>
                <div className="text-white center-flex gap-2">
                    <p>Loading...</p>
                    <CgSpinner className="animate-spin text-xl" />
                </div>
            </Portal>
        </React.Fragment>
    )
}

export { LoginForm }