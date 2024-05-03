import {createContext,useState} from 'react';

interface SelectedUserContextProps {
    selectedUser: any,
    setSelectedUser: any,
    conversations: any,
    setConversations: any
}


export const SelectedUserContext = createContext <SelectedUserContextProps | null>(null);

export const SelectedUserProvider = ({children}:any) => {
    const [selectedUser, setSelectedUser] = useState({});
    const [conversations, setConversations] = useState([]);
    return (
        <SelectedUserContext.Provider value={{selectedUser,setSelectedUser,conversations,setConversations}}>
            {children}
        </SelectedUserContext.Provider>
    )
}
