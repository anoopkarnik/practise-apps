import React from 'react';
import Avatar from './Avatar.tsx';
import { useNavigate } from 'react-router-dom';

interface BlogCardProps {
    key: string;
    id: string;
    title: string;
    authorName: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({id,title,authorName,content,publishedDate}: BlogCardProps) => {

    const navigate = useNavigate();
    const handleNavigate = ({id}) => {
        navigate(`/blog/${id}`);
    }

    return(
        <div className='flex flex-col border-[1px] p-4 w-[80%] lg:w-[40%] ' onClick={()=>{handleNavigate({id})}}>
            <div className='flex jusitfy-center items-center mb-1'>
                <div className='flex flex-col justify-center items-center mr-2'>
                    <Avatar name={authorName} size={"small"}/>
                </div>
                <div className='flex justify-center items-center'>{authorName[0].toUpperCase() + authorName.slice(1).split(' ')[0]} </div>
                <div className='flex items-center justify-center rounded-full bg-gray-500 w-1 h-1 ml-2'></div>
                <div className='font-extralight pl-2 text-sm flex justify-center items-center'> {publishedDate}  </div> 
            </div>
            <div className='text-left font-extrabold text-xl'>
                {title}
            </div>
            <div className='text-left text-md font-light'>
                {content.slice(0,100)}...
            </div>
            <div className='text-left font-extralight text-xs mt-4'>
                {Math.ceil(content.length/100)  + "min read"}
            </div>
        </div>
    )
}
