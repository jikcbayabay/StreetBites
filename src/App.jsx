// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import all your pages correctly
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
import AdminSignup from './pages/AdminSignup';
import UserSignup from './pages/UserSignup';
import VendorSignup from './pages/VendorSignup';
import VendorDashboard from './pages/VendorDashboard';
import MenuPage from './pages/MenuPage';
import VendorProfilePage from './pages/VendorProfilePage';
import WriteReviewPage from './pages/WriteReviewPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Authentication */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-signup" element={<UserSignup />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/vendor-signup" element={<VendorSignup />} />

          {/* Main */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search/:category" element={<SearchResultsPage />} />
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/menu/:vendorId" element={<MenuPage />} />
          <Route path="/vendor/:vendorId" element={<VendorProfilePage />} />
          <Route path="/vendor/:vendorId/review" element={<WriteReviewPage />} />

          {/* Settings & Info */}
          <Route path="/account" element={<AccountPage />} />
          <Route path="/email-settings" element={<EmailSettingsPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />

          {/* Dashboards */}
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* ✅ Added Admin Dashboard route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
