import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@repo/ui/components/command'
import { useRouter } from 'next/navigation'
import { useSearch } from '../hooks/useSearch';
import { useDebounce } from '../hooks/useDebounce';
import { getPagesAction } from '../app/(main)/_actions/get--pages';
import { Command } from 'lucide-react';
import { Input } from '@repo/ui/components/input';

const Search = () => {
    const search = useSearch()
    const session = useSession();
    const router = useRouter();
    const [pages, setPages] = useState<any[]>([])
    const [searchText, setSearchText] = useState<string>('')
    const debouncedSearchText = useDebounce(searchText, 300)

    useEffect(() =>{
        const fetchPages = async () =>{
            const userId = session?.data?.user?.id
            if (!userId) return;
            const data = await getPagesAction({userId:userId,searchText:debouncedSearchText})
            setPages(data)
        }
        if (debouncedSearchText !== undefined) {
            fetchPages();
          }

    },[debouncedSearchText,session])

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
          if (e.key === "p" && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            search.onToggle();
          }
        }
    
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
      }, [search.onToggle]);
    
      const onSelect = (id: string) => {
        router.push(`/documents/${id}`);
        search.onClose();
      };

  return (
    <CommandDialog open={search.isOpen} onOpenChange={search.onClose}>
        <Input className='m-2 pr-2'  placeholder={`Search ${session?.data?.user?.name}'s Notion`} onChange={(e)=>setSearchText(e.target.value)} />
        <CommandList>
            {pages.length ==0 && <CommandEmpty> No Results Found</CommandEmpty>}
            <CommandGroup className='ml-4 mt-4'>
              {pages.map((page) => (
                <div className='mb-2 hover:bg-white/30 cursor-pointer p-2 rounded-xl' key={page.id} onClick={() => onSelect(page.id)}>
                  {page.title}
                </div>
              ))}
            </CommandGroup>
        </CommandList>

    </CommandDialog>
  )
}

export default Search