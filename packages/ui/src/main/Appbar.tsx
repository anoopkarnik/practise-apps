import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/avatar";
import { Button } from "@repo/ui/components/button";

interface AppbarProps {
    user?: {
        name?: any;
        image?: any;
    },
    icon?: any,
    title?: string,
    onSignin?: any,
    onSignout?: any
}

export const Appbar = ({
    user,
    icon,
    title,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex justify-between border-b p-4 dark:bg-foreground">
        <div className="text-2xl dark:text-white flex justify-center items-center gap-4">
            {icon && <img src={icon} alt="icon" className="w-8 h-8"/>}
            {title}
        </div>
        {user?<div className="flex gap-4 justify-center items-center">
            <Avatar>
                <AvatarImage src={user?.image }/>
                <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>:null}
    </div>
}