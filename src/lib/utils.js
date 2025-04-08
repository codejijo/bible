import { navData } from "@/constants/Data"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function getBookData(name) {
    if (name === undefined)
        return ""
    else {
        const data = navData.navMain[0]?.items.concat(navData.navMain[1]?.items).find(item => item.id == name)
        return data
    }
}