import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Favorites.css';

const Favorites = () => {
  const navigate = useNavigate();

  const [mainFavorite, setMainFavorite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      setError(null);
      try {
        // ➡️ Replace with your actual API endpoint for favorites.
        // For now, it will use a mock object.
        // Your API should return a list of detailed favorite items.
        // We'll use the first item in the list for the main UI.
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
        // Fallback mock data to match the UI
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
          <span>&#x22EF;</span> {/* More options icon */}
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

            {/* Placeholder for other favorites section/gallery */}
            <div className="other-favorites-ui">
              {/* This section is a placeholder to represent the bottom part of your screenshot */}
              <p>Other favorite places will go here.</p>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Favorites;