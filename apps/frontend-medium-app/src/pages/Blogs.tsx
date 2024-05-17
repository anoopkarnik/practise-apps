import React from 'react'
import { BlogCard } from '../components/BlogCard.tsx'
import { useBlogs } from '../hooks/index.ts'
import BlogSkeleton from '../components/BlogSkeleton.tsx'

export default function Blogs() {
    const {loading,blogs} = useBlogs()

    if (loading) {
        return (
        <div>
            <div className='flex flex-col items-center jusitfy-center gap-6 mt-4 '>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
            </div>
        </div>
        )
    }
  return (
    <div>
        <div className='flex flex-col items-center jusitfy-center gap-6 mt-4 '>
        {blogs.map((blog) => (
            <BlogCard 
            key={blog.id}
            id={blog.id}
            title={blog.title} 
            authorName={blog.author.name} 
            content={blog.content} 
            publishedDate={new Date().toDateString()} />
        ))}
        </div>
    </div>
  )
}
