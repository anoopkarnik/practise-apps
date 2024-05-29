import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";
require('dotenv').config();

const wss = new WebSocketServer({ port: Number(process.env.WS_PORT) });

const gameManager = new GameManager();  

wss.on('connection',(ws)=>{
    gameManager.addUser(ws);
    ws.on('disconnect',()=>{
        gameManager.removeUser(ws);
    });
})