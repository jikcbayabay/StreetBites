// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '../../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import './LoginPage.css';

const AdminLogin = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const normalizeEmail = (email) => email.trim().toLowerCase();

  const handleChangeEmail = (e) => {
    const normalized = normalizeEmail(e.target.value);
    setEmail(normalized);
    if (validateEmail(normalized)) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!validateEmail(email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }
    if (!password) {
      setErrors((prev) => ({ ...prev, password: 'Password is required' }));
      return;
    }

    try {
      // 1️⃣ Firebase sign in
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2️⃣ Check if user has 'admin' role
      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists() && userDocSnap.data().role === 'admin') {
        navigate('/admin-dashboard'); // redirect to admin dashboard
      } else {
        setErrors({ form: 'Access denied. Admin account required.' });
      }
    } catch (err) {
      console.error('Admin login error:', err);
      setErrors({ form: 'Invalid email or password. Please try again.' });
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-hero">
          <button className="back-btn" onClick={onBack}>← Back</button>
          <h1 className="logo-title">Admin Login</h1>
          <p className="logo-subtitle">Access administrator dashboard</p>
          <p className="hero-description">
            Manage vendors, oversee platform activity, and maintain quality on StreetBites.
          </p>
        </div>

        <main className="login-content">
          <form className="email-form" onSubmit={handleSubmit} noValidate>
            {errors.form && <p className="error-message form-error">{errors.form}</p>}

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
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
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Login as Admin
            </button>
          </form>

          <div className="signup-section">
            <span className="signup-text">
              Don’t have an account? <Link to="/admin-signup" className="signup-link">Sign Up</Link>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLogin;
