'use server'

import { getArchivePages } from "@repo/prisma-db/repo/document";

export const getArchivePageAction = async({userId,searchText=''}:{userId:string, searchText:string }) =>{
    const documents = await getArchivePages({userId,searchText});
    return documents
} 