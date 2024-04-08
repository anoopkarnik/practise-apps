'use client'
import { useSession,signIn,signOut } from "next-auth/react";
import { Button } from "@repo/ui/components/button";

export const Appbar = () => {
  const session = useSession();
  if (session && session.data && session.data.user){
    return (
      <div className="w-full flex item-center justify-between p-2 text-white"> 
        <h1 className="text-white text-2xl ">Turborepo Boilerplate</h1>
          <div className="flex gap-4">
          <div >
                    {session.data.user.image ?
                        <img src={session.data.user.image ?? ""} alt="" className=" h-12 w-12 rounded-full"/>
                        : <div className="w-12 h-12 rounded-full bg-violet-700 text-white flex items-center justify-center">{session.data.user.name ?session.data.user.name[0] : session.data.user?.email?.charAt(0)   }</div>}
                </div>
                <Button onClick={() => signOut()}>Sign out</Button> 
          </div>
      </div>
    );
  }
  else{
    return (
      <div className="w-full flex item-center justify-between p-2 text-white"> 
        <h1 className="text-2xl ">Turborepo Boilerplate</h1>
          <div className="flex gap-4">
            <Button onClick={() => signIn()}>Sign in</Button>
          </div>
      </div>
    );
  }
  
}
