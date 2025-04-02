import { navData } from "@/constants/Data";
import { createContext, useContext, useEffect, useState, useCallback } from "react"
import { useParams } from "react-router";

const initialState = {
    book: "GEN"
}

const BookProviderContext = createContext(initialState)

export function BookProvider({
    children,
    defaultBook = "GEN",
    storageKey = "book-key",
    ...props
}) {
    const [book, setBook] = useState(
        () => localStorage.getItem(storageKey) || defaultBook
    )

    const path = window.location.pathname.split("/")[1]

    useEffect(() => {
        localStorage.setItem(storageKey, path)
        setBook(path)
    }, [path])

    const value = {
        book
    }

    return (
        <BookProviderContext.Provider {...props} value={value}>
            {children}
        </BookProviderContext.Provider>
    )
}

export const useBook = () => {
    const context = useContext(BookProviderContext)
    if (context === undefined)
        return ""
    else {
        const data = navData.navMain[0]?.items.concat(navData.navMain[1]?.items).find(item => item.id == context.book)
        return data
    }
}