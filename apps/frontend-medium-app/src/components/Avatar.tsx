import React from 'react';
export default function Avatar({name,size}: {name:string,size:string}){


    return <div className={`flex items-center justify-center w-${size} h-${size}  bg-blue-800 rounded-full`}>
        <span className=' text-gray-200'>
            {name[0]}
        </span>

    </div>
}