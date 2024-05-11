import { useContext } from 'react'
import './App.css'
import { AuthContext } from './contexts/AuthContext.jsx'
import { Navigate, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home/Home.jsx';
import React from 'react';

function App() {
  const {currentUser} = useContext(AuthContext) || {};

  return (
    <div className='h-screen w-full '>
      <div className='h-full w-full flex justify-center items-center '>
        <Routes>
          <Route path='/' element={currentUser ? <Home/> : <Navigate to={"/signin"} />} />
          <Route path='/signin' element={currentUser  ? <Navigate to='/' /> : <Signin/>} />
          <Route path='/signup' element={currentUser  ? <Navigate to='/' /> : <Signup/>} />
        </Routes>
      </div>
      <a href="https://app-dashboard.bsamaritan.com" rel="noopener noreferrer">
        <div className='absolute rounded-full p-6 m-4 bottom-0 left-0 bg-white'>
          <HomeIcon/>
        </div>
      </a>
    </div>
  )
}

function HomeIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
}

export default App
