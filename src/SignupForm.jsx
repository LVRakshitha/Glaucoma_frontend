import React, { useState } from 'react';
import './signupform.css';
import {Link} from 'react-router-dom'


const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="image-container">
          <img src="./b3.jpg" alt="Sign Up" className="side-image" />
        </div>
        <div className="image-text">
          <h1>Welcome
          Join our community today!
          </h1>
          <p>Protect your vision with knowledge. Our glaucoma website offers expert information, self-assessment tools, and treatment options. Don't let glaucoma steal your sight. Visit us today for a brighter tomorrow.</p>
        </div>
      </div>
      <div className="right-section">
  <form onSubmit={handleSubmit} className="form">
    <div className="form-header">
      <div className="logo-container">
        <img src="/logosignup.jpg" alt="Logo" className="logo" />
      </div>
      <h2 className="form-title">Sign Up</h2>
    </div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="input-field"
            required
          />
          <div className="form-row">
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="input-field"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="input-field"
              required
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
            required
          />
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;