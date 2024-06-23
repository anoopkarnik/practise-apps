
import {auth} from '@repo/next-auth-v5/auth'
import {redirect} from 'next/navigation'

export default async function Home() {
  
  const session = await auth()
  if (!session){
    redirect('/auth/login')
  }else{
    redirect('/home')
  }
}
