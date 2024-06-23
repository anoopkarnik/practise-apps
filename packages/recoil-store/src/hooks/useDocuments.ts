import { useRecoilValue } from "recoil"
import { documentsAtom } from "../atoms/documents"

export const useDocuments = () => {
    const value = useRecoilValue(documentsAtom);
    return value;
}   