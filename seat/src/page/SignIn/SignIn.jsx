import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
export default function SignIn()
 {
  const [emailOrUserId, setEmailOrUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here (e.g., API call, validation, etc.)
    console.log('Signing in with:', emailOrUserId, password);
  };

  return (
    <div className='signin-container'>
      <h1 className='signin-title'>Sign In</h1>

      <form className='signin-form' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Email or UserID'
          className='signin-input'
          value={emailOrUserId}
          onChange={(e) => setEmailOrUserId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder='Password'
          className='signin-input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='signin-button'>Sign In</button>
      </form>

      <div className="signin-signup">
        <p className="signincolor">Don't have an account?</p>
        <Link to={"/sign-up"} className='signin-signup-link'>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

