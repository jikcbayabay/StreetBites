import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const EmailSettingsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/profile');
  };

  return (
    <div className="profile-page-background">
      <div className="profile-container email-settings-page">
        <header className="profile-header">
          <span className="header-title">Email Settings</span>
          <button className="collapse-button" onClick={handleBack}>←</button>
        </header>
        <div className="content-section">
          <h2 className="section-title">Email Preferences</h2>
          <div className="toggle-switch">
            <span className="toggle-label">Marketing Emails</span>
            <input type="checkbox" className="toggle-checkbox" defaultChecked />
          </div>
          <div className="toggle-switch">
            <span className="toggle-label">Account Notifications</span>
            <input type="checkbox" className="toggle-checkbox" defaultChecked />
          </div>
          <div className="toggle-switch">
            <span className="toggle-label">Weekly Digest</span>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
          <div className="toggle-switch">
            <span className="toggle-label">Security Alerts</span>
            <input type="checkbox" className="toggle-checkbox" defaultChecked />
          </div>
          <div className="form-group" style={{ marginTop: '2rem' }}>
            <label className="form-label">Primary Email</label>
            <input type="email" className="form-input" value="juan@example.com" readOnly />
          </div>
          <div className="button-group">
            <button className="btn-primary">Save Preferences</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSettingsPage;