'use server'

import { archiveDocument} from "@repo/prisma-db/repo/document";

export const moveToArchiveAction = async({id}:any) =>{
    const document = await archiveDocument({documentId:id});
    return {data:document,success: "Moved to Archive Successfully"}
} 