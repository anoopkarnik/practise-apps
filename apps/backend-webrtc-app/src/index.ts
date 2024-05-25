import {WebSocketServer, WebSocket} from 'ws';
require('dotenv').config();

const wss = new WebSocketServer({port: Number(process.env.PORT)});

let senderSocket: null | WebSocket = null;
let receiverSocket: null | WebSocket = null;

wss.on('connection', function connection(ws){
    ws.on('error',console.error);
    ws.on('message',function message(data:any){
        const message = JSON.parse(data);
        if (message.type === 'sender'){
            senderSocket = ws;
            console.log('Sender connected');
        } else if (message.type === 'receiver'){
            receiverSocket = ws;
            console.log('Receiver connected');
        } else if (message.type === 'createOffer' && receiverSocket){ 
            receiverSocket.send(JSON.stringify({type: message.type, sdp: message.sdp}));
            console.log('Offer sent');
        } else if (message.type === 'createAnswer' && senderSocket){
            senderSocket.send(JSON.stringify({type: message.type, sdp: message.sdp}));
            console.log('Answer sent');
        } else if (message.type === 'iceCandidate'){
            if (ws === senderSocket && receiverSocket){
                receiverSocket.send(JSON.stringify({type: message.type, candidate: message.candidate}));
            } else if (ws === receiverSocket && senderSocket){
                senderSocket.send(JSON.stringify({type: message.type, candidate: message.candidate}));
            }
        }

    })
})