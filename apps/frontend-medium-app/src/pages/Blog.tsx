import React from 'react'
import { useParams } from 'react-router-dom'
import { useBlog } from '../hooks/index.ts'
import Avatar from '../components/Avatar.tsx';
import Appbar from '../components/Appbar.tsx';

export default function Blog() {
  const {id} = useParams()
  const {loading,blog}  = useBlog({id});
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className='w-full'>
      <Appbar authorName={blog.author.name} />
      <div className='grid grid-cols-4 lg:grid-cols-5 m-[10%] '>
        <div className='col-span-4 '>
          <div className='text-4xl font-extrabold text-left'>{blog.title}</div>
          <div className='text-slate-500 text-left mb-6'>{new Date().toDateString()}</div>
          <div className='text-left'>{blog.content}</div>
        </div>
        <div className='invisible lg:visible flex flex-col items-start justify-start mx-4'>
          <div className="text-xl mb-6" >Author</div>
          <div className='flex items-center justify-center gap-2'>
            <Avatar name={blog.author.name} size={"6"}/>
            <div className='text-2xl font-bold'>{blog.author.name} </div>
          </div>
        </div>
      </div>
    </div>
  )
}
