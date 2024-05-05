import { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext.jsx"
import axios from 'axios'
import { toast } from "react-hot-toast"

const url = import.meta.env.VITE_API_URL + import.meta.env.VITE_API_CONTEXT + import.meta.env.VITE_AUTH_CONTEXT;

const useLogout = () => {
    const { setCurrentUser} = useContext(AuthContext) || {};
    const [loading,setLoading] = useState(false);
    const logout = async () => {
        try {
            setLoading(true);
            await axios.request({
                url: url + '/logout',
                method: 'get' ,      
                headers: { 
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("currentUser") || '').token,
                },
            })
            setCurrentUser(null);
            localStorage.removeItem('currentUser');
        }catch(e){
            toast.error('Not able to logout')
        }finally{
            setLoading(false);
        }
    }
    return {loading, logout}
}

export default useLogout
