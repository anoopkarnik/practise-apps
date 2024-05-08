import {useContext,useState} from 'react'
import axios from 'axios'
import {AuthContext } from '../contexts/AuthContext.jsx'
import {toast} from 'react-hot-toast';

const api_url = import.meta.env.VITE_API_URL || 'http://localhost:3004';
const api_context = import.meta.env.VITE_API_CONTEXT || 'api/v1';
const auth_context = import.meta.env.VITE_AUTH_CONTEXT || '/auth';
const url = api_url + api_context + auth_context;

const useSignin = () => {
    const [loading,setLoading] = useState(false);
    const {setCurrentUser} = useContext(AuthContext) || {};
    
    const signin =  async (username:any, password:any) =>{
        setLoading(true)
        try{
            const response = await axios.request({
                url: url + '/signin',
                method: 'post',
                data: JSON.stringify({username, password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const user = response.data
            setCurrentUser(user)
            localStorage.setItem('currentUser', JSON.stringify(user))
        }catch(e){
            toast.error('Invalid username or password')
        }finally{
            setLoading(false)
        }
    }
    return {loading, signin}
}

export default useSignin