import React from 'react';
import './ProfilePage.css';

export const PrivacyPolicyPage = ({ onBack }) => {
  return (
    <div className="profile-page-background">
      <div className="profile-container privacy-page">
        <header className="profile-header">
          <span className="header-title">Privacy Policy</span>
          <button className="collapse-button" onClick={onBack}>^</button>
        </header>
        <div className="content-section">
          <h2 className="section-title">Privacy Policy</h2>
          
          <h3>1. Information Collection</h3>
          <p>We collect information you provide directly to us, such as when you create an account or update your profile. This includes your name, email address, and other details you choose to share.</p>

          <h3>2. How We Use Information</h3>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Send marketing communications</li>
          </ul>

          <h3>3. Data Security</h3>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h3>4. Your Rights</h3>
          <p>You have the right to access, update, or delete your personal information at any time by logging into your account or contacting us.</p>
        </div>
      </div>
    </div>
  );
};