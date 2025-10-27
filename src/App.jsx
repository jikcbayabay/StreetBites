// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './services/firebase';
import { onAuthStateChanged, setPersistence, browserSessionPersistence } from 'firebase/auth';

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
import VendorDashboard from './pages/VendorDashboard';
import MenuPage from './pages/MenuPage';
import VendorProfilePage from './pages/VendorProfilePage';
import WriteReviewPage from './pages/WriteReviewPage';

// Protected Route Component
const ProtectedRoute = ({ children, isAuthenticated, isLoading }) => {
  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Public Route Component (redirects to home if already authenticated)
const PublicRoute = ({ children, isAuthenticated, isLoading }) => {
  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  return !isAuthenticated ? children : <Navigate to="/home" replace />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set Firebase to only persist authentication for the current session
    // This will clear authentication when the browser tab/window is closed
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        console.log('Session persistence set');
      })
      .catch((error) => {
        console.error('Error setting persistence:', error);
      });

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Redirect root ("/") to login page */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Public Authentication routes - redirect to home if already logged in */}
          <Route 
            path="/login" 
            element={
              <PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <LoginPage />
              </PublicRoute>
            } 
          />
          <Route 
            path="/admin-login" 
            element={
              <PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <AdminLogin />
              </PublicRoute>
            } 
          />
          <Route 
            path="/user-login" 
            element={
              <PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <UserLogin />
              </PublicRoute>
            } 
          />
          <Route 
            path="/vendor-login" 
            element={
              <PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <VendorLogin />
              </PublicRoute>
            } 
          />
          <Route 
            path="/admin-sign" 
            element={
              <PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <AdminSign />
              </PublicRoute>
            } 
          />
          <Route 
            path="/user-sign" 
            element={
              <PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <UserSign />
              </PublicRoute>
            } 
          />
          <Route 
            path="/vendor-signup" 
            element={
              <PublicRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <VendorSign />
              </PublicRoute>
            } 
          />

          {/* Protected Main app routes - require authentication */}
          <Route 
            path="/home" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <HomePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/search/:category" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <SearchResultsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/maps" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <MapsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/favorites" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <Favorites />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/menu/:vendorId" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <MenuPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/vendor/:vendorId" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <VendorProfilePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/vendor/:vendorId/review" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <WriteReviewPage />
              </ProtectedRoute>
            } 
          />

          {/* Protected Settings and info routes */}
          <Route 
            path="/account" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <AccountPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/email-settings" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <EmailSettingsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/security" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <SecurityPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/faq" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <FAQPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/privacy-policy" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <PrivacyPolicyPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/terms-of-service" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <TermsOfServicePage />
              </ProtectedRoute>
            } 
          />

          {/* Protected Vendor dashboard */}
          <Route 
            path="/vendor-dashboard" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}>
                <VendorDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;