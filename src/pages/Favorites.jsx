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

  return (
    <div className="favorites-page-container">
      <main className="favorites-main-content">
        <h1>Want to go</h1>

        <div className="user-profile-summary">
          <div className="user-avatar-placeholder"></div>
          <div className="user-details">
            <span className="user-name">
              {/* UPDATED: Construct the name from first_name and last_name */}
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
    </div>
  );
};

export default Favorites;