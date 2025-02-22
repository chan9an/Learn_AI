import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import Login from './login'
import Signup from './signup'
import Homepage from './homepage'
function App() {

  return (
    <>
    <Router>
        <Routes>
        <Route path="/" element={<Login />} />   {/* Default page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Homepage/>} />  {/* Handles unknown paths */}
        <Route path='/home' element={<Homepage/>}/>
        
        </Routes>
    </Router>
    </>
  )
}

export default App
