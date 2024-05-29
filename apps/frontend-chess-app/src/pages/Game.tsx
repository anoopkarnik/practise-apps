import React, { useEffect, useState } from 'react'
import { useSocket } from '../hooks/useSocket.ts';
import Button from '../components/Button.tsx';
import Chessboard from '../components/Chessboard.tsx';

export const INIT_GAME = 'init_game';
export const MOVE = 'move';
export const GAME_OVER = 'game_over';
import { Chess } from 'chess.js';

const Game = () => {
    const socket = useSocket();
    const [chess,setChess] = useState(new Chess());
    const [board, setBoard] = useState(chess.board())
    const [moves, setMoves] = useState([])
    useEffect(()=>{
        if (!socket) return;
        socket.onmessage = (event) =>{
            const message = JSON.parse(event.data);
            console.log(message);
            switch (message.type) {
                case INIT_GAME:
                    setChess(new Chess());
                    setBoard(chess.board());
                    console.log('Game Started');
                    break;
                case MOVE:
                    const move = message.move;
                    chess.move(move);
                    setBoard(chess.board());
                    console.log('Move made');
                    break;
                case GAME_OVER:
                    console.log('Game Over');
                    break;
                default:
                    break;
            }
        }
    },[socket])
    if (!socket) return <div>Conneting...</div>
  return (
    <div className='flex justify-center w-full  min-h-screen'>
        <div className='p-8  min-h-screen w-full'>
            <div className='grid grid-cols-6 w-full h-[98%] gap-10 '>
                <div className='col-span-4 w-full flex justify-center'>
                    <Chessboard moves={moves} setMoves={setMoves} socket={socket} board={board}/>
                </div>
                <div className='col-span-2 bg-gray-400 w-full flex flex-col py-10 gap-10'>
                    <Button onClick={()=>{
                        socket.send(JSON.stringify({
                            type: INIT_GAME
                        }))
                    }} content='Start Game' />
                    {/* {
                        moves.map((move,i) => (
                            <div className='text-xl flex items-start justify-start mx-[10%]' key={i}>
                               <div className='font-bold mr-4'>{i+1}</div>
                                <div>{move.from} - {move.to}</div>
                            </div>
                        ))
                    } */}
                </div>
          </div>
        </div>
    </div>
  )
}

export default Game