'use client'

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import LeftNavigation from "../_components/LeftNavigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = useSession();
    if (!session) {
        return redirect("/auth/login")
    }
  return (
    <div className=" min-h-screen flex">
        <LeftNavigation/>
        <main className="flex-11 h-full w-full overflow-y-auto">
            {children}
        </main>
    </div>
  );
}
