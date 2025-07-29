import React from 'react'
import { useState } from "react";


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault()
    // Handle login logic here, e.g., API call to authenticate user
    // console.log("Login form submitted")


  }
  
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm max-md:m-6 border border-gray-300 p-6 rounded-lg shadow-xl shadow-black-200'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full py-6 text-center'>
            <h1 className='text-3xl font-bold'>
              <span className='text-blue-700 font-bold'>Admin</span> Login
            </h1>
            <p className='font-light text-gray-500 text-sm mt-2'>
              Please enter your credentials to login
            </p>
          </div>
          <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
            <div className='flex flex-col'>
              <label>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email}
                type="email"
                required
                placeholder='your email id'
                className='border-b-2 border-gray-300 p-2 outline-none mb-2'
              />
            </div>
            <div className='flex flex-col'>
              <label>Password</label>
              <input onChange={(e) => setPassword(e.target.value)} value={password}
                type="password"
                required
                placeholder='your password'
                className='border-b-2 border-gray-300 p-2 outline-none mb-2'
              />
            </div>
            <button
              type="submit"
              className='w-full py-3 font-medium bg-indigo-600 text-white rounded cursor-pointer hover:bg-blue-900'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
