import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Register = () => {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })

    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        console.log(userData)
        try {

            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, userData)

            if (data.success) {
                toast.success("Data submitted!")
                navigate('/login')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }

    }

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <form onSubmit={onSubmitHandler} className='p-8 w-fit mx-2 md:mx-0 max-w-md rounded-2xl flex flex-col gap-9 shadow-[0_20px_50px_rgba(0,0,0,0.9)]'>
                <h1 className='font-bold text-gray-800 text-3xl'>Register</h1>
                <div className='space-y-6'>
                    <label>Enter name: </label>
                    <input
                        className='w-full placeholder:text-sm font-medium text-gray-600 italic border-b border-b-gray-600 focus:outline-none py-2'
                        type="text"
                        name='name'
                        placeholder='Enter your name'
                        required
                        value={userData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='space-y-6'>
                    <label>Enter email: </label>
                    <input
                        className='w-full placeholder:text-sm font-medium text-gray-600 italic border-b border-b-gray-600 focus:outline-none py-2'
                        type="text"
                        name='email'
                        placeholder='Enter your email'
                        required
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
                        required
                        value={userData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button className='w-full py-2 hover:bg-purple-950 cursor-pointer rounded-sm bg-purple-800 text-white' type='submit'>Register</button>
                    <div className='mt-3'>
                        <span>Already have an account!</span>
                        <Link className='text-blue-600 underline ml-2' to={'/login'}>Login</Link>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Register
