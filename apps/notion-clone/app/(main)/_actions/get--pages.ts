'use server'

import { getPages } from "@repo/prisma-db/repo/document";

export const getPagesAction = async({userId,searchText=''}:{userId:string, searchText:string }) =>{
    const documents = await getPages({userId,searchText});
    return documents
} 