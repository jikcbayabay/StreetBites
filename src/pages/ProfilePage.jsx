import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page-background">
      <div className="profile-container">
        <header className="profile-header">
          <button className="collapse-button">^</button>
        </header>

        <section className="user-info-section">
          <img
            src="https://placehold.co/60x60/F9A8D4/A90C6B?text=JD"
            alt="Juan Dela Cruz"
            className="profile-picture"
          />
          <div className="user-details">
            <span className="user-name">Juan Dela Cruz</span>
            <span className="user-handle">@JD.CRUZ</span>
          </div>
          <span className="arrow-icon">{'>'}</span>
        </section>

        <nav className="settings-list">
          <div className="settings-item">
            <span>Account</span>
            <span className="arrow-icon">{'>'}</span>
          </div>
          <div className="settings-item">
            <span>Language</span>
            <span className="arrow-icon">{'>'}</span>
          </div>
          <div className="settings-item">
            <span>Email settings</span>
            <span className="arrow-icon">{'>'}</span>
          </div>
          <div className="settings-item">
            <span>Security</span>
            <span className="arrow-icon">{'>'}</span>
          </div>
        </nav>

        <nav className="info-list">
          <div className="info-item">
            <span>FAQ</span>
            <span className="external-link-icon">↗</span>
          </div>
          <div className="info-item">
            <span>Terms of Service</span>
            <span className="external-link-icon">↗</span>
          </div>
          <div className="info-item">
            <span>Privacy Policy</span>
            <span className="external-link-icon">↗</span>
          </div>
        </nav>

        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;

