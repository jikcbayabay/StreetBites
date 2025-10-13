// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import all your pages
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SearchResultsPage from './pages/SearchResultsPage';
import MapsPage from './pages/MapsPage';
import AccountPage from './pages/AccountPage';
import EmailSettingsPage from './pages/EmailSettingsPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import SecurityPage from './pages/SecurityPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search/:query" element={<SearchResultsPage />} />
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/email-settings" element={<EmailSettingsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;