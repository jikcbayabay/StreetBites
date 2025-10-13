import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroBg from "../assets/hero-bg1.jpg";

// Import all category images
import kwekKwekImage from '../assets/kwek-kwek.jpg';
import betamaxImage from '../assets/betamax.jpg';
import isawImage from '../assets/isaw.png';
import barbecueImage from '../assets/barbecue.png';

// Import the new recommended place images
import mangLarrysImage from '../assets/MLs.png';
import redTakImage from '../assets/redtak.png';
import globeLumpiaImage from '../assets/globe.png';

const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      navigate(`/search/${searchText}`);
    }
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/search/${categoryName}`);
  };

  const categories = [
    { name: 'Isaw', image: isawImage },
    { name: 'Barbecue', image: barbecueImage },
    { name: 'Kwek-Kwek', image: kwekKwekImage },
    { name: 'Betamax', image: betamaxImage }
  ];

  const tags = [
    { name: 'takoyaki', trending: true },
    { name: 'Turon', trending: true },
    { name: 'Tokwa', recent: true },
    { name: 'Lumpia', trending: true }
  ];

  const recommended = [
    { name: "Mang Larry's - Dahlia", distance: '0.7km', rating: 4.1, image: mangLarrysImage },
    { name: 'RedTak - Quiapo', distance: '5.3km', rating: 4.7, image: redTakImage },
    { name: 'Globe Lumpia - Raon', distance: '5.1km', rating: 4.3, image: globeLumpiaImage }
  ];

  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'maps', label: 'Maps', path: '/maps' },
    { id: 'favorites', label: 'Favorites', path: '/favorites' },
    { id: 'profile', label: 'Profile', path: '/profile' }
  ];

  const styles = {
    homePage: {
      fontFamily: 'Arial, sans-serif',
      paddingBottom: '80px',
      maxWidth: '100vw',
      margin: '0',
      backgroundColor: '#f5f5f5',
      boxShadow: 'none',
      transition: 'all 0.3s ease',
      overflow: 'hidden'
    },
    heroSection: {
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '420px',
      position: 'relative',
      overflow: 'hidden'
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 10
    },
    header: {
      position: 'relative',
      zIndex: 20,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '12px 16px'
    },
    searchSection: {
      position: 'relative',
      zIndex: 20,
      padding: '0 20px',
      marginTop: '20px'
    },
    logo: {
      fontSize: '42px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '50px'
    },
    searchTitle: {
      fontSize: '22px',
      color: 'white',
      fontWeight: '500',
      marginBottom: '20px'
    },
    searchBarContainer: {
      display: 'flex',
      gap: '8px',
      marginBottom: '20px',
      maxWidth: '100%'
    },
    searchInputWrapper: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      padding: '10px 14px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
    },
    searchIcon: {
      width: '18px',
      height: '18px',
      color: '#9ca3af',
      marginRight: '10px'
    },
    searchInput: {
      flex: 1,
      border: 'none',
      outline: 'none',
      fontSize: '15px',
      color: '#374151'
    },
    searchButton: {
      width: '44px',
      height: '44px',
      backgroundColor: '#dc2626',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '22px',
      boxShadow: '0 2px 8px rgba(220, 38, 38, 0.4)'
    },
    mainContent: {
      backgroundColor: 'white',
      borderRadius: '20px 20px 0 0',
      marginTop: '-20px',
      position: 'relative',
      zIndex: 30,
      padding: '24px 20px'
    },
    categoryList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '12px',
      marginBottom: '24px',
      maxWidth: '100%'
    },
    categoryItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 4px'
    },
    categoryIcon: {
      width: '56px',
      height: '56px',
      backgroundColor: '#f3f4f6',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '22px',
      marginBottom: '6px',
      transition: 'background-color 0.3s',
      overflow: 'hidden'
    },
    categoryImage: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover'
    },
    categoryName: {
      fontSize: '11px',
      color: '#374151',
      textAlign: 'center'
    },
    tagCloud: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '24px'
    },
    tagButton: {
      padding: '8px 14px',
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      cursor: 'pointer',
      fontSize: '13px'
    },
    recommendedSection: {
      marginBottom: '20px'
    },
    recommendedTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '14px'
    },
    recommendedList: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '12px'
    },
    placeCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px',
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s'
    },
    placeImage: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(to bottom right, #fee2e2, #fed7aa)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '32px',
      flexShrink: 0,
      overflow: 'hidden'
    },
    placeLogo: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    placeInfo: {
      flex: 1
    },
    placeName: {
      fontWeight: '600',
      color: '#111827',
      marginBottom: '4px',
      fontSize: '14px'
    },
    placeDetails: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    placeDistance: {
      fontSize: '13px',
      color: '#6b7280'
    },
    placeRating: {
      display: 'flex',
      alignItems: 'center',
      gap: '3px'
    },
    ratingValue: {
      fontWeight: '600',
      color: '#111827',
      fontSize: '13px'
    },
    bottomNav: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
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
    }
  };

  return (
    <div style={styles.homePage}>
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>

        {/* Search Section */}
        <div style={styles.searchSection}>
          <h1 style={styles.logo}>StreetBites</h1>
          <p style={styles.searchTitle}>Looking for a place?</p>
          
          <div style={styles.searchBarContainer}>
            <div style={styles.searchInputWrapper}>
              <svg style={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input 
                type="text" 
                style={styles.searchInput} 
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }} 
              />
            </div>
            <button style={styles.searchButton} onClick={handleSearch}>›</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Categories */}
        <div style={styles.categoryList}>
          {categories.map((cat, idx) => (
            <button key={idx} style={styles.categoryItem} onClick={() => handleCategoryClick(cat.name)}>
              <div style={styles.categoryIcon}>
                {cat.image ? (
                  <img src={cat.image} alt={cat.name} style={styles.categoryImage} />
                ) : (
                  cat.icon
                )}
              </div>
              <div style={styles.categoryName}>{cat.name}</div>
            </button>
          ))}
        </div>

        {/* Tag Cloud */}
        <div style={styles.tagCloud}>
          {tags.map((tag, idx) => (
            <button key={idx} style={styles.tagButton}>
              {tag.recent && (
                <svg style={{width: '14px', height: '14px', color: '#6b7280'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              )}
              <span>{tag.name}</span>
              {tag.trending && (
                <svg style={{width: '14px', height: '14px', color: '#dc2626'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Recommended */}
        <div style={styles.recommendedSection}>
          <h2 style={styles.recommendedTitle}>Recommended</h2>
          <div style={styles.recommendedList}>
            {recommended.map((place, idx) => (
              <div key={idx} style={styles.placeCard}>
                <div style={styles.placeImage}>
                  <img src={place.image} alt={place.name} style={styles.placeLogo} />
                </div>
                <div style={styles.placeInfo}>
                  <div style={styles.placeName}>{place.name}</div>
                  <div style={styles.placeDetails}>
                    <span style={styles.placeDistance}>{place.distance}</span>
                    <div style={styles.placeRating}>
                      <svg style={{width: '14px', height: '14px', color: '#fbbf24', fill: '#fbbf24'}} viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span style={styles.ratingValue}>{place.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
              <span style={{fontSize: '11px', fontWeight: '500'}}>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;