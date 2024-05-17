import {useState, useEffect} from 'react';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface BlogProps {
    title: string;
    content: string;
    id: string;
    author: {
        name: string;
    }
}

export const useBlogs = () =>{
    const [blogs, setBlogs] = useState<BlogProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers: {
                Authorization:  `Bearer ${localStorage.getItem('token')}`
            }
        }        )
        .then((response)=>{
            console.log(response.data)
            setBlogs(response.data.posts);
            setLoading(false);
        })  
        .catch((e)=>{
            console.log(e);
            setLoading(false);
        })
    },[])
    return {loading,blogs}
}

export const useBlog = ({id}:{id:string}) =>{
    const [blog, setBlog] = useState<BlogProps>();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers: {
                Authorization:  `Bearer ${localStorage.getItem('token')}`
            }
        }        )
        .then((response)=>{
            console.log(response.data)
            setBlog(response.data.post);
            setLoading(false);
        })  
        .catch((e)=>{
            console.log(e);
            setLoading(false);
        })
    },[id])
    return {loading,blog}
}
