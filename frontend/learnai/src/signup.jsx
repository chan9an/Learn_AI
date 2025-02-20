import React, { useState } from 'react'
import {Link} from "react-router-dom";

function Signup() {



    const [name,setname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    const [confirmpassword,setconfirmpassword]=useState("");
    const [phonenumber,setphonenumber]=useState("");
    const [dob,setdob]=useState("");
   

    function handleSubmit(e){
        e.preventDefault();  
        setEmail("")
        setname("")
        setconfirmpassword("")
        setphonenumber("")
        setpassword("")
        setdob("")
        
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-lg rounded-xl w-96 p-8">
        <h2 className="text-center text-2xl font-semibold text-gray-200 mb-6">Hello</h2>

        <form className="w-full" onSubmit={handleSubmit}>

        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 font-medium tracking-wide">Name</label>
            <input 
              id="name" 
              type="text" 
              placeholder="Enter Name" 
              className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              onChange={(e)=>setname(e.target.value)}
              value={name}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 font-medium tracking-wide">Email</label>
            <input 
              id="email" 
              type="email" 
              placeholder="Enter Email" 
              className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
          </div>

          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-400 font-medium tracking-wide">Password</label>
            <input 
              id="password" 
              type="password" 
              placeholder="Enter Password" 
              className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              onChange={(e)=>setpassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmpassword" className="block text-gray-400 font-medium tracking-wide">Confirm Password</label>
            <input 
              id="confirmpassword" 
              type="password" 
              placeholder="Enter The Password Again" 
              className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              onChange={(e)=>setconfirmpassword(e.target.value)}
              value={confirmpassword}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phonenumber" className="block text-gray-400 font-medium tracking-wide">Phone Number</label>
            <input 
              id="phonenumber" 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              onChange={(e)=>setphonenumber(e.target.value)}
              value={phonenumber}
            />
          </div>


          <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-400 font-medium tracking-wide">Date Of Birth</label>
            <input 
              id="dob" 
              type="date" 
              placeholder="Date Of Birth" 
              className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              onChange={(e)=>setdob(e.target.value)}
              value={dob}
            />
          </div>

         
          <div>
            <button  
              className="w-full p-3 mt-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 active:bg-purple-800 transition-all"
              type="submit" 
            >
              Sign Up
            </button>
          </div>
        </form>

        
        <p className="text-center text-gray-400 text-sm mt-4">
         Already have an account? <Link to="/login"   className="text-purple-400 hover:underline">Login</Link>
        </p>

        
      </div>
    </div>

    
  )
}

export default Signup   



