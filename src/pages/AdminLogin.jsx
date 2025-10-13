// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import './LoginPage.css';

const AdminLogin = ({ viewMode, onBack, onToggleView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // ✅ Email validation and normalization
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const normalizeEmail = (email) => email.trim().toLowerCase();

  const handleChangeEmail = (e) => {
    const normalized = normalizeEmail(e.target.value);
    setEmail(normalized);

    if (validateEmail(normalized)) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }

    setErrors({});
    console.log('Admin login attempt:', { email, password });
    // Add your admin login logic here
  };

  return (
    <div className="login-page" data-view={viewMode}>
      <div className="login-wrapper">
        <div className="login-hero">
          <button className="back-btn" onClick={onBack}>← Back</button>
          <h1 className="logo-title">Admin Login</h1>
          <p className="logo-subtitle">Access administrator dashboard</p>
          <p className="hero-description">
            Access the core control panel. Monitor site activity, manage user and vendor accounts, and ensure the StreetBites platform remains a high-quality resource for all street food enthusiasts.
          </p>
        </div>

        <main className="login-content">
          <form className="email-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="admin@streetbites.com"
                value={email}
                onChange={handleChangeEmail}
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Login as Admin
            </button>
          </form>

          <div className="signup-section">
            <span className="signup-text">
              Don't have an account? <a href="/adminsignup" className="signup-link">Sign Up</a>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLogin;
