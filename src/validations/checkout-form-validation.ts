import { z } from "zod"

export const checkoutFormScheme = z.object({
    email: z.string().email(),
    confirmEmail: z.string().email()
})

export type CheckoutFormType = z.infer<typeof checkoutFormScheme>