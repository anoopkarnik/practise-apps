'use client'

import { Input } from '@repo/ui/components/input'
import { Popover, PopoverContent, PopoverTrigger } from '@repo/ui/components/popover'
import React, { useEffect, useState } from 'react'
import { getArchivePageAction } from '../_actions/get-archive-pages'
import { useSession } from 'next-auth/react'
import { useDebounce } from '../../../hooks/useDebounce'
import TrashSearchItem from './TrashSearchItem'

interface TrashSearchProps {
    children: React.ReactNode
}

const TrashSearch = ({children}:TrashSearchProps) => {
    const [archivePages, setArchivePages] = useState<any[]>([])
    const [searchText, setSearchText] = useState<string>('')
    const debouncedSearchText = useDebounce(searchText, 300)
    const session = useSession();

    useEffect(() =>{
        const fetchArchivePages = async () =>{
            const userId = session?.data?.user?.id
            if (!userId) return;
            const data = await getArchivePageAction({userId:userId,searchText:debouncedSearchText})
            setArchivePages(data)
        }
        if (debouncedSearchText !== undefined) {
            fetchArchivePages();
          }

    },[debouncedSearchText,session])


  return (
    <Popover>
        <PopoverTrigger asChild>
            {children}
        </PopoverTrigger>
        <PopoverContent className='w-72 z-[99999]'>
            <div>
                <Input placeholder='Search'  onChange={(e)=>{setSearchText(e.target.value)}}/>
            </div>
            <div className='mt-4 ml-2r'>
                {archivePages.map((page) => (
                    <TrashSearchItem key={page.id} id={page.id} title={page.title} />
                ))}
            </div>
        </PopoverContent>
    </Popover>
  )
}

export default TrashSearch