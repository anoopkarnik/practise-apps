import React from 'react'

export default function ProfileCard({src,name,description}:any) {
  return (
    <div id={name} className='bg-gray-400 border-2  border-[#00253e] rounded-2xl w-[400px] flex flex-col items-center justify-center py-10 shadow-2xl'>
        <img src={src} alt={name} className='rounded-full w-[300px] h-[300px] border-2 border-[#00253e] outline outline-2 outline-offset-2  mb-10'/>
        <div className='text-4xl font-bold mb-4'> {name}</div>
        <div> {description}</div>
    </div>
  )
}
