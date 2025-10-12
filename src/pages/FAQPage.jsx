import React from 'react';
import './ProfilePage.css';

export const FAQPage = ({ onBack }) => {
  return (
    <div className="profile-page-background">
      <div className="profile-container faq-page">
        <header className="profile-header">
          <span className="header-title">FAQ</span>
          <button className="collapse-button" onClick={onBack}>^</button>
        </header>
        <div className="content-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <details>
            <summary>How do I reset my password?</summary>
            <p>Go to the Security section and click "Update Password". Follow the prompts to set a new password.</p>
          </details>

          <details>
            <summary>How do I change my language preference?</summary>
            <p>Visit the Language settings page and select your preferred language from the available options.</p>
          </details>

          <details>
            <summary>How do I enable two-factor authentication?</summary>
            <p>Go to Security settings and toggle on "Two-Factor Authentication". Follow the setup instructions.</p>
          </details>

          <details>
            <summary>Can I delete my account?</summary>
            <p>Contact our support team for account deletion requests. Account deletion is permanent and cannot be undone.</p>
          </details>
        </div>
      </div>
    </div>
  );
};