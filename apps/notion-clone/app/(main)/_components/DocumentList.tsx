'use client'

import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useDocuments from '../../../hooks/useDocuments'
import Item from './Item'
import { Book, FileIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import ItemSkeleton from './ItemSkeleton'
import classNames from 'classnames'
import exp from 'constants'
import { getPageAction } from '../_actions/get-page'
import { cn } from '@repo/ui/utils'

interface DocumentListProps {
    parentId?: string,
    level?: number,
    documents?:any[]
}

const DocumentList = ({parentId,level=0}:DocumentListProps) => {
    const params = useParams();
    const router = useRouter();
    const [expanded,setExpanded] = useState<Record<string,boolean>>({})
    const session = useSession();
    const userId = session?.data?.user?.id as string;

    const onExpand = (documentId: string) =>{
        setExpanded((prev) => ({...prev,[documentId]:!prev[documentId]}))
    }

    const onRedirect = (documentId: string) =>{
        router.push(`/home/${documentId}`)
    }
    
    const {documents,setDocuments} = useDocuments({userId,parentId});


    if (documents === undefined) {
        return (
            <>
                <ItemSkeleton level={level} />
                {level ===0 && (
                    <>
                        <ItemSkeleton level={level} />
                        <ItemSkeleton level={level} />
                    </>
                )}
            </>
        )
    }
    if (documents.length === 0 && level!=0) {
        return (
            <div
            style={{ paddingLeft: `${level * 1 + 0.1}rem` }}
            className={cn(
                'text-sm hidden font-medium text-muted-foreground/80',
                expanded && 'block',
            )}
          >
            No Pages Found
          </div>
        );
      }

  return (
    <>
        { documents.map((doc:any)=>(
            <>
            <Item key={doc?.id} id={doc?.id} label={doc?.title} icon={FileIcon} documentIcon={doc?.icon} active={params.documentId === doc.id} 
            level={level} onExpand={()=>onExpand(doc.id)} expanded={expanded[doc.id]} onClick={() => onRedirect(doc.id)}/>
            {expanded[doc.id] &&
                <DocumentList key={doc?.id} parentId={doc.id} level={level+1}/>
            }

            </>
        ))}

    </>
  )
}

export default DocumentList