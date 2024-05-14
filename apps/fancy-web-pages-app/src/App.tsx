import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage1 from './pages/LandingPage1.tsx'
import Home from './pages/Home.tsx'
import HomeButton from './pages/HomeButton.tsx'
import LandingPage2 from './pages/LandingPage2.tsx'
import LandingPage3 from './pages/LandingPage3.tsx'

function App() {

  return (
    <div className='min-h-screen w-full'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/landing1' element={<LandingPage1/>} />
          <Route path='/landing2' element={<LandingPage2/>} />
          <Route path='/landing3' element={<LandingPage3/>} />
        </Routes>
        <HomeButton/>
      </Router>
      
    </div>
  )
}

export default App
