import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { RecommendationEngine } from '../services/recommendationService';
import heroBg from "../assets/hero-bg1.jpg";

// Import all category images
import kwekKwekImage from '../assets/kwek-kwek.jpg';
import betamaxImage from '../assets/betamax.jpg';
import isawImage from '../assets/isaw.png';
import barbecueImage from '../assets/barbecue.png';

// Import the new recommended place images (fallback images)
import mangLarrysImage from '../assets/MLs.png';
import redTakImage from '../assets/redtak.png';
import globeLumpiaImage from '../assets/globe.png';

// Helper function to calculate vendor rating
const calculateVendorRating = async (vendorId) => {
  try {
    const reviewsSnap = await getDocs(
      query(
        collection(db, 'reviews'),
        where('vendorId', '==', vendorId)
      )
    );

    if (reviewsSnap.empty) {
      return { rating: 0, reviewCount: 0 };
    }

    let totalRating = 0;
    let count = 0;

    reviewsSnap.forEach(doc => {
      const reviewData = doc.data();
      if (reviewData.rating && typeof reviewData.rating === 'number') {
        totalRating += reviewData.rating;
        count++;
      }
    });

    const averageRating = count > 0 ? parseFloat((totalRating / count).toFixed(1)) : 0;
    
    return {
      rating: averageRating,
      reviewCount: count
    };
  } catch (error) {
    console.error(`Error calculating rating for vendor ${vendorId}:`, error);
    return { rating: 0, reviewCount: 0 };
  }
};

const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  // Auth and Recommendations state
  const [currentUser, setCurrentUser] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loadingRecommendations, setLoadingRecommendations] = useState(true);
  const [activeNav, setActiveNav] = useState('home');
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  // All vendors state
  const [allVendors, setAllVendors] = useState([]);
  const [loadingVendors, setLoadingVendors] = useState(true);

  // Interactive states
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredPlace, setHoveredPlace] = useState(null);
  const [hoveredVendor, setHoveredVendor] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log('Auth state changed:', user?.uid || 'logged out');
      setCurrentUser(user);
      setRecommendations([]);
    });

    return () => unsubscribe();
  }, []);

  // Fetch AI recommendations when user is available
  useEffect(() => {
    const fetchRecommendations = async () => {
      setRecommendations([]);
      
      if (!currentUser) {
        console.log('No user logged in, showing default recommendations');
        setLoadingRecommendations(false);
        return;
      }
      
      console.log('Fetching AI recommendations for user:', currentUser.uid);
      setLoadingRecommendations(true);
      
      try {
        const engine = new RecommendationEngine(currentUser.uid);
        const recs = await engine.getRecommendations(3);
        console.log('AI Recommendations received:', recs);
        setRecommendations(recs);
      } catch (err) {
        console.error("Error fetching recommendations:", err);
        setRecommendations([]);
      } finally {
        setLoadingRecommendations(false);
      }
    };

    fetchRecommendations();
  }, [currentUser, refreshTrigger]);

  // Fetch all vendors with ratings
  useEffect(() => {
    const fetchAllVendors = async () => {
      setLoadingVendors(true);
      try {
        // Fetch vendors
        const vendorsSnapshot = await getDocs(collection(db, 'vendor_list'));
        const vendors = vendorsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        console.log(`Fetching ratings for ${vendors.length} vendors...`);

        // Enrich with ratings in batches
        const batchSize = 10;
        const enrichedVendors = [];
        
        for (let i = 0; i < vendors.length; i += batchSize) {
          const batch = vendors.slice(i, i + batchSize);
          
          const enrichedBatch = await Promise.all(
            batch.map(async (vendor) => {
              const { rating, reviewCount } = await calculateVendorRating(vendor.id);
              return {
                ...vendor,
                rating,
                reviewCount
              };
            })
          );
          
          enrichedVendors.push(...enrichedBatch);
        }

        console.log('All vendors loaded with ratings:', enrichedVendors.length);
        setAllVendors(enrichedVendors);
      } catch (error) {
        console.error('Error fetching vendors:', error);
        setAllVendors([]);
      } finally {
        setLoadingVendors(false);
      }
    };

    fetchAllVendors();
  }, []);

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      navigate(`/search/${searchText.trim().toLowerCase()}`);
    }
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/search/${categoryName.toLowerCase()}`);
  };

  const handlePlaceClick = (vendorId) => {
    navigate(`/menu/${vendorId}`);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    console.log('Manual refresh triggered');
    setRefreshTrigger(prev => prev + 1);
    
    // Add a minimum delay for visual feedback
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const categories = [
    { name: 'Isaw', image: isawImage },
    { name: 'Barbecue', image: barbecueImage },
    { name: 'Kwek-Kwek', image: kwekKwekImage },
    { name: 'Betamax', image: betamaxImage }
  ];

  const fallbackRecommended = [
    { name: "Mang Larry's - Dahlia", distance: '0.7km', rating: 4.1, image: mangLarrysImage },
    { name: 'RedTak - Quiapo', distance: '5.3km', rating: 4.7, image: redTakImage },
    { name: 'Globe Lumpia - Raon', distance: '5.1km', rating: 4.3, image: globeLumpiaImage }
  ];

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
      marginBottom: '50px',
      animation: 'fadeInDown 0.6s ease-out'
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
      boxShadow: searchFocused 
        ? '0 4px 12px rgba(220, 38, 38, 0.3)' 
        : '0 2px 8px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease',
      transform: searchFocused ? 'scale(1.02)' : 'scale(1)'
    },
    searchIcon: {
      width: '18px',
      height: '18px',
      color: '#9ca3af',
      marginRight: '10px',
      transition: 'color 0.3s'
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
      boxShadow: '0 2px 8px rgba(220, 38, 38, 0.4)',
      transition: 'all 0.3s',
      transform: 'scale(1)'
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
      padding: '8px 4px',
      transition: 'transform 0.3s'
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
      transition: 'all 0.3s',
      overflow: 'hidden'
    },
    categoryImage: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
      transition: 'transform 0.3s'
    },
    categoryName: {
      fontSize: '11px',
      color: '#374151',
      textAlign: 'center',
      transition: 'color 0.3s'
    },
    recommendedSection: {
      marginBottom: '20px'
    },
    recommendedTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    recommendedTitleLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    refreshButton: {
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '6px 12px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '12px',
      color: '#6b7280',
      transition: 'all 0.3s',
      transform: isRefreshing ? 'rotate(360deg)' : 'rotate(0deg)'
    },
    aiIcon: {
      fontSize: '20px',
      animation: 'bounce 2s infinite'
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
      transition: 'all 0.3s ease',
      transform: 'translateY(0)'
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
      overflow: 'hidden',
      transition: 'transform 0.3s'
    },
    placeLogo: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s'
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
    loadingText: {
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '14px',
      padding: '20px'
    },
    allVendorsSection: {
      marginBottom: '20px',
      marginTop: '32px'
    },
    allVendorsTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '14px'
    },
    vendorsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '12px'
    },
    vendorCard: {
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: 'translateY(0)'
    },
    vendorCardImage: {
      width: '100%',
      height: '120px',
      objectFit: 'cover',
      backgroundColor: '#f3f4f6',
      transition: 'transform 0.3s'
    },
    vendorCardContent: {
      padding: '10px'
    },
    vendorCardName: {
      fontWeight: '600',
      fontSize: '14px',
      color: '#111827',
      marginBottom: '4px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    vendorCardCategory: {
      fontSize: '12px',
      color: '#6b7280',
      marginBottom: '6px'
    },
    vendorCardFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    vendorCardRating: {
      display: 'flex',
      alignItems: 'center',
      gap: '3px'
    },
    vendorCardPrice: {
      fontSize: '12px',
      fontWeight: '600',
      color: '#111827'
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

  // Dynamic styles for hover effects
  const getCategoryStyle = (idx) => ({
    ...styles.categoryItem,
    transform: hoveredCategory === idx ? 'scale(1.1)' : 'scale(1)'
  });

  const getCategoryIconStyle = (idx) => ({
    ...styles.categoryIcon,
    backgroundColor: hoveredCategory === idx ? '#fee2e2' : '#f3f4f6',
    boxShadow: hoveredCategory === idx ? '0 4px 12px rgba(220, 38, 38, 0.2)' : 'none'
  });

  const getPlaceCardStyle = (idx) => ({
    ...styles.placeCard,
    boxShadow: hoveredPlace === idx ? '0 8px 16px rgba(0, 0, 0, 0.15)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
    transform: hoveredPlace === idx ? 'translateY(-4px)' : 'translateY(0)',
    borderColor: hoveredPlace === idx ? '#dc2626' : '#e5e7eb'
  });

  const getVendorCardStyle = (idx) => ({
    ...styles.vendorCard,
    boxShadow: hoveredVendor === idx ? '0 8px 16px rgba(0, 0, 0, 0.15)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
    transform: hoveredVendor === idx ? 'translateY(-4px)' : 'translateY(0)',
    borderColor: hoveredVendor === idx ? '#dc2626' : '#e5e7eb'
  });

  // Render recommendations or fallback
  const renderRecommendations = () => {
    if (loadingRecommendations) {
      return <div style={styles.loadingText}>Loading recommendations...</div>;
    }

    const displayRecommendations = recommendations.length > 0 
      ? recommendations.map(vendor => ({
          id: vendor.id,
          name: vendor.businessName || vendor.name || 'Unknown Vendor',
          distance: vendor.distance ? `${vendor.distance.toFixed(1)}km` : 'N/A',
          rating: vendor.rating || 0,
          image: vendor.imageURL || vendor.imageUrl || vendor.image || mangLarrysImage
        }))
      : fallbackRecommended;

    return (
      <div style={styles.recommendedList}>
        {displayRecommendations.map((place, idx) => (
          <div 
            key={place.id || idx} 
            style={getPlaceCardStyle(idx)}
            onMouseEnter={() => setHoveredPlace(idx)}
            onMouseLeave={() => setHoveredPlace(null)}
            onClick={() => {
              if (place.id) {
                handlePlaceClick(place.id);
              }
            }}
          >
            <div style={styles.placeImage}>
              <img 
                src={place.image} 
                alt={place.name} 
                style={{
                  ...styles.placeLogo,
                  transform: hoveredPlace === idx ? 'scale(1.1)' : 'scale(1)'
                }} 
              />
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
    );
  };

  return (
    <div style={styles.homePage}>
      <style>
        {`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}
      </style>
      
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
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }} 
              />
            </div>
            <button 
              style={styles.searchButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.backgroundColor = '#b91c1c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#dc2626';
              }}
              onClick={handleSearch}
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Categories */}
        <div style={styles.categoryList}>
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              style={getCategoryStyle(idx)}
              onMouseEnter={() => setHoveredCategory(idx)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div style={getCategoryIconStyle(idx)}>
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  style={{
                    ...styles.categoryImage,
                    transform: hoveredCategory === idx ? 'scale(1.1)' : 'scale(1)'
                  }} 
                />
              </div>
              <div style={{
                ...styles.categoryName,
                color: hoveredCategory === idx ? '#dc2626' : '#374151'
              }}>
                {cat.name}
              </div>
            </button>
          ))}
        </div>

        {/* Recommended */}
        <div style={styles.recommendedSection}>
          <h2 style={styles.recommendedTitle}>
            <div style={styles.recommendedTitleLeft}>
              {currentUser && recommendations.length > 0 && (
                <span style={styles.aiIcon}>🤖</span>
              )}
              <span>
                {currentUser && recommendations.length > 0 ? 'Recommended For You' : 'Recommended'}
              </span>
            </div>
            {currentUser && (
              <button 
                style={styles.refreshButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#dc2626';
                  e.currentTarget.style.color = '#dc2626';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.color = '#6b7280';
                }}
                onClick={handleRefresh}
                disabled={isRefreshing}
              >
                <svg style={{width: '14px', height: '14px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                Refresh
              </button>
            )}
          </h2>
          {renderRecommendations()}
        </div>

        {/* All Vendors Section */}
        <div style={styles.allVendorsSection}>
          <h2 style={styles.allVendorsTitle}>All Street Food Vendors</h2>
          {loadingVendors ? (
            <div style={styles.loadingText}>Loading vendors...</div>
          ) : allVendors.length > 0 ? (
            <div style={styles.vendorsGrid}>
              {allVendors.map((vendor, idx) => (
                <div
                  key={vendor.id}
                  style={getVendorCardStyle(idx)}
                  onMouseEnter={() => setHoveredVendor(idx)}
                  onMouseLeave={() => setHoveredVendor(null)}
                  onClick={() => handlePlaceClick(vendor.id)}
                >
                  <img
                    src={vendor.imageURL || vendor.imageUrl || mangLarrysImage}
                    alt={vendor.businessName || 'Vendor'}
                    style={{
                      ...styles.vendorCardImage,
                      transform: hoveredVendor === idx ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  <div style={styles.vendorCardContent}>
                    <div style={styles.vendorCardName}>
                      {vendor.businessName || 'Unknown Vendor'}
                    </div>
                    <div style={styles.vendorCardCategory}>
                      {vendor.category || 'Street Food'}
                    </div>
                    <div style={styles.vendorCardFooter}>
                      <div style={styles.vendorCardRating}>
                        <svg style={{width: '14px', height: '14px', color: '#fbbf24', fill: '#fbbf24'}} viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span style={{fontSize: '13px', fontWeight: '600'}}>
                          {vendor.rating || 0}
                        </span>
                      </div>
                      <span style={styles.vendorCardPrice}>
                        {vendor.priceRange || '₱'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={styles.loadingText}>No vendors available</div>
          )}
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
                color: activeNav === item.id ? '#dc2626' : '#6b7280',
                backgroundColor: activeNav === item.id ? '#fee2e2' : 'transparent'
              }}
              onClick={() => setActiveNav(item.id)}
              onMouseEnter={(e) => {
                if (activeNav !== item.id) {
                  e.currentTarget.style.backgroundColor = '#f9fafb';
                }
              }}
              onMouseLeave={(e) => {
                if (activeNav !== item.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
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