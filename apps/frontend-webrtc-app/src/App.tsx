import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {Sender} from './components/Sender.js'
import {Receiver} from './components/Receiver.js'
import React from 'react'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Sender/>} />
          <Route path='/sender' element={<Sender />} />
          <Route path='/receiver' element={<Receiver />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
