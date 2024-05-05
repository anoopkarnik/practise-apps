import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import Users from './Users.jsx';
import Conversations from './Conversations.jsx';
import { SelectedUserProvider } from '../../contexts/selectedUserContext.jsx';
import { UsersProvider } from '../../contexts/UsersContext.jsx';


const Home = () => {
    
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('currentUser') === null){
      navigate('/signin')
    }
  }, [])
 
    
  return (
    <UsersProvider>
      <SelectedUserProvider >
          <div className='flex items-center justify-center w-full h-screen '>
              <div className='flex w-3/4 h-3/4 bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0'>
                <Users />
                <Conversations/>
              </div>
          </div>
      </SelectedUserProvider>
    </UsersProvider>
  )
}

export default Home