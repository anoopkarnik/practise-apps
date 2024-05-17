import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup.tsx'
import Signin from './pages/Signin.tsx'
import Blog from './pages/Blog.tsx'
import Blogs from './pages/Blogs.tsx'
import Publish from './pages/Publish.tsx'

function App() {



  return (
    <>
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/publish" element={<Publish/>}/>
      </Routes>
    </Router>
  </>
  )
}

export default App
