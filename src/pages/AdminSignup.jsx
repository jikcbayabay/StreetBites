// src/pages/AdminSignup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from "../../firebase.js"; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './LoginPage.css';

const AdminSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Utility functions
  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '');
    let formatted = digits;

    if (digits.length > 4 && digits.length <= 7) {
      formatted = `${digits.slice(0, 4)} ${digits.slice(4)}`;
    } else if (digits.length > 7) {
      formatted = `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 11)}`;
    }

    return formatted;
  };

  const validatePhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '');
    return /^09\d{9}$/.test(digits);
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const normalizeEmail = (email) => email.trim().toLowerCase();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'contactNumber') {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, contactNumber: formatted }));

      if (validatePhoneNumber(formatted)) {
        setErrors((prev) => ({ ...prev, contactNumber: '' }));
      }
    } else if (name === 'email') {
      const normalized = normalizeEmail(value);
      setFormData((prev) => ({ ...prev, email: normalized }));

      if (validateEmail(normalized)) {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(formData.contactNumber)) {
      setErrors({ contactNumber: 'Please enter a valid mobile number (09XX XXX XXXX)' });
      return;
    }
    setErrors({});
    setStep(2);
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    else navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }
    if (formData.password.length < 8) {
      setErrors({ password: 'Password must be at least 8 characters' });
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      // Create admin account in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // Save admin data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        contactNumber: formData.contactNumber,
        email: formData.email,
        role: 'admin',
        createdAt: new Date(),
      });

      console.log('Admin signup successful:', user.uid);

      navigate('/admin/dashboard'); // redirect after signup
    } catch (error) {
      console.error('Admin signup error:', error);
      setErrors({ general: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-hero">
          <button className="back-btn" onClick={handleBack}>
            ← Back
          </button>
          <h1 className="logo-title">Admin Sign Up</h1>
          <p className="logo-subtitle">
            {step === 1 ? 'Administrator Registration' : 'Setup Admin Account'}
          </p>
          <p className="hero-description">
            {step === 1
              ? 'Create an administrator account. Please provide your personal information to begin the registration process.'
              : 'Complete your admin account setup by providing your email and creating a secure password.'}
          </p>
        </div>

        <main className="login-content">
          {step === 1 ? (
            <form className="email-form" onSubmit={handleNext} noValidate>
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-input"
                  placeholder="Juan"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-input"
                  placeholder="Dela Cruz"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  className="form-input"
                  placeholder="09XX XXX XXXX"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
                {errors.contactNumber && <span className="error-message">{errors.contactNumber}</span>}
              </div>

              <button type="submit" className="submit-btn">Next</button>
            </form>
          ) : (
            <form className="email-form" onSubmit={handleSubmit} noValidate>
              {errors.general && (
                <div className="error-message" style={{ marginBottom: '1rem' }}>
                  {errors.general}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="admin@streetbites.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength="8"
                  disabled={isLoading}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? 'Creating Admin Account...' : 'Create Admin Account'}
              </button>
            </form>
          )}

          <div className="signup-section">
            <span className="signup-text">
              Already have an account? <a href="/login" className="signup-link">Sign In</a>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminSignup;
