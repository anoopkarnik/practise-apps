'use server'

import { deleteDocument} from "@repo/prisma-db/repo/document";

export const deletePageAction = async({documentId}:{documentId:string}) =>{
    await deleteDocument({documentId});
    return {success: "Page Deleted Permanently"}
} 