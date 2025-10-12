// src/components/BottomNav.jsx
import React from 'react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <div className="nav-item active">🏠<br/>Home</div>
      <div className="nav-item">🗺️<br/>Maps</div>
      <div className="nav-item">⭐<br/>Favorites</div>
      <div className="nav-item">👤<br/>Profile</div>
    </nav>
  );
};

export default BottomNav;