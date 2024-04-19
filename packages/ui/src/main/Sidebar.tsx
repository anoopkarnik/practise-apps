import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/avatar";
import { Button } from "@repo/ui/components/button";
import { SidebarItem } from "./SidebarItem";

interface ItemsProps {
    items?: any[]
}

export const Sidebar = ({
    items
}: ItemsProps) => {
    return (
        <div className="w-72 border-r border-slate-300 dark:border-slate-900 min-h-screen mr-4 pt-10">
            <div>
                {items?.map((item, index) => (
                    <SidebarItem key={index} href={item.href} icon={item.icon} title={item.title} />
                ))}
            </div>
        </div>

    )
}