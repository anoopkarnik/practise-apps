import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/avatar";
import { Button } from "@repo/ui/components/button";

interface AppbarProps {
    user?: {
        name?: any;
        image?: any;
    },
    title?: string,
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    title,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex justify-between border-b px-4">
        <div className="text-4xl text-violet-800 flex flex-col justify-center">
            {title}
        </div>
        <div className="flex gap-4 justify-center items-center">
            <Avatar>
                <AvatarImage src={user?.image }/>
                <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}