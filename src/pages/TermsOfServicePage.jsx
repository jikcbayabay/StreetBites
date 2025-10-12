import React from 'react';
import './ProfilePage.css';

export const TermsOfServicePage = ({ onBack }) => {
  return (
    <div className="profile-page-background">
      <div className="profile-container terms-page">
        <header className="profile-header">
          <span className="header-title">Terms of Service</span>
          <button className="collapse-button" onClick={onBack}>^</button>
        </header>
        <div className="content-section">
          <h2 className="section-title">Terms of Service</h2>
          
          <h3>1. Agreement to Terms</h3>
          <p>By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h3>2. Use License</h3>
          <p>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the application</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>

          <h3>3. Disclaimer</h3>
          <p>The materials on our application are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </div>
      </div>
    </div>
  );
};