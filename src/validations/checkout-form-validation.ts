import { z } from "zod"

export const checkoutFormScheme = z.object({
    name: z.string().min(1, { message: "Required" }),
    phone: z.number({ invalid_type_error: "Input valid phone number" })
        .min(1, { message: "Required" })
        .nonnegative()
        .transform((value) => {
            const phone = `62${value}` 
            return Number(phone)
        }),
    email: z.string().email(),
    confirmEmail: z.string().email()
})

export type CheckoutFormType = z.infer<typeof checkoutFormScheme>