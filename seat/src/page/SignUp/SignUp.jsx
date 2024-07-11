
import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

export default function SignUp() {
  return (
    <div className='signup-container'>

      <h1 className='signup-title'>Sign Up</h1>

      <form className='signup-form'>
        <input type="text" placeholder='Username' className='signup-input' id='username' />
        <input type="email" placeholder='Email' className='signup-input' id='email' />
        <input type="password" placeholder='Password' className='signup-input' id='password' />
        <button className='signup-button'>Sign up</button>
      </form>

      <div className="signup-login">
        <p className="signupcolor">Have an account?</p>
        <Link to={"/SignIn"} className='signup-login-link'>
          Sign in
        </Link>
      </div>

    </div>
  );
}
