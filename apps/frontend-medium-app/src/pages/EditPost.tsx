import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import PostPage from '../components/PostPage.tsx';
import { useBlog } from '../hooks/index.ts';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function EditPost() {
    const {id} = useParams()
    const {blog}  = useBlog({id});
    const navigate = useNavigate()
    const user = localStorage.getItem('user');
    const token = JSON.parse(user).jwt;
    const [setTitle] = useState('')
    const [setContent] = useState('')

    const publishPost = async () => {
        try {
            const response = await axios.put(`${BACKEND_URL}/api/v1/blog`,
             {id, title: blog.title, content: blog.content}, // Added curly braces around object properties
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
        )
        navigate(`/blog/${response.data.id}`)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <PostPage title={blog.title} content={blog.content} setTitle={setTitle} setContent={setContent} publishPost={publishPost}/>
    </div>
  )
}


