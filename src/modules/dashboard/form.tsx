import React from "react"
import {
    Form, FormItem, FormLabel,
    FormFielDescription, FormFieldError
} from "#/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addProductScheme, type AddProductType } from "#/validations/product-form-validation"
import Input from "#/components/ui/input"
import { cn, sanitizedNonDigits, priceFormat } from "#/lib/utils"
import { IoMdClose } from "react-icons/io"


type Props = {
    type: "CREATE" | "UPDATE",
    onClose: () => void
}

const buttonLabel = {
    CREATE: "Simpan",
    UPDATE: "Simpan perubahan"
}

function ProductForm({ type, onClose }: Props) {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<AddProductType>({
        resolver: zodResolver(addProductScheme)
    })
    const [isLoading, setLoading] = React.useState(false)

    function numberFormat(value: string) {
        const sanitized = Number(sanitizedNonDigits(value))
        const parseToNumber = priceFormat(sanitized)
        return parseToNumber
    }

    function createNewProduct(){}

    function updateProduct(){}

    const submit = handleSubmit((state) => {
        
    })


    return (
        <div className="bg-white rounded-xl w-[400px] px-5 py-4">
            <div className="flex justify-end items-center" onClick={onClose}>
                <button>
                    <IoMdClose className="text-xl" />
                </button>
            </div>
            <Form onSubmit={submit} className="w-full space-y-4">
                <FormItem>
                    {(id) => (
                        <React.Fragment>
                            <FormLabel htmlFor={id}>Image</FormLabel>
                            <Input
                                id={id}
                                type="file"
                                className="bg-[#F4F4F4]"
                                accept=".jpg, .png, .jpeg"
                                {...register("image")}
                            />
                            <FormFielDescription>
                                Max file size allowed is 3MB
                            </FormFielDescription>
                            <FormFieldError>
                                {errors.image?.message as string}
                            </FormFieldError>
                        </React.Fragment>
                    )}
                </FormItem>
                <FormItem>
                    {(id) => (
                        <React.Fragment>
                            <FormLabel htmlFor={id}>Original price</FormLabel>
                            <Input
                                id={id}
                                className="bg-[#F4F4F4]"
                                placeholder="Rp."
                                {...register("originalPrice", {
                                    onChange: (event) => {
                                        const value = event.target.value
                                        const price = numberFormat(value)
                                        setValue("originalPrice", price)
                                    }
                                })}
                                aria-invalid={Boolean(errors.originalPrice?.message)}
                            />
                            <FormFieldError>
                                {errors.originalPrice?.message}
                            </FormFieldError>
                        </React.Fragment>
                    )}
                </FormItem>
                <FormItem>
                    {(id) => (
                        <React.Fragment>
                            <FormLabel htmlFor={id}>Strikethrough price</FormLabel>
                            <Input
                                id={id}
                                className="bg-[#F4F4F4]"
                                placeholder="Rp."
                                {...register("strikeThroughPrice", {
                                    onChange: (event) => {
                                        const value = event.target.value
                                        const price = numberFormat(value)
                                        setValue("strikeThroughPrice", price)
                                    }
                                })}
                                aria-invalid={Boolean(errors.strikeThroughPrice?.message)}
                            />
                            <FormFieldError>
                                {errors.originalPrice?.message}
                            </FormFieldError>
                        </React.Fragment>
                    )}
                </FormItem>
                <FormItem className="flex flex-col">
                    {(id) => (
                        <React.Fragment>
                            <FormLabel htmlFor={id}>Description</FormLabel>
                            <textarea
                                id={id}
                                placeholder="Description"
                                {...register("description")}
                                className={cn(
                                    "block w-full rounded-lg font-medium text-xs md:text-sm h-20 px-3 py-3 md:py-2",
                                    "bg-[#F4F4F4] outline-2 focus:outline focus:outline-black ",
                                    "placeholder:text-gray-500 placeholder:text-[0.8rem] md:placeholder:text-sm",
                                )}
                                aria-invalid={Boolean(errors.description?.message)}
                            />
                            <FormFieldError>
                                {errors.description?.message}
                            </FormFieldError>
                        </React.Fragment>
                    )}
                </FormItem>
                <div className="py-3 flex justify-end">
                    <button
                        className="w-1/2 text-xs md:text-sm font-medium bg-black text-white rounded-lg py-2 h-10 outline-double active:outline-black"
                        disabled={isLoading}
                    >
                        {buttonLabel[type]}
                    </button>
                </div>
            </Form>
        </div>
    )
}

export { ProductForm }