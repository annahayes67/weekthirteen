import React from 'react'
import './LoginForm.css'

function LoginForm() {
  return (
    <div className='Login'>
        <h3>Login:</h3>
        <input placeholder='Username'></input>
        <br></br>
        <input placeholder='Password'></input>
        <br></br>
        <br></br>
        <button>Submit</button>
    </div>
  )
}

export default LoginForm