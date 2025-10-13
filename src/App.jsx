// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import Favorites from './pages/Favorites';
import AdminLogin from './pages/AdminLogin';
import LoginPage from './pages/LoginPage';
import UserLogin from './pages/UserLogin';
import VendorLogin from './pages/VendorLogin';
import AdminSign from './pages/AdminSignup';
import UserSign from './pages/UserSignup';
import VendorSign from './pages/VendorSignup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Redirect root ("/") to LoginPage */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* All other routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search/:query" element={<SearchResultsPage />} />
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/email-settings" element={<EmailSettingsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-sign" element={<AdminSign />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-sign" element={<UserSign />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/vendor-signup" element={<VendorSign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
