import React,{useState} from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import LabelledInput from './LabelledInput.tsx'
import { SignupType } from '@repo/zod-validations/index'
import axios from 'axios'

const BACKEND_URL =import.meta.env.VITE_BACKEND_URL

export default function Auth({type}: {type: "signup" | "signin"}) {

    const [postInputs,setPostInputs] = useState<SignupType>({name: '', email: '', password: ''})
    const navigate = useNavigate();
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInputs)
            const user = response.data;
            localStorage.setItem('user',JSON.stringify(user))
            navigate('/blog')
        }catch(e){
            alert("Error while signing up")
            console.log(e)
        }
    }

  return (
    <div className="h-screen flex justify-center flex-col ">
        <div className="text-3xl text-center font-black">Create an account</div>
        <div className="text-slate-400 mb-10 text-center">{type==='signin' ? "Don't have an Account" : 'Already have an account'} 
            <Link to={type === 'signin' ? '/signup': '/signin'} className='hover:text-blue-400'>
                {type === 'signin' ? ' Sign up' :' Sign in'}
            </Link>
        </div>

        {type ==='signup' && <LabelledInput label="Name" placeholder='Name' onChange={(e)=>{
            setPostInputs({...postInputs, name: e.target.value})
        }}/>}
        <LabelledInput label="Email" placeholder='Email' onChange={(e)=>{
            setPostInputs({...postInputs, email: e.target.value})
        }}/>
        <LabelledInput label="Password" placeholder='Password' type="password" onChange={(e)=>{
            setPostInputs({...postInputs, password: e.target.value})
        }}/>
        <button onClick={sendRequest} className="bg-black text-white text-lg p-2 rounded-lg mx-[30%] mt-4">{type === 'signin' ? 'Sign in' :'Sign up'}</button>
    </div>
  )
}
