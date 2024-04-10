'use client'

import { Appbar } from "@repo/ui/paytm-app/Appbar";
import { signIn, signOut, useSession} from "next-auth/react";
import { useRouter } from "next/navigation";

export function AppbarClient() {
  const session = useSession()
  const router = useRouter();

  return (
    <div>
      <Appbar title='Paytm User Clone' onSignin={signIn} onSignout={async ()=>{
        await signOut()
        router.push('/api/auth/signin')
      }} user={session.data?.user} />
   </div>
  );
}
