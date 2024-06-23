'use server'

import { getSidebar } from "@repo/prisma-db/repo/document";

export const getPageAction = async({userId,parentId=undefined}:{userId:string, parentId:string | undefined}) =>{
    const documents = await getSidebar({userId,parentId});
    return documents
} 