import { Color, PieceSymbol, Square } from 'chess.js'
import React, { useEffect, useState } from 'react'
import { MOVE } from '../pages/Game.tsx';

interface ChessboardProps {
    square: Square;
    type: PieceSymbol;
    color: Color
}

const Chessboard = ({board,socket,moves,setMoves}:{board:(ChessboardProps | null)[][],socket: WebSocket,moves:any,setMoves:any}) => {
    const [from, setFrom] = useState<null | Square>(null)
    const [to, setTo] = useState<null | Square>(null)

  return (
    <div className='text-white-200'>
        {board.map((row, i) => (
            <div key={i} className='flex'>
                {row.map((square, j) => {
                    const squareRepresentation = String.fromCharCode(97 + (j% 8)) + "" + (8-i) as Square;
                    return (
                        <div onClick={
                            () => {
                                if (!from){
                                    setFrom(squareRepresentation)
                                }
                                else{
                                    console.log({from, squareRepresentation})
                                    socket.send(JSON.stringify({type: MOVE,move: {from:from, to:squareRepresentation}}))
                                    setMoves([...moves, (square?.type != 'p'? square?.type.toUpperCase() : '') + squareRepresentation])
                                    setFrom(null)
                                    setTo(null)
                                }
                            }
                        
                        } key={j} className={`w-[125px] h-[125px] flex justify-center items-center ${(i+j)%2===0? 'bg-green-500' : 'bg-white'} }`}>
                            <div>
                                <img src={`./${square?.color}${square?.type}.png`} alt={''}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        ))}
    </div>
  )
}

export default Chessboard