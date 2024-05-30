import React, { useState } from 'react'
import COVER_IMAGE from '../../Background Images/loginpage.jpg'
import google_logo from '../../Background Images/g-logo.png'
import { Link } from 'react-router-dom'
const colors = {
    primary: "#060606",
    background: "#E0E0E0",
    disabled: "#D9D9D9"
}

const Register = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(state);
    }

    return (
        <div className='w-full h-screen flex items-start'>
            <div className='relative w-1/2 h-full flex flex-col'>
                <img src={COVER_IMAGE} className='w-full h-full object-cover' />
            </div>

            <div className='w-1/2 h-full bg-[##f5f5f5] flex flex-col p-20 justify-between'>
                <div className='w-full flex flex-col max-w-[500px]'>
                    <div className='w-full flex flex-col mb-2'>
                        <h3 className='text-2xl font-semibold mb-2'>Register</h3>
                        <p className='text-base mb-2'>Sign Up for free</p>
                    </div>

                    <div className='w-full flex flex-col'>
                        <input
                            type='text'
                            name="name"
                            value={state.name}
                            onChange={handleChange}
                            placeholder='Name'
                            className='w-full text-black border-b border-black py-2 my-2 bg-transparent outline-none focus:outline-none' />
                    </div>

                    <div className='w-full flex flex-col'>
                        <input
                            type='email'
                            name="email"
                            value={state.email}
                            onChange={handleChange}
                            placeholder='Email'
                            className='w-full text-black border-b border-black py-2 my-2 bg-transparent outline-none focus:outline-none' />
                    </div>

                    <div className='w-full flex flex-col'>
                        <input
                            type='password'
                            name="password"
                            value={state.password}
                            onChange={handleChange}
                            placeholder='Password'
                            className='w-full text-black border-b border-black py-2 my-2 bg-transparent outline-none focus:outline-none' />
                    </div>

                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex'>
                            <input className='w-4 h-4 mr-2' type='checkbox' />
                            <p className='text-sm'>Rememeber me for 30 days</p>
                        </div>

                    </div>

                    <div className='w-full flex flex-col my-4'>
                        <button onClick={submit} className='w-full text-white my-2 bg-[#060606] font-semibold rounder-md p-4 text-center flex items-center border-black justify-center cursor-pointer'>Sign Up</button>

                    </div>

                    <div className='w-full flex items-center justify-center relative py-4'>
                        <div className='w-full h-[1px] bg-black'></div>
                        <p className='text-lg absolute text-black/80 bg-white'>or</p>
                    </div>

                    <div className='w-full text-[#060606] my-2 bg-white font-semibold border-2 border-black rounder-md p-4 text-center flex items-center justify-center cursor-pointer'>
                        <img src={google_logo} className='h-6 mr-2' />
                        Sign up with Google

                    </div>

                </div>

                <div className='w-full items-center justify-center'>
                    <p className='text-sm font-normal text-[#060606]'>Already have and account ? <span className='font-semibold underline underline-offset-2 cursor-pointer'><Link to='/login'>Sign In here</Link></span></p>
                </div>
            </div>
        </div>
    )
}

export default Register