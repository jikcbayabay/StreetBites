import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Favorites.css';

const Favorites = () => {
  const navigate = useNavigate();

  const [mainFavorite, setMainFavorite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // States and items for the bottom navbar, copied from HomePage
  const [activeNav, setActiveNav] = useState('favorites');
  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'maps', label: 'Maps', path: '/maps' },
    { id: 'favorites', label: 'Favorites', path: '/favorites' },
    { id: 'profile', label: 'Profile', path: '/profile' }
  ];

  const styles = {
    bottomNav: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      backgroundColor: 'white',
      borderTop: '1px solid #e5e7eb',
      padding: '8px 16px 12px',
      zIndex: 40,
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)'
    },
    navContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      maxWidth: '100%',
      margin: '0 auto',
      padding: '0'
    },
    navItem: {
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
    },
    navLabel: {
      fontSize: '11px',
      fontWeight: '500'
    }
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/favorites-details'); 
        if (!response.ok) {
          throw new Error('Failed to fetch favorites');
        }
        const data = await response.json();
        if (data && data.length > 0) {
          setMainFavorite(data[0]);
        } else {
          setMainFavorite(null);
        }
      } catch (err) {
        console.error('Error fetching favorites:', err);
        setError('Failed to load favorite details. Please try again.');
        setMainFavorite({
          id: '1',
          name: 'Fairview 2025',
          location: 'Private room in Mandaluyong',
          details: 'Container Home Mandaluyong | N04(1)',
          beds: '1 bed',
          rating: 4.7,
          imageUrl: 'https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Favorite+Venue',
        });
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="favorites-page-ui">
      {/* Header */}
      <header className="favorites-header-ui">
        <button onClick={handleBack} className="back-button-ui">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div className="header-options-ui">
          <span>&#x22EF;</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="favorites-main-ui">
        {loading && <p className="loading-message-ui">Loading favorite...</p>}
        {error && <p className="error-message-ui">{error}</p>}

        {!loading && !error && mainFavorite && (
          <>
            <h1 className="favorites-title-ui">{mainFavorite.name}</h1>
            
            {/* Action Buttons */}
            <div className="action-buttons-ui">
              <button className="date-guests-button-ui">Dates · 2 guests</button>
              <button className="share-button-ui">
                Share <span>&#x2197;</span>
              </button>
            </div>

            {/* Favorite Item Image */}
            <div className="favorite-image-container-ui">
              <img src={mainFavorite.imageUrl} alt={mainFavorite.name} className="favorite-image-ui" />
              <div className="image-overlay-ui">
                <span className="heart-icon-ui">&#x2764;</span>
              </div>
            </div>

            {/* Item Details */}
            <div className="favorite-details-ui">
              <p className="favorite-location-ui">{mainFavorite.location}</p>
              <p className="favorite-other-details-ui">
                {mainFavorite.details} · {mainFavorite.beds}
                <span className="rating-ui">★ {mainFavorite.rating}</span>
              </p>
            </div>

            {/* Add Note Section */}
            <div className="add-note-ui">
              Add note
            </div>
          </>
        )}
      </main>

      {/* Bottom Navigation */}
      <div style={styles.bottomNav}>
        <div style={styles.navContainer}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              style={{
                ...styles.navItem,
                color: activeNav === item.id ? '#dc2626' : '#6b7280'
              }}
              onClick={() => setActiveNav(item.id)}
            >
              <svg style={{width: '22px', height: '22px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {item.id === 'home' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>}
                {item.id === 'maps' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>}
                {item.id === 'favorites' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>}
                {item.id === 'profile' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>}
              </svg>
              <span style={styles.navLabel}>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;