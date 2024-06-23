import { useEffect, useState } from "react";

import { getPageAction } from "../app/(main)/_actions/get-page";
import useRefresh from "./useRefresh";

const useDocuments = ({userId,parentId=undefined}:{userId:string,parentId:string|undefined}) => {
    const [documents, setDocuments] = useState<any[]>([]);

    useEffect(()=>{
        const fetchData = async () => {
            const res = await getPageAction({userId,parentId});
            setDocuments(res)
        }
        if(userId){
            fetchData()
        }
    },[userId,parentId])
    return {documents,setDocuments}
}

export default useDocuments

