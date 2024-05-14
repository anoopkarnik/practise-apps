import React from 'react'

export default function LandingPage1() {
  return (
    <div><div id="nav" className='w-full fixed flex items-center justify-end p-6 px-10 gap-4 m'>
    <div className='bg-black text-white p-2 rounded-2xl'>
      Menu
    </div>
    <div className='bg-black text-white p-2 rounded-2xl'>
      Profile
    </div>
  </div>
  <div id="intro" className='py-10'>
    <div className='w-full px-20 font-black '>
      <div className='flex text-[140px] items-center leading-tight tracking-tighter'>
        Anoop Karnik Dasika <br/> Full Stack Developer
      </div>
      <div className='flex items-center justify-between text-xl'>
        <div>(Hyderabad, India)</div>
        <div>Scroll Down</div>
      </div>
    </div>
  </div>
  <div id='hero-image' className='my-10'>
  </div>
  <div id='content mx-10'>
    <div id='about' className='h-[500px] flex text-4xl my-4'>
      <div className='w-1/2  border-r-2 border-black px-2 text-[50px] leading-normal'>
          I am a Full Stack Developer with a passion for creating beautiful and functional web applications.
           I have experience with a variety of technologies including React, Node.js, and MongoDB. 
           I am always looking to learn new things and improve my skills.
      </div>
      <div className='w-1/2 text-4xl font-bold flex px-4'>
        (About Me)
      </div>
    </div>
    <div id='work' className='border-y-2 border-black my-4 mx-10 flex'>
      <div className='w-1/3 border-r-2 border-black my-4  text-3xl font-bold'>
        (What I do)
      </div>
      <div className='w-2/3 px-10 py-4 '>
        <div className='my-6 py-10 border-b-2 border-black mx-6 flex'>
          <div className='w-1/2 mx-6 border-r-2 border-black '>
            <div className='text-4xl font-bold pb-2 text-left'>Digital Design</div>
            <div className='text-left' >I create stunning digital designs that engae and inspire your customers. I also specialize
              in e-commerce and app design.
            </div>
          </div>
          <div className='w-1/2 border-black'>
            <div className='text-4xl font-bold pb-2 text-left '>Art Direction</div>
            <div className='text-left'> I have a keen eye for detail and a passion for creating 
             visually stunnign designs. I have worked with some of the biggest brands in the world to create
             award-winning campaigns.
            </div>
          </div>
        </div>
        <div className='my-6   border-black mx-6 flex'>
          <div className='w-1/2 mx-6 border-r-2 border-black '>
            <div className='text-4xl font-bold pb-2 text-left'>Interactive Design</div>
            <div className='text-left' >I create stunning digital designs that engae and inspire your customers. I also specialize
              in e-commerce and app design.
            </div>
          </div>
          <div className='w-1/2 border-black'>
            <div className='text-4xl font-bold pb-2 text-left '>Motion Design</div>
            <div className='text-left'>I have a keen eye for detail and a passion for creating 
             visually stunnign designs. I have worked with some of the biggest brands in the world to create
             award-winning campaigns.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}
