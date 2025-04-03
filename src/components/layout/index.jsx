import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { ModeToggle } from "@/components/theme-toggle"
import { useBook } from "@/context/book-context"
import { useParams } from "react-router"
import { House } from "lucide-react"

export default function Layout({ children }) {
    const bookData = useBook()
    const { chapterID } = useParams()
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <div className="flex items-center justify-between w-full">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="block">
                                    <BreadcrumbLink href="/">
                                        <House className="size-4" />
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="block" />
                                <BreadcrumbItem className="block">
                                    {bookData?.id ? (
                                        <BreadcrumbLink href={`/${bookData?.id}`}>
                                            {bookData?.name}
                                        </BreadcrumbLink>
                                    ) : (
                                        <span className="hover:text-foreground transition-colors">Select a Book</span>
                                    )}

                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{chapterID ?? "Select a Chapter"}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <ModeToggle />
                    </div>
                </header>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}
