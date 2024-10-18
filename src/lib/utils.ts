import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const merge = twMerge

export const cn = clsx

export const priceFormat = (price: number) => {
    return new Intl.NumberFormat("en-EN").format(price)
}

export const sanitizedNonDigits = (value: string) => {
    const regex = /[^0-9DMY/]/g
    return value.replace(regex, "")
}

export const scrollInto = (target: string) => {
    const element = document.querySelector(target)
    if (!element) {
        throw new Error("Element not found")
    }
    element.scrollIntoView({ behavior: "smooth" })
}