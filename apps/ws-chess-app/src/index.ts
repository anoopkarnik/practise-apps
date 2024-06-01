import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";
import url from 'url';
import {extractUserId} from "@repo/passport-auth/auth";
import { User } from "./SocketManager";

const wss = new WebSocketServer({ port: Number(process.env.WS_PORT) || 3015 });

const gameManager = new GameManager();  

wss.on('connection',(ws,req)=>{
    // @ts-ignore
    const token: string = url.parse(req.url, true).query.token
    const userId = extractUserId(token);
    gameManager.addUser(new User(ws,userId))
    ws.on('close',()=>{
        gameManager.removeUser(ws);
    });
})