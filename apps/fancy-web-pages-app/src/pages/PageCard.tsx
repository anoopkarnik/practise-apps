import React from 'react'
import { Card,CardTitle, CardContent } from "@repo/ui/components/card"
import { useNavigate } from 'react-router-dom'

export default function PageCard({title,image,link,description}:any) {
  const navigate = useNavigate()
  
  function handleClick(){
    navigate(link)
  }
  return (
    <Card onClick={handleClick} className="my-4 p-4 border flex flex-col gap-4 w-full hover:bg-violet-200 cursor-pointer">
        <CardTitle className='font-black text-2xl'>{title}</CardTitle>
        <CardContent className="p-4 flex flex-col gap-4 w-full">
            <div className="flex justify-between pb-2 gap-4 ">
                <img className=" w-full h-full hover:scale-150 object-cover overflow-auto  transition-transform duration-300" src={image} alt="No Picture"/>
                <div className='text-left'>
                    {description}
                </div>
            </div>
        </CardContent>
    </Card>
  )
}
