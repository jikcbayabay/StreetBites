// src/pages/LoginPage.jsx
import React from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  // Main login selection page
  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-hero">
          <h1 className="logo-title">StreetBites</h1>
          <p className="logo-subtitle">Sign in to write reviews</p>
          <p className="hero-description">
            Discover the best street food in your area. Share your experiences, 
            read reviews from fellow food lovers, and help others find their next 
            favorite meal on wheels.
          </p>
        </div>

        <main className="login-content">
          <div className="login-buttons">
            <button 
              className="login-btn admin"
              onClick={() => navigate('/admin-login')}
            >
              <span className="btn-text">Login as Admin</span>
            </button>

            <button 
              className="login-btn vendor"
              onClick={() => navigate('/vendor-login')}
            >
              <span className="btn-text">Login as Vendor</span>
            </button>

            <button 
              className="login-btn email"
              onClick={() => navigate('/user-login')}
            >
              <span className="btn-text">Sign In with Email</span>
            </button>
          </div>

          <div className="signup-section">
            <span className="signup-text">
              Don't have an account? <Link to="/user-sign" className="signup-link">Sign Up</Link>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;