import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Heading from '../components/Heading.jsx'
import Input from '../components/Input.jsx'
import Radio from '../components/Radio.jsx'
import useSignup from '../hooks/useSignup.jsx'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')
    const genderOptions = ['male','female','other']
    const [gender, setGender] = useState('')
    const navigate = useNavigate()

    const {signup} = useSignup()
    

    const onGenderChange = (event:any) =>{
        setGender(event.target.value)
    }


    const onSignup = async () =>{
        await signup({name, username, password, confirmPassword, gender})
    }

  return (
    <div className='flex flex-col items-center justify-center mx-auto min-w-96 h-full w-[30%]'>
    <div className='justify-center w-full bg-gray-400 bg-clip-padding backdrop-filter 
    backdrop-blur-lg bg-opacity-0 shadow-md '>
        <Heading text='Signup ChatApp'/>
        <Input onChange={(e:any) => setName(e.target.value)} placeholder='Enter name' label='name' type="text"/>
        <Input onChange={(e:any) => setUsername(e.target.value)} placeholder='Enter email' label='Username' type="text"/>
        <Input onChange={(e:any) => setPassword(e.target.value)} placeholder='Enter password' label='Password' type="password"/>
        <Input onChange={(e:any) => setConfirmPassword(e.target.value)} placeholder='Enter password again'  label='Comfirm Password' type="password"/>
        <Radio onChange={onGenderChange} options={genderOptions}/>
        <div className='flex flex-col justify-start gap-2 mt-10'>
            <div className='text-md flex justify-start mx-[12%] text-white hover:text-blue-500 cursor-pointer font ' 
            onClick={()=>{navigate('/signin')}}>
                Already have an account
            </div>
            <Button text='Signup' onClick={onSignup}/>
        </div>
    </div>
</div>
  )
}

export default Signup