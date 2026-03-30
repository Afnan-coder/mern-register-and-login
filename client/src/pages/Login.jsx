import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]: value
            })

    }

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        console.log(userData)
    }

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <form onSubmit={onSubmitHandler} className='p-8 w-fit max-w-md rounded-2xl flex flex-col gap-9 shadow-[0_20px_50px_rgba(0,0,0,0.9)]'>
                <h1 className='font-bold text-gray-800 text-3xl'>Login</h1>
                <div className='space-y-6'>
                    <label>Enter email: </label>
                    <input
                        className='w-full placeholder:text-sm font-medium text-gray-600 italic border-b border-b-gray-600 focus:outline-none py-2'
                        type="text"
                        name='email'
                        placeholder='Enter your email'
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='space-y-4'>
                    <label>Enter password: </label>
                    <input
                        className='w-full placeholder:text-sm font-medium text-gray-600 italic border-b border-b-gray-600 focus:outline-none py-2'
                        type="password"
                        name='password'
                        placeholder='Enter you password'
                        value={userData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button className='w-full py-2 rounded-sm bg-purple-800 text-white' type='submit'>Login</button>
                    <div className='mt-3'>
                        <span>Don't have an account!</span>
                        <Link className='text-blue-600 underline ml-2' to={'/register'}>register</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
