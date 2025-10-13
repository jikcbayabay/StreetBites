// src/pages/VendorSignup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import vendorSignupService from '../services/vendorSignupService';
import './LoginPage.css';

const VendorSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1 or 2
  const [formData, setFormData] = useState({
    email: '',
    businessName: '',
    address: '',
    operatingHours: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Validate email
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Normalize email
  const normalizeEmail = (email) => email.trim().toLowerCase();

  // Event handlers
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      const normalized = normalizeEmail(value);
      setFormData((prev) => ({ ...prev, email: normalized }));

      if (validateEmail(normalized)) {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNextStep1 = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setStep(2);
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      navigate('/login');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate Step 2 fields
    const newErrors = {};
    
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!formData.operatingHours.trim()) {
      newErrors.operatingHours = 'Operating hours are required';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setIsLoading(true);
    
    try {
      // Call the vendor application service
      const result = await vendorSignupService.applyAsVendor({
        email: formData.email,
        businessName: formData.businessName,
        address: formData.address,
        operatingHours: formData.operatingHours
      });
      
      console.log('Vendor application successful:', result);
      
      // Redirect to vendor dashboard or success page
      navigate('/vendor-dashboard');
      
    } catch (error) {
      console.error('Vendor application error:', error);
      setErrors({ 
        submit: error.message || 'Application failed. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-hero">
          <button className="back-btn" onClick={handleBack} disabled={isLoading}>
            ← Back
          </button>
          <h1 className="logo-title">Apply as Vendor</h1>
          <p className="logo-subtitle">
            {step === 1 ? 'Verify Your Account' : 'Business Information'}
          </p>
          <p className="hero-description">
            {step === 1
              ? 'Enter the email address associated with your existing user account to continue.'
              : 'Tell us about your business. Your application will be reviewed by our team for approval.'}
          </p>
        </div>

        <main className="login-content">
          {/* Step 1: Email Verification */}
          {step === 1 && (
            <form className="email-form" onSubmit={handleNextStep1} noValidate>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="juan@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
                <small style={{ display: 'block', marginTop: '8px', color: '#6b7280', fontSize: '13px' }}>
                  Use the email from your existing StreetBites account
                </small>
              </div>

              <button type="submit" className="submit-btn">Next</button>
            </form>
          )}

          {/* Step 2: Business Information */}
          {step === 2 && (
            <form className="email-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="businessName" className="form-label">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  className="form-input"
                  placeholder="Jack's Cool Drinks"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
                {errors.businessName && (
                  <span className="error-message">{errors.businessName}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Business Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-input"
                  placeholder="Etivac"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
                {errors.address && (
                  <span className="error-message">{errors.address}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="operatingHours" className="form-label">
                  Operating Hours
                </label>
                <input
                  type="text"
                  id="operatingHours"
                  name="operatingHours"
                  className="form-input"
                  placeholder="1pm to 3pm"
                  value={formData.operatingHours}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
                {errors.operatingHours && (
                  <span className="error-message">{errors.operatingHours}</span>
                )}
              </div>

              <div className="form-group" style={{ 
                backgroundColor: '#f3f4f6', 
                padding: '12px', 
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
                  <strong>📋 Application Status:</strong> Pending Review
                </p>
                <small style={{ display: 'block', marginTop: '4px', color: '#6b7280', fontSize: '12px' }}>
                  Your vendor application will be reviewed by our team. You'll receive an email notification once approved.
                </small>
              </div>

              {errors.submit && (
                <div className="error-message" style={{ marginBottom: '16px', textAlign: 'center' }}>
                  {errors.submit}
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </form>
          )}

          <div className="signup-section">
            <span className="signup-text">
              Don't have an account?{' '}
              <a href="/user-sign" className="signup-link">
                Create User Account First
              </a>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorSignup;