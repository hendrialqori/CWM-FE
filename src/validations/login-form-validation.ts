import { z } from "zod"

export const loginFormScheme = z.object({
    email: z.string().email(),
    password: z.string().min(1, { message: "Must contain at least 1 character(s)" })
})

export type LoginFormType = z.infer<typeof loginFormScheme>