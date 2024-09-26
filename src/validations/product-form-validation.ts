import { z } from "zod"

export const addProductScheme = z.object({
    image: z.any()
        .refine((images: FileList) => images[0]?.name, "Required")
        .refine((images: FileList) => {
            const MAX_IMAGE_SIZE = 3_000_000 //3mb
            console.log(images[0]?.size)
            return images[0]?.size <= MAX_IMAGE_SIZE
        }, "File size too big"),
    originalPrice: z.string()
        .min(1, { message: "Required" })
        .transform((price) => price.replaceAll(",", "")),
    strikeThroughPrice: z.string()
        .min(1, { message: "Required" })
        .transform((price) => price.replaceAll(",", "")),
    description: z.string()
        .max(100, { message: "Max 100 characters only" })
})

export type AddProductType = z.infer<typeof addProductScheme>