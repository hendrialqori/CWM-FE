import React from "react"
import Image from "next/image"
import { useQueryClient } from "@tanstack/react-query"
import {
    Form, FormItem, FormLabel,
    FormFielDescription, FormFieldError
} from "#/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { addProductScheme, updateProductScheme, type AddProductType } from "#/validations/product-form-validation"
import Input from "#/components/ui/input"
import { cn, sanitizedNonDigits, priceFormat } from "#/lib/utils"
import { IoMdClose } from "react-icons/io"
import { useProduct, useProductMutation } from "#/services/product-service"
import { toast } from "sonner"
import ButtonSpin from "#/components/ui/button-spin"
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { STATIC } from "#/constants"

type Props = {
    type: "CREATE" | "UPDATE"
    id?: number,
    onClose: () => void
}

const buttonLabel = {
    CREATE: "Simpan",
    UPDATE: "Simpan perubahan"
}

function ProductForm({ id, type, onClose, }: Props) {
    const queryClient = useQueryClient()

    const [imagePreview, setImagePreview] = React.useState("")
    const [isChangeImage, setChangeImage] = React.useState(false)

    const { register, handleSubmit,
        formState: { errors }, getValues, setValue, reset } = useForm<AddProductType>({
            resolver: zodResolver(
                isChangeImage || type === "CREATE"
                    ? addProductScheme : updateProductScheme
            )
        })

    const { refetch: refectProductId } = useProduct({ id: Number(id) })
    const { postMutation, updateMutation } = useProductMutation()

    const fillStateWhenUpdate = React.useCallback(async () => {
        const { data: product, isSuccess } = await refectProductId()
        if (isSuccess) {
            setImagePreview(product?.data.image ?? "")
            setValue("name", product?.data.title ?? "")
            setValue("originalPrice", numberFormat(product?.data.originalPrice.toString() ?? ""))
            setValue("strikeoutPrice", numberFormat(product?.data.strikeoutPrice.toString() ?? ""))
            setValue("isOffer", Boolean(product?.data.isOffer))
            setValue("link", product?.data.link ?? "")
            setValue("description", product?.data.description ?? "")
        }
        // eslint-disable-next-line
    }, [refectProductId])

    React.useEffect(() => {
        if (type === "UPDATE") fillStateWhenUpdate()
    }, [type, fillStateWhenUpdate])

    function handleChangeImage() {
        setChangeImage(true)
    }

    function numberFormat(value: string) {
        const sanitized = Number(sanitizedNonDigits(value))
        const parseToNumber = priceFormat(sanitized)
        return parseToNumber
    }

    function createNewProduct(formData: FormData) {
        postMutation.mutate({ formData }, {
            onSuccess: () => {
                reset()
                onClose()

                toast.success(`Success create new product`, { position: "top-right" })

                setTimeout(() => {
                    queryClient.invalidateQueries({ queryKey: ["PRODUCT/LIST"] })
                }, 500)
            },
            onError: (error) => {
                const message = error.response?.data.message
                toast.error(JSON.stringify(message))

            }
        })
    }

    function updateProduct(formData: FormData) {
        updateMutation.mutate({ id: Number(id), formData }, {
            onSuccess: () => {
                reset()
                onClose()

                toast.success(`Success update with id ${id}`, { position: "top-right" })

                setTimeout(() => {
                    queryClient.invalidateQueries({ queryKey: ["PRODUCT/LIST"] })
                }, 500)
            },
            onError: (error) => {
                const message = error.response?.data.message
                toast.error(JSON.stringify(message))
            }
        })
    }

    const submit = handleSubmit((state) => {
        const formData = new FormData()
        formData.append("image", state.image)
        formData.append("title", state.name)
        formData.append("originalPrice", state.originalPrice)
        formData.append("strikeoutPrice", state.strikeoutPrice)
        formData.append("isOffer", Number(state.isOffer).toString())
        formData.append("link", state.link)
        formData.append("description", state.description)

        switch (type) {
            case "CREATE":
                createNewProduct(formData)
                break;
            case "UPDATE":
                updateProduct(formData)
            default:
                return
        }
    })

    const mutationPending =
        postMutation.isPending || updateMutation.isPending

    return (
        <div className="bg-white rounded-xl w-[400px] h-max px-5 py-4">
            <div className="flex justify-end items-center">
                <button onClick={onClose} disabled={mutationPending}>
                    <IoMdClose className="text-xl" />
                </button>
            </div>
            <Form onSubmit={submit} className="w-full space-y-5">
                <FormItem>
                    {(id) => (
                        !isChangeImage && type === "UPDATE" ?
                            <div className="center-flex gap-x-3 justify-start">
                                <Image src={`${STATIC}/${imagePreview}`}
                                    className="h-12 object-contain rounded-lg aspect-auto" width={40} height={40} alt="preview-avatar" />
                                <button
                                    className={cn(
                                        "px-4 text-xs font-medium select-none",
                                        "rounded-lg py-2 h-10 border border-gray-500",
                                    )}
                                    type="button"
                                    onClick={handleChangeImage}
                                >
                                    Change image
                                </button>
                            </div>
                            :
                            <React.Fragment>
                                <FormLabel htmlFor={id}>Image</FormLabel>
                                <Input
                                    id={id}
                                    type="file"
                                    className="bg-[#F4F4F4]"
                                    accept=".jpg, .png, .jpeg"
                                    {...register("image")}
                                    placeholder="Change image"
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
                            <FormLabel htmlFor={id}>Name</FormLabel>
                            <Input
                                id={id}
                                className="bg-[#F4F4F4]"
                                placeholder="Exp: Chinesewithmeggie limited edition"
                                {...register("name")}
                                aria-invalid={Boolean(errors.name?.message)}
                            />
                            <FormFieldError>
                                {errors.name?.message}
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
                            <FormLabel htmlFor={id}>Discounted price</FormLabel>
                            <Input
                                id={id}
                                className="bg-[#F4F4F4]"
                                placeholder="Rp."
                                {...register("strikeoutPrice", {
                                    onChange: (event) => {
                                        const value = event.target.value
                                        const price = numberFormat(value)
                                        setValue("strikeoutPrice", price)
                                    }
                                })}
                                aria-invalid={Boolean(errors.strikeoutPrice?.message)}
                            />
                            <FormFieldError>
                                {errors.originalPrice?.message}
                            </FormFieldError>
                        </React.Fragment>
                    )}
                </FormItem>
                <FormItem className="flex flex-col justify-start gap-1">
                    {(id) => (
                        <React.Fragment>
                            <div className="center-flex justify-start">
                                <FormLabel htmlFor={id}>Is offer product</FormLabel>
                                <RiVerifiedBadgeFill className="text-green-600" />
                            </div>
                            <input
                                id={id}
                                className="bg-[#F4F4F4] size-4 rounded-lg accent-black"
                                type="checkbox"
                                {...register("isOffer")}
                                aria-invalid={Boolean(errors.strikeoutPrice?.message)}
                            />
                            <FormFielDescription>When checked will be display at product offer section</FormFielDescription>
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
                                {...register("strikeoutPrice", {
                                    onChange: (event) => {
                                        const value = event.target.value
                                        const price = numberFormat(value)
                                        setValue("strikeoutPrice", price)
                                    }
                                })}
                                aria-invalid={Boolean(errors.strikeoutPrice?.message)}
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
                            <FormLabel htmlFor={id}>Product link</FormLabel>
                            <Input
                                id={id}
                                className="bg-[#F4F4F4]"
                                placeholder="Exp: https://docs.google.com/spreadsheets/d/1c7bIGK18wp2Zby4KXrzrimg5EsDBg16a2LFaO6HbKH0/edit?usp=sharing"
                                {...register("link")}
                                aria-invalid={Boolean(errors.link?.message)}
                            />
                            <FormFieldError>
                                {errors.link?.message}
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
                        className={cn(
                            "w-1/2 text-xs md:text-sm font-medium bg-black select-none",
                            "text-white rounded-lg py-2 h-10 outline-double active:outline-black",
                            "disabled:bg-black/70"
                        )}
                        disabled={mutationPending}
                    >
                        {mutationPending ?
                            <ButtonSpin /> : buttonLabel[type]}
                    </button>
                </div>
            </Form>
        </div>
    )
}

export { ProductForm }