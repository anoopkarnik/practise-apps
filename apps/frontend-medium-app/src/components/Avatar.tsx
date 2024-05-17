import React from 'react';
export default function Avatar({name,size}: {name:string,size: 'small' | 'large'}){


    return <div className={`flex items-center justify-center ${size==='small'? 'w-5 h-5' : 'w-10 h-10'} bg-blue-800 rounded-full`}>
        <span className=' text-gray-200 flex items-center justify-center'>
            <div>{name[0]}</div>
        </span>

    </div>
}