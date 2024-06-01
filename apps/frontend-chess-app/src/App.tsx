import React,{Suspense} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.tsx'
import Game from './pages/Game.tsx'
import { RecoilRoot } from 'recoil';
import Login from './pages/Login.tsx'

function App() {

  return (
    <div className='min-h-screen w-full bg-zinc-700'>
      <RecoilRoot>
        <Suspense fallback={<div>Loading</div>}>
          <AuthApp/>
        </Suspense>
      </RecoilRoot>
    </div>
  )
}

function AuthApp() {

  return (
    <div className='min-h-screen w-full bg-zinc-700'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/game/:gameId' element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
