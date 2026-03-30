import React from 'react'

const Login = () => {
  return (
    <div className=''>
      <form>
        <h1>Login</h1>
        <div>
            <label>Enter email: </label>
            <input type="text" name='name' />
        </div>
        <div>
            <label>Enter password: </label>
            <input type="password" name='password' />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
