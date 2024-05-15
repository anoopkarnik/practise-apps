import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }

  return (
    <div onClick={handleClick} className='fixed z-10 bottom-0 left-0 bg-black rounded-full text-white p-6 m-6 hover:bg-violet-500 cursor-pointer'>
        HOME
    </div>
  )
}
