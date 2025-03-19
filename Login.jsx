import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Loginpage.css'; // Separate CSS file

const LandingPage = () => {
  const navigate = useNavigate();

  

  return (
    <div className="container">
      <div className="dust-bg"></div>
      <div className="curve-bg"></div>

      <nav className="nav">
        <div className="logo">
          <span className="logo-kon">KON</span><span className="logo-nect">NECT</span>
        </div>
      </nav>

      <div className="login-container">
        <div className="auth-buttons">
          <button className=" btn-login" onClick={() => navigate('/login')}>👤 Login</button>
          <button className=" btn-login" onClick={() => navigate('/Layout')}>👤 registration</button>
          
        </div>

        <form>
          <div className="form-group">
            <label className="form-label">College Email</label>
            <input type="email" className="form-input" placeholder="Email" />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="Password" />
          </div>

          <button type="submit" className="proceed-btn">Proceed</button>

          <div className="register-link">
            Don't have an account? <a href="#" onClick={() => navigate('/register')}>Register Now</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
