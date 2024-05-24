import React, { useRef } from 'react'

export default function Video({videoRef}: {videoRef: React.RefObject<HTMLVideoElement>}) {
  return (
    <div className='w-[60%] '>
        <video className="w-full h-full" ref={videoRef} autoPlay>
        </video>
    </div>
  )
}
