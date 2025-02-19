import React, { useState } from 'react'

function Login() {

    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");

    function handleSubmit(e){
        e.preventDefault();  
        setEmail("")
        setpassword("")
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-lg rounded-xl w-96 p-8">
        <h2 className="text-center text-2xl font-semibold text-gray-200 mb-6">Welcome Back</h2>

        <form className="w-full" onSubmit={handleSubmit}>
          
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

         
          <div>
            <button  
              className="w-full p-3 mt-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 active:bg-purple-800 transition-all"
              type="submit" 
            >
              Login
            </button>
          </div>
        </form>

        
        <p className="text-center text-gray-400 text-sm mt-4">
          Don't have an account? <a href="#" className="text-purple-400 hover:underline">Sign Up</a>
        </p>

        
      </div>
    </div>

    
  )
}

export default Login
