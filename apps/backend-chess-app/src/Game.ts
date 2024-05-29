import { WebSocket } from "ws";
import { Chess } from "chess.js";
import { INIT_GAME } from "./messages";

export class Game{

    public player1: WebSocket;
    public player2: WebSocket;
    public board: Chess;
    public startTime: Date;


    constructor(player1: WebSocket, player2: WebSocket){
        this.player1 = player1;
        this.player2 = player2;
        this.board = new Chess();
        this.startTime = new Date();
        this.player1.send(JSON.stringify({type: INIT_GAME, payload: {color: 'white'}}))
        this.player2.send(JSON.stringify({type: INIT_GAME, payload: {color: 'black'}}))
    }

    makeMove(socket:WebSocket, move: {from: string, to: string}){
        try{
            console.log(move)
            this.board.move(move);
        }catch(e){
            console.log('invalid move or not your turn')
            return
        }
        if (this.board.isGameOver()){
            this.player1.send(JSON.stringify({type: 'gameOver', payload: {winner: this.board.turn() === 'w' ? 'black' : 'white'}}))
            this.player2.send(JSON.stringify({type: 'gameOver', payload: {winner: this.board.turn() === 'w' ? 'black' : 'white'}}))
        }
        if (this.board.moves().length%2===0){
            this.player1.send(JSON.stringify({type: 'move', move: move}))
            this.player2.send(JSON.stringify({type: 'move', move: move}))
        }
        else{
            this.player2.send(JSON.stringify({type: 'move', move: move}))
            this.player1.send(JSON.stringify({type: 'move', move: move}))
        }

    }

}