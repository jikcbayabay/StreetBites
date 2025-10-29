// src/pages/AdminSignup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../../firebase.js"; 
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import bcrypt from 'bcryptjs';
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
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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

    // Validate all fields
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      // Check if email already has a pending request
      const requestsRef = collection(db, 'admin_requests');
      const q = query(requestsRef, where('email', '==', formData.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const existingRequest = querySnapshot.docs[0].data();
        if (existingRequest.status === 'pending') {
          setErrors({ email: 'A request with this email is already pending approval' });
          setIsLoading(false);
          return;
        }
      }

      // Hash the password before storing
      const hashedPassword = await bcrypt.hash(formData.password, 10);

      // Create admin request in Firestore with proper field names
      await addDoc(collection(db, 'admin_requests'), {
        first_name: formData.firstName,
        last_name: formData.lastName,
        contact_number: formData.contactNumber,
        email: formData.email,
         hashed_password: hashedPassword,
        temp_password: formData.password, // Store temporarily for admin account creation
        status: 'pending',
        created_at: new Date(),
        updated_at: new Date(),
      });

      console.log('Admin request submitted successfully');
      setShowSuccessPopup(true);

    } catch (error) {
      console.error('Admin request submission error:', error);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to submit request. ';
      if (error.code === 'permission-denied') {
        errorMessage += 'Permission denied. Please check your internet connection and try again.';
      } else if (error.code === 'unavailable') {
        errorMessage += 'Service unavailable. Please check your internet connection.';
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please try again.';
      }
      
      setErrors({ general: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  const closePopupAndRedirect = () => {
    setShowSuccessPopup(false);
    navigate('/login');
  };

  return (
    <>
      <div className="login-page">
        <div className="login-wrapper">
          <div className="login-hero">
            <button className="back-btn" onClick={handleBack}>
              ← Back
            </button>
            <h1 className="logo-title">Admin Access Request</h1>
            <p className="logo-subtitle">
              {step === 1 ? 'Administrator Registration' : 'Setup Admin Account'}
            </p>
            <p className="hero-description">
              {step === 1
                ? 'Request administrator access. Your request will be reviewed by an existing administrator.'
                : 'Complete your admin access request by providing your email and creating a secure password.'}
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
                  {isLoading ? 'Submitting Request...' : 'Submit Admin Request'}
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

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="popup-overlay" onClick={closePopupAndRedirect}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-icon">✓</div>
            <h2 className="popup-title">Request Confirmed</h2>
            <p className="popup-message">
              Your administrator access request has been submitted successfully. 
              You will be notified once an existing administrator reviews your request.
            </p>
            <button className="popup-btn" onClick={closePopupAndRedirect}>
              Back to Login
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .popup-content {
          background: white;
          border-radius: 12px;
          padding: 2.5rem;
          max-width: 400px;
          width: 90%;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .popup-icon {
          font-size: 4rem;
          color: #22c55e;
          margin-bottom: 1rem;
        }

        .popup-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .popup-message {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .popup-btn {
          background-color: #f97316;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .popup-btn:hover {
          background-color: #ea580c;
        }
      `}</style>
    </>
  );
};

export default AdminSignup;