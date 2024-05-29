import React from 'react'
import COVER_IMAGE from '../../Background Images/loginpage.jpg'
import google_logo from '../../Background Images/g-logo.png'
const colors = {
  primary:"#060606",
  background:"#E0E0E0", 
  disabled:"#D9D9D9"
}

const Login = () => {
  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <img src={COVER_IMAGE} className='w-full h-full object-cover'/>
      </div>

      <div className='w-1/2 h-full bg-[##f5f5f5] flex flex-col p-20 justify-between'>
        <div className='w-full flex flex-col max-w-[500px]'>
            <div className='w-full flex flex-col mb-2'>
                <h3 className='text-2xl font-semibold mb-2'>Login</h3>
                <p className='text-base mb-2'>Welcome back! Please enter your details.</p>
            </div>

            <div className='w-full flex flex-col'>
                <input
                type='email'
                placeholder='Email'
                className='w-full text-black border-b border-black py-2 my-2 bg-transparent outline-none focus:outline-none'/>
            </div>

            <div className='w-full flex flex-col'>
                <input
                type='password'
                placeholder='Password'
                className='w-full text-black border-b border-black py-2 my-2 bg-transparent outline-none focus:outline-none'/>
            </div>

            <div className='w-full flex items-center justify-between'>
                <div className='w-full flex'>
                    <input className='w-4 h-4 mr-2' type='checkbox'/>
                    <p className='text-sm'>Rememeber me for 30 days</p>
                </div>

                <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forget Pasword?</p>
            </div>

            <div className='w-full flex flex-col my-4'>
                <button className='w-full text-white my-2 bg-[#060606] font-semibold rounder-md p-4 text-center flex items-center border-black justify-center cursor-pointer'>Log In</button>
                <button className='w-full text-[#060606] my-2 bg-white font-semibold border-2 rounder-md p-4 text-center border-black flex items-center justify-center cursor-pointer'>Register</button>

            </div>

            <div className='w-full flex items-center justify-center relative py-4'>
                <div className='w-full h-[1px] bg-black'></div>
                <p className='text-lg absolute text-black/80 bg-white'>or</p>
            </div>

            <div className='w-full text-[#060606] my-2 bg-white font-semibold border-2 border-black rounder-md p-4 text-center flex items-center justify-center cursor-pointer'>
                <img src={google_logo} className='h-6 mr-2'/>
                Sign In with Google
                
                </div>

        </div>

        <div className='w-full items-center justify-center'>
            <p className='text-sm font-normal text-[#060606]'>Don'y have a account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign Up for free</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login