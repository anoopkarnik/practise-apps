import { useContext, useState } from 'react';
import axios from 'axios';
import { UsersContext } from '../contexts/UsersContext.jsx';
import {toast} from 'react-hot-toast';

const url = import.meta.env.VITE_API_URL + import.meta.env.VITE_API_CONTEXT + import.meta.env.VITE_USER_CONTEXT;

export const useGetUsers = () => {
    const {setUsers} = useContext(UsersContext) || {}
    const [loading, setLoading] = useState(false)

    const getUsers = async({filter}:any) => {
        setLoading(true)
        try{
            const response = await axios.request({
                url: url + '?filter=' + filter,
                method: 'get',
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("currentUser") || '').token,
                }
            })
            setUsers(response.data.user)
            setLoading(false)
        }catch(e){
            toast.error('Not able to get users')
        }finally{
            setLoading(false)
        }

    }
    return {loading, getUsers}
}