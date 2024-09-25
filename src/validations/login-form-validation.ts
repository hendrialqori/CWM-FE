import { z, ZodType } from "zod"

export const loginFormScheme: ZodType = z.object({
    email: z.string().email(),
    password: z.string().min(1, { message: "Must contain at least 1 character(s)" })
})
