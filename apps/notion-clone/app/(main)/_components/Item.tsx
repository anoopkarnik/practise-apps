import { cn } from '@repo/ui/utils';
import { ChevronDown, ChevronRight, CirclePlus, File, Icon, LucideIcon, MoreHorizontal, MoreVertical, Trash } from 'lucide-react';
import React from 'react'
import classNames from 'classnames';
import { createPageAction } from '../_actions/create-page';
import { useSession } from 'next-auth/react';
import useDocuments from '../../../hooks/useDocuments';
import { toast } from 'sonner';
import { moveToArchiveAction } from '../_actions/move-to-archive';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@repo/ui/components/dropdown';


interface ItemProps {
    id?: string;
    documentIcon?: string;
    active?: boolean;
    expanded?: boolean;
    isSearch?: boolean;
    level?: number;
    onExpand?: () => void;
    label: string;
    onClick?: () => void;
    icon?: LucideIcon;
}

const Item = ({id,documentIcon,active,expanded,isSearch,level=0,onExpand,label,onClick,icon:Icon}:ItemProps) => {
    const ChevronIcon = expanded ? ChevronDown : ChevronRight;
    const handleExpand = (even: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        even.stopPropagation();
        onExpand?.();
    }
    const session = useSession();
    const userId = session?.data?.user?.id as string;
    const {documents,setDocuments} = useDocuments({userId,parentId:id});

    const onCreate = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
      event.stopPropagation();
      const response = await createPageAction({userId: session?.data?.user?.id, title: 'Untitled Page',parentId:id})
      setDocuments([...documents,response.data])
      if (response.error){
        toast.message(response.error)
      }
      if (response.success){
        toast.message(response.success)
      }
    }

    const moveToArchive = async ( event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
      event.stopPropagation();
      const response = await moveToArchiveAction({id:id})
      if (response.success){
        toast.message(response.success)
      }
    }

  return (
    <div style={{ paddingLeft: `${level * 1 + 0.5}rem` }} 
    onClick={onClick} className={cn('flex group justify-between cursor-pointer hover:bg-black/10 py-1 items-center text-sm',
      active && 'bg-black/20',
    )}>
      <div className='flex items-center '>
          {!!id && 
          <div className='hover:bg-neutral-600 rounded-xl mr-1' onClick={handleExpand}> 
            <ChevronIcon className='w-4 h-4'
          />
          </div>
          }
        {documentIcon ? <div>documentIcon</div>:<File className='w-4 h-4' />}
          <p className='ml-2'>{label}</p>
      </div>
      <div className='flex items-center justify-end'>
        {!!id && 
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div  className='hover:bg-neutral-600 flex items-center justify-center mr-2 p-1 rounded-full opacity-0 group-hover:opacity-100'>
              <MoreVertical className='w-3 h-3 ' />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='z-[99999]'>
            <DropdownMenuItem onClick={moveToArchive}>
              <div className='flex items-center gap-2'>
                <Trash className='w-4 h-4'/>
                <div>Move to Archive</div>
              </div>   
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
}
        {!!id && 
        <div onClick={onCreate} className='hover:bg-neutral-600 flex items-center justify-center mr-2 p-1 rounded-full opacity-0 group-hover:opacity-100'>
          <CirclePlus className='w-3 h-3 ' />
        </div>}
      </div>
    </div>
  )
}

export default Item