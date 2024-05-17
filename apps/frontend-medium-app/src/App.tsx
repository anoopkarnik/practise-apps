import React, {  } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom'
import Signup from './pages/Signup.tsx'
import Signin from './pages/Signin.tsx'
import Blog from './pages/Blog.tsx'
import Blogs from './pages/Blogs.tsx'
import Publish from './pages/Publish.tsx'
import Appbar from './components/Appbar.tsx'

function App() {

  const user = localStorage.getItem('user');
  return (
    <Router>
        <Routes>
          <Route path='/' element={user ? <Navigate to={"/blog"}/>: <Navigate to={"/signin"}/> } />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog" element={<div> {user && <Appbar authorName = {JSON.parse(user).name}/>}<Blogs /></div>} />
          <Route path="/blog/:id" element={<div> {user && <Appbar authorName = {JSON.parse(user).name}/>}<Blog /></div>} />
          <Route path="/publish" element={<div> {user && <Appbar authorName = {JSON.parse(user).name}/>}<Publish/></div>}/>
          {/* <Route path="/edit/:id" element={<div> {user && <Appbar authorName = {JSON.parse(user).name}/>}<EditPost/></div>}/> */}
        </Routes>
    </Router>

  )
}

export default App
