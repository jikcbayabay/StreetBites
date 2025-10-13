// src/pages/UserLogin.jsx
import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const UserLogin = ({ viewMode, onBack, onToggleView }) => {
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
    console.log('User login attempt:', { email, password });
    // Add your user login logic here
  };

  return (
    <div className="login-page" data-view={viewMode}>
      <div className="login-wrapper">
        <div className="login-hero">
          <button className="back-btn" onClick={onBack}>← Back</button>
          <h1 className="logo-title">User Login</h1>
          <p className="logo-subtitle">Sign in to write reviews</p>
          <p className="hero-description">
            Find your next great meal on the go. Discover top-rated vendors, read authentic reviews from fellow foodies, and share your own experiences to help build the ultimate street food guide.
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
                placeholder="juan@example.com"
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
              Login
            </button>
          </form>

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

export default UserLogin;
