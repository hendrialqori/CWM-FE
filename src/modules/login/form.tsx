"use client";

import React from "react"
import { useForm } from "react-hook-form"
import {
    Form, FormItem,
    FormFieldError, FormFielDescription
} from "#/components/ui/form"
import { CgSpinner } from "react-icons/cg";
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormScheme, type LoginFormType } from "#/validations/login-form-validation"
import Input from "#/components/ui/input"
import Portal from "#/components/ui/portal";

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
        resolver: zodResolver(loginFormScheme)
    })
    const [isLoading, setLoading] = React.useState(false)

    const submit = handleSubmit((state) => {
        console.log(state)
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
                        disabled={isLoading}
                    >
                        Sign In
                    </button>
                </div>
            </Form>
            <Portal isOpen>
                <div className="text-white center-flex gap-2">
                    <p>Loading...</p>
                    <CgSpinner className="animate-spin text-xl" />
                </div>
            </Portal>
        </React.Fragment>
    )
}

export { LoginForm }