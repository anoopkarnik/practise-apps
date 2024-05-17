import React from 'react'

export default function PostPage({title,content,publishPost,setTitle,setContent}) {

  return (
    <div className='flex justify-center mx-[5%] max-w-[90%] pt-8'>
    <div className='max-w-screen-lg w-full'>
        <input onChange={(e)=>setTitle(e.target.value)} type="text" className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5'
        placeholder={title || 'Title'} />
        <TextEditor content={content || "Write an article"} onChange={(e)=>setContent(e.target.value)}/>
        <button onClick={publishPost }type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Publish post
        </button>
    </div>
</div>
  )
}

function TextEditor({onChange,content}){
    return(
   <form>
      <div className="w-full my-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="px-4 py-2 bg-white rounded-b-lg  focus:ring-0">
              <label className="sr-only">Publish post</label>
              <textarea onChange={onChange} id="editor" rows={8} className="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:outline-none" 
              placeholder={content} required >

              </textarea>
          </div>
      </div>
   </form>
    )
   }