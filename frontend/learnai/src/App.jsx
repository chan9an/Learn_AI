import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import Login from './login'
import Signup from './signup'
function App() {

  return (
    <>
    <Router>
        <Routes>
        <Route path="/" element={<Login />} />   {/* Default page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Login />} />  {/* Handles unknown paths */}
            
        </Routes>
    </Router>
    </>
  )
}

export default App
