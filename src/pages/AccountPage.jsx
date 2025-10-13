import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const AccountPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/profile');
  };

  return (
    <div className="profile-page-background">
      <div className="profile-container account-page">
        <header className="profile-header">
          <span className="header-title">Account</span>
          <button className="collapse-button" onClick={handleBack}>←</button>
        </header>
        <div className="content-section">
          <h2 className="section-title">Account Settings</h2>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" value="juan@example.com" readOnly />
          </div>
          <div className="form-group">
            <label className="form-label">Display Name</label>
              <input type="text" className="form-input" defaultValue="Juan Dela Cruz" />
          </div>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input type="text" className="form-input" defaultValue="@JD.CRUZ" />
          </div>
          <div className="form-group">
            <label className="form-label">Bio</label>
            <textarea className="form-textarea" placeholder="Tell us about yourself..."></textarea>
          </div>
          <div className="button-group">
            <button className="btn-primary">Save Changes</button>
            <button className="btn-secondary">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;