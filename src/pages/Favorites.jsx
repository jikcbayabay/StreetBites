import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { db, auth } from '../../firebase.js';
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './Favorites.css';

// Reusable StarRating component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) { stars.push(<FaStar key={i} />); }
    else if (i === Math.ceil(rating) && !Number.isInteger(rating)) { stars.push(<FaStarHalfAlt key={i} />); }
    else { stars.push(<FaRegStar key={i} />); }
  }
  return <div className="favorite-star-rating">{stars}</div>;
};

const Favorites = () => {
  const navigate = useNavigate();
  const [favoritesList, setFavoritesList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('favorites');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        fetchFavorites(user.uid);

        // Fetch user profile from 'users' collection
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          setUserProfile(userDocSnap.data());
        }
      } else {
        setLoading(false);
        setFavoritesList([]);
        setCurrentUser(null);
        setUserProfile(null);
      }
    });

    const fetchCategories = async () => {
      const vendorsSnapshot = await getDocs(collection(db, 'vendor_list'));
      const categories = vendorsSnapshot.docs.map(doc => doc.data().category);
      const uniqueCategories = [...new Set(categories)].filter(Boolean).sort();
      setAllCategories(uniqueCategories);
    };

    fetchCategories();
    return () => unsubscribe();
  }, []);

  const fetchFavorites = async (userId) => {
    setLoading(true);
    try {
      const favoritesQuery = query(collection(db, 'favorites'), where('userId', '==', userId));
      const favoritesSnapshot = await getDocs(favoritesQuery);
      const vendorIds = favoritesSnapshot.docs.map(doc => doc.data().vendorId);

      if (vendorIds.length > 0) {
        const vendorPromises = vendorIds.map(id => getDoc(doc(db, 'vendor_list', id)));
        const vendorDocs = await Promise.all(vendorPromises);
        const fetchedFavorites = vendorDocs
          .filter(doc => doc.exists())
          .map(doc => ({ id: doc.id, ...doc.data() }));
        setFavoritesList(fetchedFavorites);
      } else {
        setFavoritesList([]);
      }
    } catch (err) {
      console.error('Error fetching favorites:', err);
      setError('Failed to load favorites.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredFavorites = useMemo(() => {
    if (selectedCategories.length === 0) return favoritesList;
    return favoritesList.filter(vendor => selectedCategories.includes(vendor.category));
  }, [favoritesList, selectedCategories]);

  const navItems = [
    { id: 'home', label: 'Home', path: '/home' },
    { id: 'maps', label: 'Maps', path: '/maps' },
    { id: 'favorites', label: 'Favorites', path: '/favorites' },
    { id: 'profile', label: 'Profile', path: '/profile' }
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
    <div className="favorites-page-container">
      <main className="favorites-main-content">
        <h1>Want to go</h1>

        <div className="user-profile-summary">
          <div className="user-avatar-placeholder"></div>
          <div className="user-details">
            <span className="user-name">
              {userProfile ? `${userProfile.first_name} ${userProfile.last_name}` : (currentUser?.displayName || 'Username')}
            </span>
            <span className="user-stats">0 reviews • 0 photos</span>
          </div>
        </div>

        <div className="list-header">
          <h2>{filteredFavorites.length} Places</h2>
          <div className="filter-bar">
            <button>Sort by Recently Added ▼</button>
            <div className="category-filter">
              <button onClick={() => setIsDropdownOpen(prev => !prev)}>
                All Categories ▼
              </button>
              {isDropdownOpen && (
                <div className="category-dropdown">
                  {allCategories.map(category => (
                    <label key={category} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      {category}
                    </label>
                  ))}
                </div>
              )}
            </div>
            <button>All Cities ▼</button>
          </div>
        </div>
        
        {loading && <p className="message">Loading favorites...</p>}
        {error && <p className="message error">{error}</p>}
        
        {!loading && filteredFavorites.length === 0 && (
          <p className="message">
            {selectedCategories.length > 0 
              ? "No favorites match the selected categories."
              : "You haven't added any vendors to your favorites yet."}
          </p>
        )}

        <div className="favorites-list">
          {filteredFavorites.map(vendor => (
            <div key={vendor.id} className="favorite-list-item">
              <Link to={`/vendor/${vendor.id}`} className="item-image-container">
                <img 
                  src={vendor.heroImages ? vendor.heroImages[0] : vendor.imageUrl} 
                  alt={vendor.businessName} 
                  className="item-image"
                />
              </Link>
              <div className="item-details">
                <Link to={`/vendor/${vendor.id}`}><h3>{vendor.businessName}</h3></Link>
                <div className="item-rating-row">
                  <StarRating rating={vendor.rating} />
                  <span>{vendor.reviewCount} reviews</span>
                </div>
                <div className="item-meta-row">
                  <span>{vendor.priceRange}</span>
                  <span className="dot-separator">•</span>
                  <span>{vendor.category}</span>
                </div>
                <p className="item-address">{vendor.address}</p>
                <a href="#" className="add-note-link">Add a Note</a>
              </div>
              <div className="bookmark-icon"></div>
            </div>
          ))}
        </div>
      </main>

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

export default Favorites;