import { twMerge } from "tailwind-merge";

export const merge = twMerge

export const priceFormat = (price: number) => {
    return new Intl.NumberFormat("en-EN").format(price)
}