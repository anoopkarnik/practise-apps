'use client'

import { Appbar } from "@repo/ui/paytm-app/Appbar";
import { signIn, signOut, useSession} from "next-auth/react";

export default function Home() {
  const session = useSession()

  return (
    <div>
      <Appbar title='Paytm User Clone' onSignin={signIn} onSignout={signOut} user={session.data?.user} />
   </div>
  );
}
