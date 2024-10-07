import { z } from "zod"

export const loginFormScheme = z.object({
    email: z.string().min(1, { message: "Required" }).email(),
    password: z.string().min(1, { message: "Required" })
})

export type LoginFormType = z.infer<typeof loginFormScheme>