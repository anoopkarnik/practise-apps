import React from 'react'

interface InputProps {
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string | "text";
    }


export default function LabelledInput({label,placeholder,onChange,type}:InputProps) {
  return (
    <>
        <label className='block mb-2 text-sm font-bold text-gray-900 text-left mx-[30%]'>{label}</label>
        <input type={type} id={label} placeholder={placeholder} onChange={onChange} 
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fulll p-2 mb-4 text-left mx-[30%]'/>
    </>
  )
}
