import React from "react"
import { merge } from "#/lib/utils"

type InputProps = React.ComponentPropsWithoutRef<"input">

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, refs) => {
    const classNames = merge(
        "block w-full rounded-lg font-medium text-xs md:text-sm h-10 px-3 py-3 md:py-2 placeholder:text-gray-500 bg-white",
        "bg-white outline-2 focus:outline focus:outline-black ",
        "placeholder:text-[0.8rem] md:placeholder:text-sm",
        className
    )

    return (
        <input
            ref={refs}
            className={classNames}
            {...props}
        />
    )
})

export default Input