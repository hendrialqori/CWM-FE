import { z } from "zod"

export const addProductScheme = z.object({
    image: z.any()
        .refine((images: FileList) => images[0]?.name, "Required")
        .refine((images: FileList) => {
            const MAX_IMAGE_SIZE = 3_000_000 //3mb
            return images[0]?.size <= MAX_IMAGE_SIZE
        }, "File size too big")
        .transform((images: FileList) => images[0])
    ,
    name: z.string().min(1, { message: "Required" }).max(100),
    originalPrice: z.string()
        .min(1, { message: "Required" })
        .transform((price) => price.replaceAll(",", "")),
    strikeoutPrice: z.string()
        .min(1, { message: "Required" })
        .transform((price) => price.replaceAll(",", "")),
    isOffer: z.boolean().default(false),
    link: z.string().min(1, { message: "Required" }),
    description: z.string()
})

export const updateProductScheme = z.object({
    name: z.string().min(1, { message: "Required" }).max(100),
    originalPrice: z.string()
        .min(1, { message: "Required" })
        .transform((price) => price.replaceAll(",", "")),
    strikeoutPrice: z.string()
        .min(1, { message: "Required" })
        .transform((price) => price.replaceAll(",", "")),
    isOffer: z.boolean().default(false).optional(),
    link: z.string().min(1, { message: "Required" }),
    description: z.string().min(1, { message: "Required" })
})


export type AddProductType = z.infer<typeof addProductScheme>

export type UpdateProductType = z.infer<typeof updateProductScheme>