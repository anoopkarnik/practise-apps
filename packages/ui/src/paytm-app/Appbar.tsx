import { Button } from "../shadcn/ui/button";

interface AppbarProps {
    user?: {
        name?: string | null;
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
        <div className="text-lg flex flex-col justify-center">
            {title}
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}