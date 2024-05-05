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
    <div className='p-4 h-screen relative w-full flex justify-center items-center '>
      <Routes>
        <Route path='/' element={currentUser ? <Home/> : <Navigate to={"/signin"} />} />
        <Route path='/signin' element={currentUser  ? <Navigate to='/' /> : <Signin/>} />
        <Route path='/signup' element={currentUser  ? <Navigate to='/' /> : <Signup/>} />
      </Routes>
    </div>
  )
}

export default App
