'use server'

import { restoreDocument} from "@repo/prisma-db/repo/document";

export const restorePageAction = async({documentId}:{documentId:string}) =>{
    const documents = await restoreDocument({documentId});
    return documents
} 