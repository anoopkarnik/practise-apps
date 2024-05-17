import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useBlog } from '../hooks/index.ts'
import Avatar from '../components/Avatar.tsx';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Blog() {
  const {id} = useParams()
  const {loading,blog}  = useBlog({id});
  const user = localStorage.getItem('user');
  const name = JSON.parse(user).name;
  const navigate = useNavigate();

  function onDeletePost() {
    axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`,{
      headers: {
        Authorization:  `Bearer ${JSON.parse(user).jwt}`
      }
    })
    navigate('/blog')
  }

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className='w-full'>
      <div className='grid grid-cols-4 lg:grid-cols-5 m-[10%] '>
        <div className='col-span-4 '>
          <div className=' flex justify-start items-center'>
            <div className='text-4xl font-extrabold text-left'>{blog.title}</div>
            {blog.author.name === name && <div onClick={onDeletePost} className='p-2 text-white bg-green-800 rounded-2xl cursor-pointer hover:bg-blue-400 px-4 mx-4'>Delete Post</div>}
            {/* {blog.author.name === name && <div onClick={onUpdatePost} className='p-2 text-white bg-green-800 rounded-2xl cursor-pointer hover:bg-blue-400 px-4'>Update Post</div>} */}
          </div>
          <div className='text-slate-500 text-left mb-6'>{new Date().toDateString()}</div>
          <div className='text-left'>{blog.content}</div>
        </div>
        <div className='invisible lg:visible flex flex-col items-start justify-start mx-4'>
          <div className="text-xl mb-6" >Author</div>
          <div className='flex items-center justify-center gap-2'>
            <Avatar name={blog.author.name} size={"large"}/>
            <div className='text-2xl font-bold'>{blog.author.name} </div>
          </div>
        </div>
      </div>
    </div>
  )
}
