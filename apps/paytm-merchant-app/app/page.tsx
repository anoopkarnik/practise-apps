'use client'

import { useBalance } from "@repo/recoil-store/balance";
import { Appbar } from "@repo/ui/paytm-app/Appbar";
import { signIn, signOut, useSession} from "next-auth/react";
import { useRouter } from "next/navigation";

function MerchantApp() {
  const balance = useBalance();
  const session = useSession()
  const router = useRouter();
  return (
    <div>
       <Appbar title='Paytm Merchant Clone' onSignin={signIn} onSignout={async ()=>{
        await signOut()
        router.push('/api/auth/signin')
      }} user={session.data?.user} />
       hi there {balance}
  </div>
  )
}

export default MerchantApp;