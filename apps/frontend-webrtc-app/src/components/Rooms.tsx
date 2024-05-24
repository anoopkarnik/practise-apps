import React, { } from 'react'
import {  useNavigate } from 'react-router-dom';

const Rooms = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/')
    }
  return (
        <div className='w-full min-h-screen bg-[#f0f8ff] '>
        <div className='flex items-center justify-between bg-black'>
            <div onClick={goToHome} className='text-white text-4xl m-4 cursor-pointer'>Roomers</div>
            <div className='border-2 border-white cursor-pointer m-4 hover:border-violet-400 p-4 text-xl text-white rounded-2xl'> Create Room </div>
        </div>
    </div>
  )
}

export default Rooms