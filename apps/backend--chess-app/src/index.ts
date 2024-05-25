import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3013 });        

wss.on('connection',(ws)=>{
    ws.on('error',console.error);
    ws.on('message', function message(data){
        console.log(data);
        ws.send(data);
    })
})