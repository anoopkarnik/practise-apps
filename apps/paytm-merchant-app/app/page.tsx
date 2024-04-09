'use client'

import { useBalance } from "@repo/recoil-store/balance";
import { Appbar } from "@repo/ui/paytm-app/Appbar";
import { signIn, signOut, useSession} from "next-auth/react";


export default function() {
  const balance = useBalance();
  const session = useSession()
  return (
    <div>
      <Appbar title='Paytm Merchant Clone' onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      hi there {balance}
  </div>
)}