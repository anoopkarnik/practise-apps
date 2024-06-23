import db from '@repo/prisma-db/client';

interface DocumentProps {
    userId: string;
    title: string;
    parentId?: string;
    isArchived?: boolean;
    isPublished?: boolean;

}

export const createPage =  async ({userId, title,parentId=undefined,isArchived,isPublished}: DocumentProps) => {
    try{
        console.log(userId,title)
        const document =  await db.documents.create({
            data: {
                title,
                userId,
                parentId
            }
        });
        console.log(document);
        return document;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}


export const getSidebar = async ({userId,parentId}:{userId:string, parentId:string |undefined}) =>{
    const documents = await db.documents.findMany({
        where:{
            parentId,
            userId,
            isArchived:false
        },
        orderBy:{
            createdAt: 'desc'
        }
    });
    return documents;
}

export const archiveDocument = async ( {documentId}:{documentId:string}) => {
    if (!documentId){
        return null;
    }
    await db.documents.update({
        where:{id:documentId},
        data:{isArchived:true}
    });
    const document = await db.documents.findFirst({
        where:{id:documentId},
        include:{children:true}
    });

    if (!document){
        return null;
    }
    for ( const child of document.children ){
        archiveDocument({documentId:child.id})
    }
    return null;
}

export const restoreDocument = async ( {documentId}:{documentId:string}) => {
    if (!documentId){
        return null;
    }
    await db.documents.update({
        where:{id:documentId},
        data:{isArchived:false}
    });
    const document = await db.documents.findFirst({
        where:{id:documentId},
        include:{children:true}
    });

    if (!document){
        return null;
    }
    for ( const child of document.children ){
        restoreDocument({documentId:child.id})
    }
    return null;
}

export const deleteDocument = async ( {documentId}:{documentId:string}) => {
    if (!documentId){
        return null;
    }
    await db.documents.delete({
        where:{id:documentId}
    });
    
    return null;
}

export const getArchivePages = async ({userId,searchText=''}:{userId:string, searchText:string }) =>{
    const documents = await db.documents.findMany({
        where:{
            userId,
            isArchived:true,
            title:{
                contains:searchText
            }
        },
        orderBy:{
            updatedAt: 'desc'
        }
    });
    return documents;
}

export const getPages = async ({userId,searchText=''}:{userId:string, searchText:string }) =>{
    const documents = await db.documents.findMany({
        where:{
            userId,
            isArchived:false,
            title:{
                contains:searchText
            }
        },
        orderBy:{
            updatedAt: 'desc'
        }
    });
    return documents;
}