import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import icon from "@/assets/bible.svg"

export function VersionSwitcher({
    versions,
    defaultVersion,
}) {
    const [selectedVersion, setSelectedVersion] = useState(defaultVersion)

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                                {/* <GalleryVerticalEnd className="size-4" /> */}
                                <img src={icon} alt="Bible Icon" />
                            </div>
                            <div className="flex flex-col gap-0.5 leading-none">
                                {/* <span className="font-semibold">Documentation</span> */}
                                <span className="font-semibold">{selectedVersion.name}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] p-4"
                        align="start"
                    >
                        {versions.map((version) => (
                            <DropdownMenuItem
                                key={version.identifier}
                                onSelect={() => setSelectedVersion(version)}
                            >
                                {version.name}{" "}
                                {version === selectedVersion && <Check className="ml-auto" />}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
