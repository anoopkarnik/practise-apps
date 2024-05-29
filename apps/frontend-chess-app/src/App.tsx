import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.tsx'
import Game from './pages/Game.tsx'
function App() {

  return (
    <div className='min-h-screen w-full bg-zinc-700'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/game' element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
