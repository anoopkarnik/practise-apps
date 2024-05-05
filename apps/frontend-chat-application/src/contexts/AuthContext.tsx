import React,{createContext, useState} from 'react';

interface AuthContextProps {
    currentUser: any,
    setCurrentUser: any
}

export const AuthContext = createContext<AuthContextProps | null> (null);


export const AuthContextProvider = ({children}:any) => {
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
}