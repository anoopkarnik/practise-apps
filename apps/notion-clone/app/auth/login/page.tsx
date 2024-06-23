"use client"

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { signIn} from 'next-auth/react';
import  Quote  from "@repo/ui/notion/Quote";
import LoadingCard from '@repo/ui/notion/LoadingCard';
import LoginCard from '@repo/ui/notion/LoginCard';

export default function page() {
    const router = useRouter();
    const searchParams = useSearchParams()
    const urlError = searchParams.get('error') === "OAuthAccountNotLinked" ?
     "Email already in use with different provider" : ""
    return (
        <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2 '>
            <div className='flex items-center justify-center bg-gradient-to-br from-violet-400/30 to-black/90 dark:bg-gradient-to-br'>
                <Suspense fallback={<LoadingCard/>}>
                    <LoginCard
                        showGithubProvider={true}
                        showGoogleProvider={true}
                        showLinkedinProvider={true}
                        onGithubProviderSubmit={async ()=>{
                            await signIn('github',{callbackUrl: '/'});
                        }}
                        onGoogleProviderSubmit={async ()=>{
                            await signIn('google',{callbackUrl: '/'});
                        }}
                        onLinkedinProviderSubmit={async ()=>{
                            await signIn('linkedin',{callbackUrl: '/'});
                        }}
                        errorMessage={urlError}
                    />
                </Suspense>
            </div>
            <div className='hidden lg:block bg-white'>
            <Quote
                quote = '"Not giving a fuck does not mean being indifferent; it means being comfortable being different"'
                author = "Mark Manson"
                credential = "Star Blogger"
            />
            </div>
        </div>
    )
}