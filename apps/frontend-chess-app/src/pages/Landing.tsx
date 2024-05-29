import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.tsx';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full flex items-center justify-center min-h-screen'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 mx-20'>
          <img className='border-4 border-black' src='https://res.cloudinary.com/dcugqfvvg/image/upload/v1713647295/standardboard.1d6f9426_asqzum.png' alt='chessboard'/>
          <div className='flex flex-col items-center justify-center gap-10'>
            <div className='text-[90px] text-white'>Play chess online on the #3 Site!</div>
            <Button onClick={()=> navigate('/game')} content='Play Online' />
          </div>
        </div>
    </div>
  )
}

export default Landing;