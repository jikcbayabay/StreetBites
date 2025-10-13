import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const [activeNav, setActiveNav] = useState('profile');
  const navigate = useNavigate(); // for redirecting to LoginPage

  const handleLogout = () => {
    // Optional: clear user session data
    localStorage.removeItem('user');
    sessionStorage.clear();

    // Redirect to LoginPage
    navigate('/login');
  };

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'maps', label: 'Maps', path: '/maps' },
    { id: 'favorites', label: 'Favorites', path: '/favorites' },
    { id: 'profile', label: 'Profile', path: '/profile' }
  ];

  const settingsItems = [
    { label: 'Account', path: '/account' },
    { label: 'Language', path: '/language' },
    { label: 'Email settings', path: '/email-settings' },
    { label: 'Security', path: '/security' }
  ];

  const infoItems = [
    { label: 'FAQ', path: '/faq', external: true },
    { label: 'Terms of Service', path: '/terms-of-service', external: false },
    { label: 'Privacy Policy', path: '/privacy-policy', external: false }
  ];

  const bottomNavStyles = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTop: '1px solid #e5e7eb',
    padding: '8px 16px 12px',
    zIndex: 40,
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
    maxWidth: '100%'
  };

  const navContainerStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: '100%',
    margin: '0 auto',
    padding: '0'
  };

  const navItemStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px 12px',
    minWidth: '60px',
    transition: 'all 0.3s',
    borderRadius: '8px',
    textDecoration: 'none'
  };

  return (
    <div className="profile-page-background">
      <div className="profile-container">
        <header className="profile-header"></header>

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
          {settingsItems.map((item, index) => (
            <Link key={index} to={item.path} className="settings-item">
              <span>{item.label}</span>
              <span className="arrow-icon">{'>'}</span>
            </Link>
          ))}
        </nav>

        <nav className="info-list">
          {infoItems.map((item, index) => (
            <Link key={index} to={item.path} className="info-item">
              <span>{item.label}</span>
              <span className="external-link-icon">↗</span>
            </Link>
          ))}
        </nav>

        {/* Logout button */}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Bottom Navigation */}
      <div style={bottomNavStyles}>
        <div style={navContainerStyles}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              style={{
                ...navItemStyles,
                color: activeNav === item.id ? '#dc2626' : '#6b7280'
              }}
              onClick={() => setActiveNav(item.id)}
            >
              <svg
                style={{ width: '22px', height: '22px' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {item.id === 'home' && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                )}
                {item.id === 'maps' && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  ></path>
                )}
                {item.id === 'favorites' && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                )}
                {item.id === 'profile' && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                )}
              </svg>
              <span style={{ fontSize: '11px', fontWeight: '500' }}>
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
