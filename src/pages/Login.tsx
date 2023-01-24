import React from 'react'
import "./Login.css"
import { useState } from 'react'

const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:""
  })

  const handleChange=(e:any)=>{
   setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
}
const submitHandle=(e:any)=>{
  e.preventDefault()
   console.log(inputs.username)
}



  return (
    <div>
      <div className="container">
      <div className="login_container">
        <h2 className="login">Login</h2>
        <form className="form_container" onSubmit={submitHandle}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button className="btn" type="submit">
            Sign in
          </button>
          <b className="err">err</b>
        </form>
        <p>
          Don't have an account Register
        </p>
      </div>
    </div>
    </div>
  )
}

export default Login
