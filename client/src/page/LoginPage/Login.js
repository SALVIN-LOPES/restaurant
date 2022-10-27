import React from 'react'
import './login.css'

const Login = () => {
  return (
    <>
  <div class="login-container">
    <div class="title">Login</div>
    <div class="form-wrapper">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Username</span>
            <input type="text" placeholder="Enter your username" required/>
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" placeholder="Enter your password" required/>
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Login"/>
        </div>
      </form>
    </div>
  </div>
    </>
  )
}

export default Login
