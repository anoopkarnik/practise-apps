
import React from 'react'

export default function PositionPractise() {
  return (
    <div className='bg-white w-full'>
        <div className='fixed top-1/2 bg-blue-800 text-white text-2xl rounded-xl p-2 z-10'>
            <div>Button</div>
        </div>
        <div id="one" className='w-full h-[100vh]'>
            <div className='bg-blue-300 text-[100px] text-white sticky top-0'>Header One</div>
            <div className='text-left'>One</div>
            <div className=''></div>
        </div>
        <div id="two"  className='w-full h-[100vh]'>
            <div  className='bg-red-300 text-[100px] text-white   sticky top-0' >Header Two</div>
            <div className='text-left'>Two</div>
        </div>
        <div id="three" className='w-full h-[100vh]'>
            <div  className='bg-green-300 text-[100px] text-white  sticky top-0 '>Header Three</div>
            <div className='text-left'>Three</div>
        </div>
        <div className=' fixed bottom-0 w-full flex items-center justify-center gap-4 text-4xl bg-black text-white p-4'>
            <div className='hover:text-violet-400'><a href="#one">One</a></div>
            <div className='hover:text-violet-400'><a href="#two">Two</a></div>
            <div className='hover:text-violet-400'><a href="#three">Three</a></div>
        </div>
    </div>
  )
}
