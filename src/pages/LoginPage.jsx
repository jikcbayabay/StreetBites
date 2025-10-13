// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import './LoginPage.css';
import AdminLogin from './AdminLogin';
import VendorLogin from './VendorLogin';
import UserLogin from './UserLogin';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [loginType, setLoginType] = useState(null); // null, 'admin', 'vendor', 'user'

  const handleBack = () => {
    setLoginType(null);
  };

  // If a login type is selected, show that component
  if (loginType === 'admin') {
    return <AdminLogin onBack={handleBack} />;
  }
  if (loginType === 'vendor') {
    return <VendorLogin onBack={handleBack} />;
  }
  if (loginType === 'user') {
    return <UserLogin onBack={handleBack} />;
  }

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
              onClick={() => setLoginType('admin')}
            >
              <span className="btn-text">Login as Admin</span>
            </button>

            <button 
              className="login-btn vendor"
              onClick={() => setLoginType('vendor')}
            >
              <span className="btn-text">Login as Vendor</span>
            </button>

            <button 
              className="login-btn email"
              onClick={() => setLoginType('user')}
            >
              <span className="btn-text">Sign In with Email</span>
            </button>
          </div>

          <div className="signup-section">
            <span className="signup-text">
              Don't have an account? <Link to="/usersignup" className="signup-link">Sign Up</Link>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;