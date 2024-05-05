import React,{ createContext,useState } from "react";

interface UsersContextProps {
    users: any[],
    setUsers: any
}

export const UsersContext = createContext<UsersContextProps |null>(null);

export const UsersProvider = ({children}:any) =>{
    const [users, setUsers] = useState([]);

    return (
        <UsersContext.Provider value={{users, setUsers}}>
            {children}
        </UsersContext.Provider>
    )
}