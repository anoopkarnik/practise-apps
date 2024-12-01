import { RotateCcw, Trash } from 'lucide-react'
import React from 'react'
import { restorePageAction } from '../_actions/restore-page'
import { toast } from 'sonner'
import { Dialog,DialogTrigger, DialogContent,DialogHeader,DialogTitle,DialogDescription } from '@repo/ui/components/dialog'
import { deletePageAction } from '../_actions/delete-page'

interface TrashSearchItemProps {
    id: string,
    title: string
}

const TrashSearchItem = ({id,title}:TrashSearchItemProps) => {

    const restorePage = async (e:React.MouseEvent) =>{
        e.preventDefault();
        e.stopPropagation();
        const response:any = await restorePageAction({documentId:id})
        if  (response.success){
            toast.message(response.success)
        }
    }

    const deletePage = async (e:React.MouseEvent) =>{
        e.preventDefault();
        e.stopPropagation();
        const response = await deletePageAction({documentId:id})
        if  (response.success){
            toast.message(response.success)
        }
    }

  return (
    <div className='flex items-center justify-between hover:bg-white/10 cursor-pointer px-2' key={id}>
        <div>{title}</div>
        <div className='flex items-center justify-end'>
            <div className='hover:bg-white/40' onMouseDown={restorePage}>
                <RotateCcw className='w-4 h-4'/>
            </div>
            <div className='hover:bg-white/40'>
                <Dialog>
                    <DialogTrigger>
                        <Trash className='w-4 h-4'/>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you sure?</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your page from our servers.
                        </DialogDescription>
                        <div onClick={deletePage} className='flex justify-end gap-2 mt-4'>
                            <button className='text-sm p-2 px-4 bg-red-500 hover:bg-red-600 rounded-lg'>Delete</button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </div>
  )
}

export default TrashSearchItem