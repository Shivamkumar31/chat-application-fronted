import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Registration.css';

const RegisterForm = ({ style = {} }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    email: '',
    otp: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleGetOTP = () => {
    // Handle OTP generation
  };
// handele login route 
  const handleLogin = () => {
    console.log("Login button clicked");
    navigate('/Login'); // Redirect to login page
  };

  return (
    <div className="register-container" style={style}>
      <div className="register-form">
        <div className="auth-buttons">
          
          <button className="login-btn" onClick={handleLogin}>
            <span className="user-icon">user</span>
            Login
          </button>
          <button className="register-btn">
            <span className="user-icon">user</span>
            Register
          </button>
        </div>

        

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>

          <div className="input-group">
            <label>Roll number</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              placeholder="Roll number"
            />
          </div>

          <div className="input-group">
            <label>College Mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>

          <div className="input-group">
            <label>OTP</label>
            <div className="otp-container">
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="OTP"
              />
              <button type="button" className="get-otp-btn" onClick={handleGetOTP}>
                Get OTP
              </button>
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
          </div>

          <button type="submit" className="proceed-btn">
            Proceed
          </button>
        </form>

        <p className="login-link">have a account ?, login</p>
      </div>
    </div>
  );
};

export default RegisterForm;



