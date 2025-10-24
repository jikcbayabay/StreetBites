import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { db, auth } from '../../firebase.js'; // Import Firebase services
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import './LoginPage.css'; // Assuming you are reusing the same CSS

const UserLogin = ({ onBack }) => {
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

  // UPDATED: handleSubmit now includes Firebase login and redirection logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    if (!validateEmail(email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }
    if (!password) {
      setErrors(prev => ({ ...prev, password: 'Password is required' }));
      return;
    }

    try {
      // 1. Sign in the user with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Fetch the user's role from the 'users' collection
      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      // 3. Redirect based on role
      if (userDocSnap.exists() && userDocSnap.data().role === 'admin') {
        navigate('/admin'); // Redirect admins to their dashboard
      } else {
        navigate('/'); // Redirect regular users to the homepage
      }

    } catch (err) {
      console.error("Login Error:", err);
      setErrors({ form: 'Invalid email or password. Please try again.' });
    }
  };

  return (
    <div className="login-page">
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
            {errors.form && <p className="error-message form-error">{errors.form}</p>}
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
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
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
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