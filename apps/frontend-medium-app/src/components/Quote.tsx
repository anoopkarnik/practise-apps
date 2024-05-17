import React from 'react'

export default function Quote() {
  return (
    <div className='bg-slate-200 h-screen flex justify-center items-center flex-col '>
        <div className='flex flex-col justify-center text-left mx-[10%]'>
            <div className='text-4xl font-bold '>
                "Not giving a fuck does not mean being indifferent; it means being comfortable being different"
            </div>
            <div className='max-w-md text-left text-2xl font-semibold mt-4 '>
                Mark Manson
            </div>
            <div className='max-w-md text-left text-xl text-gray-400  '>
               Star Blogger
            </div>
        </div>
    </div>
  )
}
