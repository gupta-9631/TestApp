import React from 'react'
import "./Register.css"
import { useState } from 'react'
const Register = () => {

const [inputs, setInputs]= useState({
    username:"",
    email:"email",
    password:"password"
})

const handleChange=(e:any)=>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
}
const submitHandle=(e:any)=>{
    e.preventDefault();
    console.log(inputs)
}



  return (
   <div className="container">
      <div className="register_container">
        <h2>Register</h2>
        <form className="form_container" onSubmit={submitHandle}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <b className="err">{}</b>
          <button className="btn">
            Sign Up
          </button>
        </form>
        <p>
          Have an account Login
        </p>
      </div>
    </div>
  )
}

export default Register
