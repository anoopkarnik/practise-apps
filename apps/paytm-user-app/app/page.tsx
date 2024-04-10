import React from 'react'
import { AppbarClient } from '../components/AppbarClient'
import { getNextAuthConfig } from '@repo/next-auth/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';


async function page() {
  const NEXT_AUTH_CONFIG = getNextAuthConfig({
    GoogleProviderPresent: process.env.GOOGLE_PROVIDER_PRESENT || "false",
    GitHubProviderPresent: process.env.GITHUB_PROVIDER_PRESENT || "false",
    CredentialsProviderPresent: process.env.CREDENTIALS_PROVIDER_PRESENT || "false",
});

  const session = await getServerSession(NEXT_AUTH_CONFIG as any)
  if (session?.user){
    redirect('/dashboard')
  }
  else{
    redirect('/api/auth/signin')
  }
}

export default page