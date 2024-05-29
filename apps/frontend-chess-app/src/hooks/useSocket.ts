import { useEffect, useState } from "react"

const url = import.meta.env.VITE_WS_URL;

export const useSocket = () =>{
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(()=>{
        const ws = new WebSocket(url);
        ws.onopen = () =>{
            setSocket(ws);
        }
        ws.onclose = () =>{
            setSocket(null);
        }
        return () =>{
            ws.close();
        }
    },[] )
    return socket
}