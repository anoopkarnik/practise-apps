import React from 'react'
import { HiMenuAlt3 } from "react-icons/hi";


export default function LandingPage3() {
  return (
    <div className='w-full '>
        <div id='navbar' className='flex items-center justify-between my-10 mx-10'>
            <div className='flex items-center justify-center text-lg'>
                <div className='rounded-2xl p-2 border-2 border-black'>Menu</div>
                <div className='rounded-2xl p-3 border-2 border-black'><HiMenuAlt3/></div>
            </div>
            <div className='text-2xl'>DENTYTECH</div>
            <div className='flex items-center justify-between gap-2 text-xl font-bold'>
                <div className='rounded-2xl p-2 border-2 border-black bg-gray-500'>Login</div>
                <div className='rounded-2xl p-2 border-2 border-black bg-red-600 text-white'>Sign Up</div>
            </div>
        </div>
        <div className='text-[250px] absolute top-[50%] left-[50%]  transform -translate-x-1/2 -translate-y-1/2'>
            OUR ADVANTAGES
        </div>
        <img className='z-40 object-cover w-[370px] h-[420px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ' src="https://media.istockphoto.com/id/1168369629/photo/happy-smiling-african-american-child-girl-yellow-background.jpg?s=612x612&w=0&k=20&c=qNP1LnRN6n_pGDBkD3axUdh1V1R53pdWWymHAhgNZag=" alt="not found"/>
        <img className='z-30 object-cover w-[370px] h-[420px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 -rotate-10' src="https://media.istockphoto.com/id/846730696/photo/portrait-teenager.jpg?s=1024x1024&w=is&k=20&c=lpu_mbymDu-ihFay4xJ8uCQSvk_Q0oNoNW_DGuWzOWk=" alt="not found"/>
        <img className='z-20 object-cover w-[370px] h-[420px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 -rotate-20' src="https://media.istockphoto.com/id/1049768416/photo/content-trendy-cheerful-nice-cute-adorable-lovely-attractive-brunette-girl-with-wavy-hair-in.jpg?s=2048x2048&w=is&k=20&c=AcjkP9hPWtMEIPGX2J1JqJbZ2vJLTemWiRQTWm90D2A=" alt="not found"/>
        <img className='z-10 object-cover w-[370px] h-[420px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 -rotate-30' src="https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706745600&semt=ais" alt="not found"/>
        <div id='footer' className='text-left font-bold absolute top-[85%] mx-10'>
            Your Smile Our Passion
        </div>
    </div>
  )
}
