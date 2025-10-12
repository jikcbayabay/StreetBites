// src/App.jsx
import React from 'react';
//import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { AccountPage } from './pages/AccountPage';
import { EmailSettingsPage } from './pages/EmailSettingsPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { SecurityPage } from './pages/SecurityPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';

function App() {
  return (
    <div className="App">
      <TermsOfServicePage />
    </div>
  );
}

export default App;