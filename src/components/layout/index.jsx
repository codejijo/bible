import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { ModeToggle } from "@/components/theme-toggle"
import { useBook } from "@/context/book-context"

export default function Layout({ children }) {
    const bookData = useBook()

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <div className="flex items-center justify-between w-full">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="block">
                                    <BreadcrumbLink href="#">
                                        {bookData?.name || "Select a Book"}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Select a Chapter</BreadcrumbPage>
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
