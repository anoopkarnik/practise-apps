import React from 'react'

export default function LandingPage2() {
  return (
    <div className='mx-20 my-4'>
        <div id='navbar' className='flex items-center justify-between text-xl font-bold'>
            <div>Ilya Miskow</div>
            <div>Visual & product designer <br/> based in Estoria</div>
            <div className='flex items-center justify-around gap-10'>
                <div className='hover:bg-black hover:cursor-pointer hover:text-white p-4 rounded-3xl'>Work</div>
                <div className='hover:bg-black hover:cursor-pointer hover:text-white p-4 rounded-3xl'>About</div>
                <div className='hover:bg-black hover:cursor-pointer hover:text-white p-4 rounded-3xl'>Store</div>
                <div className='hover:bg-black hover:cursor-pointer hover:text-white p-4 rounded-3xl'>Let's Chat</div>
            </div>
        </div>
        <div id ='content' className='mt-40 leading-snug'>
            <div className='text-xl font-bold text-left mb-[-40px]'>Hello! I'm Ilya.</div>
            <div className='text-[170px] leading-tight  text-left'>A multidisciplinary designer focusing on digital experiences.</div>
        </div>
    </div>
  )
}
