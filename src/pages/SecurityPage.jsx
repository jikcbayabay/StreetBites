import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const SecurityPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/profile');
  };

  return (
    <div className="profile-page-background">
      <div className="profile-container security-page">
        <header className="profile-header">
          <span className="header-title">Security</span>
          <button className="collapse-button" onClick={handleBack}>←</button>
        </header>
        <div className="content-section">
          <h2 className="section-title">Security Settings</h2>
          <div className="form-group">
            <label className="form-label">Current Password</label>
            <input type="password" className="form-input" placeholder="Enter current password" />
          </div>
          <div className="form-group">
            <label className="form-label">New Password</label>
            <input type="password" className="form-input" placeholder="Enter new password" />
          </div>
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-input" placeholder="Confirm new password" />
          </div>
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e8e8e8' }}>
            <h3 className="section-title" style={{ marginTop: 0, marginBottom: '1rem' }}>Two-Factor Authentication</h3>
            <div className="toggle-switch" style={{ borderBottom: 'none' }}>
              <span className="toggle-label">Enable 2FA</span>
              <input type="checkbox" className="toggle-checkbox" />
            </div>
          </div>
          <div className="button-group">
            <button className="btn-primary">Update Password</button>
            <button className="btn-secondary">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;