import React from 'react'
import COVER_IMAGE from '../../Background Images/loginpage.jpg'

const colors = {
  primary:"#060606",
  background:"#E0E0E0", 
  disabled:"#D9D9D9"
}

const Login = () => {
  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col'>
          <h1 className='text-4xl text-white font-bold my-4'>Discover Deals, Shop Smartly</h1>
          <p className='text-xl text-white font-normal'>SignUp for free and get exciting offers</p>
        </div>
        <img src={COVER_IMAGE} className='w-full h-full object-cover'/>
      </div>

      <div className='w-1/2 h-full bg-[##f5f5f5] flex flex-col p-20 justify-between'>

        <div className='w-full flex flex-col'>
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

        </div>

        <div className='w-full items-center justify-center'>
            <p className='text-sm font-normal text-[#060606]'>Don'y have a account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign Up for free</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login