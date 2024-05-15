import React,{ useState} from 'react'
import { HiMenuAlt3 } from "react-icons/hi";

export default function AnimatedNavBar() {
    const [showMenu,setShowMenu] = useState(false)

  return (
    <div className='bg-white max-w-full overflow-hidden'>
        <div id='navbar' className=' bg-zinc-700 font-serif' onMouseEnter={()=>setShowMenu(true)} onMouseLeave={()=>setShowMenu(false)}>
            <div className='flex items-center justify-between flex-wrap text-white text-4xl py-4'>
                <div>Acme Co.</div>
                <div className='flex items-center justify-center overflow-hidden'>
                    <div className={`absolute top-4 right-4 transition-all duration-[1s] ${showMenu ? 'opacity-0 rotate-[720deg]':'opacity-100'}`}><HiMenuAlt3/></div>
                    <div className={`absolute top-4 right-4 transition-all duration-[1s] ${showMenu ? 'opacity-100':'opacity-0 rotate-[720deg]'}`}>X</div>
                </div>
            </div>
            <div className={`transition-all duration-[1s] ${showMenu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className='border-t-2 border-white py-4  hover:cursor-pointer'>
                    <div className='transition-transform duration-300 transform hover:scale-150 text-center text-white text-3xl'>Products</div>
                </div>
                <div className='border-t-2 border-white py-4  hover:cursor-pointer'>
                    <div className='transition-transform duration-300 transform hover:scale-150 text-center text-white text-3xl'>Forums</div>
                </div>
                <div className='border-t-2 border-white py-4  hover:cursor-pointer'>
                    <div className='transition-transform duration-300 transform hover:scale-150 text-center text-white text-3xl'>About</div>
                </div>
                <div className='border-t-2 border-white py-4  hover:cursor-pointer'>
                    <div className='transition-transform duration-300 transform hover:scale-150 text-center text-white text-3xl'>Contact</div>
                </div>
            </div>
        </div>
    </div>
  )
}
