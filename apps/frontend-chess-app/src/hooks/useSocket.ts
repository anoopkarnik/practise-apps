import { useEffect, useState } from "react"
import { useUser } from '@repo/recoil-store/user'

const url = import.meta.env.VITE_WS_URL;

export const useSocket = () =>{
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const user = useUser();

    useEffect(()=>{
        if(!user) return;
        const ws = new WebSocket(`${url}?token=${user.token}`);
        ws.onopen = () =>{
            setSocket(ws);
        }
        ws.onclose = () =>{
            setSocket(null);
        }
        return () =>{
            ws.close();
        }
    },[user] )
    return socket
}