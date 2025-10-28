// src/pages/VendorSignup.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import vendorSignupService from '../services/vendorSignupService';
import './VendorSignup.css';

const VendorSignup = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [formData, setFormData] = useState({
    businessName: '',
    address: '',
    operatingHours: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Check authentication on component mount
  useEffect(() => {
    const user = auth.currentUser;
    console.log('Current authenticated user:', user);
    
    if (user) {
      setCurrentUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName
      });
    } else {
      console.error('No authenticated user found');
      setErrors({ auth: 'You must be logged in to apply as a vendor' });
    }
    
    setIsCheckingAuth(false);
  }, []);

  // Event handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBack = () => {
    navigate('/profile');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if user is authenticated
    if (!currentUser) {
      setErrors({ auth: 'You must be logged in to apply as a vendor' });
      return;
    }
    
    // Validate fields
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
      // Call the vendor application service with UID
      const result = await vendorSignupService.applyAsVendor({
        uid: currentUser.uid,
        email: currentUser.email,
        businessName: formData.businessName,
        address: formData.address,
        operatingHours: formData.operatingHours
      });
      
      console.log('Vendor application successful:', result);
      
      // Show success message
      alert('Application submitted successfully! You will be notified once approved.');
      
      // Redirect back to profile
      navigate('/profile');
      
    } catch (error) {
      console.error('Vendor application error:', error);
      setErrors({ 
        submit: error.message || 'Application failed. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="profile-page-background">
        <div className="profile-container">
          <div className="vendor-loading">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page-background account-page vendor-signup-page">
      <div className="profile-container">
        <header className="profile-header">
          <button 
            className="collapse-button" 
            onClick={handleBack} 
            disabled={isLoading}
          >
            ←
          </button>
          <h1 className="header-title">Apply as Vendor</h1>
        </header>

        <div className="content-section">
          <h2 className="section-title">Business Information</h2>
          
          <p className="vendor-description">
            Tell us about your business. Your application will be reviewed by our team for approval.
          </p>

          <form onSubmit={handleSubmit} noValidate>
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
                disabled={isLoading || !currentUser}
              />
              {errors.businessName && (
                <span className="vendor-error">{errors.businessName}</span>
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
                placeholder="123 Main Street, City"
                value={formData.address}
                onChange={handleChange}
                required
                disabled={isLoading || !currentUser}
              />
              {errors.address && (
                <span className="vendor-error">{errors.address}</span>
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
                placeholder="Mon-Fri: 9AM-5PM"
                value={formData.operatingHours}
                onChange={handleChange}
                required
                disabled={isLoading || !currentUser}
              />
              {errors.operatingHours && (
                <span className="vendor-error">{errors.operatingHours}</span>
              )}
            </div>

            {errors.submit && (
              <div className="vendor-submit-error">
                {errors.submit}
              </div>
            )}

            <div className="button-group">
              <button 
                type="submit" 
                className="btn-primary" 
                disabled={isLoading || !currentUser}
              >
                {isLoading ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </div>
          </form>

          <div className="vendor-help-section">
            Need help?{' '}
            <a href="/faq" className="vendor-help-link">
              View FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSignup;