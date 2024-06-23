"use client"

import { Button } from '@repo/ui/components/button';
import { PlusCircle} from 'lucide-react';
import { useSession } from 'next-auth/react'
import React from 'react'
import { createPage } from '@repo/prisma-db/repo/document'
import { toast } from 'sonner';
import { createPageAction } from '../_actions/create-page';
import useDocuments from '../../../hooks/useDocuments';
import Search from '../../../components/Search';
const page = () => {
  const session = useSession();
  const userId = session?.data?.user?.id as string;
  const {documents,setDocuments} = useDocuments({userId,parentId:undefined});

  const onCreatePage = async () => {
    const response = await createPageAction({userId: session?.data?.user?.id, title: 'Untitled Page'})
  
    setDocuments([...documents,response])
    if (response.error){
      toast.message(response.error)
    }
    if (response.success){
      toast.message(response.success)
    }
    // toast.promise(promise, {
    //   loading: 'Creating Page...',
    //   success: 'Page Created',
    //   error: 'Failed to Create Page'
    // })
  }
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center space-y-4'>
      <Search/>
      <h2 className='text-xl font-bold'>Welcome to {session?.data?.user?.name} &apos;s Workspace </h2>
      <Button onClick={onCreatePage} variant='default' className='p-2 text-center flex items-center justify-center gap-2 px-4'>
        <PlusCircle size={24} />
         <p className=''>Create Root Page</p>
      </Button>
    </div>
  )
}

export default page