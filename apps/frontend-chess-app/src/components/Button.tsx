import React from 'react'

const Button = ({onClick,content}:any) => {
  return (
    <button onClick={onClick} className="mx-[10%] w-[80%] bg-gradient-to-br from-black to-green-700 hover:border-2 hover:border-black  text-white rounded-2xl p-4 text-2xl shadow-lg shadow-black" > 
        {content}
    </button>
  )
}

export default Button