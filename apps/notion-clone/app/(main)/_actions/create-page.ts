'use server'

import { createPage } from "@repo/prisma-db/repo/document";

export const createPageAction = async({userId,title,parentId}:any) =>{
    if (!userId){
        return {error: "User not Found"}
    }
    if (!title){
        return {error: "Title not Found"}
    }
    console.log(userId,title,parentId)
    const document = await createPage({ title,userId,parentId})
    return {data:document,success: "Page Created"}
} 