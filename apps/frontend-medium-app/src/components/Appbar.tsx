import React from 'react'
import Avatar from './Avatar.tsx'
import { useNavigate } from 'react-router-dom'
import { RiLogoutCircleLine } from "react-icons/ri";


export default function Appbar({authorName}: {authorName: string}) {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/blog')
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/signin')
    }

  return (
    <div className="flex items-center justify-between mx-[5%] max-w-[90%] p-4 border-b-2">
        <div className='text-2xl cursor-pointer' onClick={handleNavigate}>Medium</div>
        <div className='flex items-center justify-center gap-4'>
            <div onClick={()=>{navigate('/publish')}} className='p-2 text-white bg-green-800 rounded-2xl cursor-pointer hover:bg-blue-400 px-4'>New</div>
            <Avatar name={authorName} size={"large"}/>
            <div className='cursor-pointer' onClick={handleLogout}>
                <RiLogoutCircleLine size={30}/>
            </div>
        </div>
        
    </div>
  )
}
