import React, { useState } from 'react';
import './registrationform.css';
// import image1 from '/g1.jpeg';
import {Link} from 'react-router-dom'

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted', { username, password });
  };

  return (
    
    <div className="login-container">
      <div className="login-box">
        <div className="image-section">
          <img src="/g1.jpg" alt="Nature" />
        </div>
        <div className="form-section">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder='enter username'
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password" 
                placeholder='enter username'
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Login</button>
            <div className="form-footer">
              <Link className="forgot-password">Forgot Password?</Link>
            <Link to="/signup-form" className="sign-up">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;