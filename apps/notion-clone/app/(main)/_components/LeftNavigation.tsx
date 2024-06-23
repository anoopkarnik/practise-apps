'use client'
import { cn } from '@repo/ui/utils'
import { Book, CirclePlus, MenuIcon, Search, Settings, Trash } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import React, { ElementRef, useEffect, useRef, useState } from 'react'
import { BiChevronsLeft } from 'react-icons/bi'
import { useMediaQuery } from 'usehooks-ts'
import Profile from './Profile'
import Item from './Item'
import { getPageAction } from '../_actions/get-page'
import useDocuments from '../../../hooks/useDocuments'
import { createPageAction } from '../_actions/create-page'
import { toast } from 'sonner'
import DocumentList from './DocumentList'
import useRefresh from '../../../hooks/useRefresh'
import TrashSearch from './TrashSearch'
import { useSearch } from '../../../hooks/useSearch'

const LeftNavigation = () => {

    const pathname = usePathname();
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isResizingRef = useRef(false);
    const sidebarRef = useRef<ElementRef<"div">>(null);
    const navbarRef = useRef<ElementRef<"div">>(null);
    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(isMobile);
    const session = useSession();
    const userId = session?.data?.user?.id as string;
    const search = useSearch();
    
    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        isResizingRef.current = true;
        document.addEventListener("mousemove",handleMouseMove)
        document.addEventListener("mouseup",handleMouseUp)
    }

    const handleMouseMove = (e:MouseEvent) =>{
        if (!isResizingRef.current) return;
        let newWidth = e.clientX;
        if (newWidth< 240) newWidth = 240;
        if (newWidth > 480) newWidth = 480;
        if (sidebarRef.current && navbarRef.current){
            sidebarRef.current.style.width = `${newWidth}px`;
            navbarRef.current.style.setProperty('left',`${newWidth}px`)
            navbarRef.current.style.setProperty('width',`calc(100% - ${newWidth}px)`)
        }
    }

    const handleMouseUp = () =>{
        isResizingRef.current = false;
        document.removeEventListener("mousemove",handleMouseMove)
        document.removeEventListener("mouseup",handleMouseUp)
    }

    const resetWidth = () =>{
        if (sidebarRef.current && navbarRef.current){
            setIsCollapsed(false);
            setIsResetting(true);
            sidebarRef.current.style.width = isMobile ? "100%" : "240px";
            navbarRef.current.style.setProperty(
                'width',
                isMobile ? "0" : "calc(100% - 240px)"
            )
            navbarRef.current.style.setProperty('left',isMobile ? "100%" : "240px")
        }
        setTimeout(()=>{
            setIsResetting(false);
        })
    }

    const collapse =() =>{
        if (sidebarRef.current && navbarRef.current){
            setIsCollapsed(true);
            setIsResetting(true);
            sidebarRef.current.style.width = "0";
            navbarRef.current.style.setProperty('width','100%')
            navbarRef.current.style.setProperty('left','0')
            setTimeout(()=>{
                setIsResetting(false);
            })
        }
    }

    useEffect(()=>{
        if (isMobile){
            collapse();
        }else{  
            resetWidth();
        }
    
    },[isMobile])

    useEffect(()=>{
        if (isMobile){
            collapse();
        }
    },[isMobile,pathname])
    
    const {documents,setDocuments} = useDocuments({userId,parentId:undefined});

    const onCreatePage = async () => {
        const response = await createPageAction({userId: session?.data?.user?.id, title: 'Untitled Page'})
        setDocuments([...documents,response.data])
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
    <>
        <div ref={sidebarRef} className={cn('group/sidebar min-h-screen bg-secondary overflow-y-auto relative w-60 flex flex-col   z-[99999]',
            isResetting && "transition-all ease-in-out duration-300",
            isMobile && "w-0"
        )}>
            <div onClick={collapse} className={cn('rounded-lg hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition cursor-pointer',
                isMobile && "opacity-100",
            )}>
                <BiChevronsLeft className='h-6 w-6'/>
            </div>
            <div className='mt-2'>
                <Profile/>
            </div>
            <div className='mt-4'>
                <Item label='Search' key='1' icon={Search} onClick={search.onOpen}/>
                <Item label='Settings' key='2' icon={Settings} />
                <Item label='New Root Page' key='3' icon={CirclePlus} onClick={onCreatePage}/>
            </div>
            <div className='mt-4 border-y-2 border-white/20 py-4'>
                <DocumentList/>
            </div>
            <TrashSearch>
                <div className='mt-4 flex items-center ml-2 gap-2 cursor-pointer hover:bg-black/10 text-sm py-2 '>
                    <Trash className='w-4 h-4'/> 
                    <div>Archive</div>
                </div>
            </TrashSearch>
            <div onMouseDown={handleMouseDown} onClick={resetWidth}
            className='opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0'/>
        </div>
        <div ref={navbarRef} className={cn('absolute top-0 z-[9999] left-60 w-[calc(100%-240px)] ',
            isResetting && "transition-all ease-in-out duration-300",
            isMobile && "left-[0px] w-full"
        )}>
            <nav className='bg-transparent px-3 py-2 w-full '>
                {isCollapsed && <MenuIcon onClick={resetWidth} role="button" className='text-white h-6 w-6'/>}
            </nav>

        </div>
    </>
  )
}

export default LeftNavigation