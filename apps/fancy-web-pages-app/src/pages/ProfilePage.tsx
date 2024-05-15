import React from 'react'
import ProfileCard from './ProfileCard.tsx'

export default function ProfilePage() {
    const data = [
        {
            name: 'Joe',
            description: '"Joe is a great guy. He is a hard worker and a great team player. He is always willing to help out his colleagues and is a great asset to the team."',
            src: './animal.jpg'
        },
        {
            name: 'Jane',
            description: '"Jane is a great gal. She is a hard worker and a great team player. She is always willing to help out her colleagues and is a great asset to the team."',
            src: './adele.jpg'
        },
        {
            name: 'Jack',
            description: '"Jack is a great guy. He is a hard worker and a great team player. He is always willing to help out his colleagues and is a great asset to the team."',
            src: './jaane.jpg'
        }
    ]
  return (
    <div className='w-full'>
        <div className='sticky top-0'>
            <div className=' bg-[#00253e] text-white text-[100px] w-full'>Our Staff</div>
            <div className=' bg-white flex items-center justify-around text-black text-[50px] w-full '>
                <div className='hover:text-blue-500'><a href='#Joe'>Joe</a></div>
                <div className='hover:text-blue-500'><a href='#Jane'>Jane</a></div>
                <div className='hover:text-blue-500'><a href='#Jack'>Jack</a></div>
            </div>
        </div>
        <div className='bg-gray-300 w-full h-[100vh] text-black flex flex-wrap justify-center items-start p-2 flex-1 gap-10 pt-10'>
            {data.map((item)=>(
                <ProfileCard {...item}/>
            ))}
        </div>
        <div className='fixed bottom-0 bg-black text-white text-[50px] w-full'> &copy;  Acme Co. 2024</div>
    </div>
  )
}
