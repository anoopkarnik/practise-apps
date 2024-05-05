import React,{ createContext, useContext, useEffect,useState } from "react";
import { AuthContext } from "./AuthContext.jsx";
import io from "socket.io-client";

interface SocketContextProps {
    socket: any,
    onlineUsers: any[],
    setOnlineUsers: any
}

export const SocketContext = createContext <SocketContextProps | null>(null);

export const SocketProvider = ({children}:any) => {
    const [socket, setSocket] = useState<any>(null); 
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { currentUser } = useContext(AuthContext) || {};

    useEffect(() => {
        if (currentUser) {
            const socket = io('http://localhost:3004', {
                query: {
                    userId: currentUser._id,
                }
            });
            setSocket(socket);
            socket.on("getOnlineUsers", (users) => {
                console.log(users);
                setOnlineUsers(users);
            });
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
        return () => {
            if (socket) {
                socket.close();
            }
        };
    }, [currentUser]);;
    return (
        <SocketContext.Provider value={{socket,onlineUsers,setOnlineUsers}}>
            {children}
        </SocketContext.Provider>
    );
};