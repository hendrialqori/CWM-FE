import { number, z } from "zod"

export const checkoutFormScheme = z.object({
    phone: z.number({ invalid_type_error: "Input valid phone number" })
        .min(1, { message: "Required" })
        .nonnegative(),
    email: z.string().email(),
    confirmEmail: z.string().email()
})

export type CheckoutFormType = z.infer<typeof checkoutFormScheme>