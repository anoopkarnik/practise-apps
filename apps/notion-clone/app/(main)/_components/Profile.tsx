'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/components/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@repo/ui/components/dropdown';
import { ChevronsLeftRight, LogOutIcon } from 'lucide-react';
import { useSession,signOut } from 'next-auth/react'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'

const Profile = () => {
    const session = useSession();
    const router = useRouter();

    const onLogout = async () =>{
        await signOut({redirect: false});
        router.push('/auth/login')
    }

  return (
    <>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='w-full flex items-center justify-between hover:bg-white/10'>
                    <div className='flex items-center ml-2'>
                        <Avatar className='w-4 h-4'>
                            <AvatarImage src={session?.data?.user?.image || ''} alt={session?.data?.user?.name || ''} />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <p className='ml-2 line-clamp-1'>{session?.data?.user?.name}' Notion</p>
                    </div>
                    <ChevronsLeftRight className='rotate-90 mr-10 w-4 h-4'/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56 z-[999999]'>
                <DropdownMenuLabel><div>{session?.data?.user?.email}</div></DropdownMenuLabel>
                <DropdownMenuLabel>
                    <div className='flex items-center ml-2'>
                        <Avatar className='w-10 h-10'>
                            <AvatarImage src={session?.data?.user?.image || ''} alt={session?.data?.user?.name || ''} />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <p className='ml-2 line-clamp-1'>{session?.data?.user?.name}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={onLogout}>
                        <div className='flex items-center '>
                            <LogOutIcon className='w-4 h-4 mr-2'/>
                            <p>Logout</p>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>

    </>
  )
}

export default Profile