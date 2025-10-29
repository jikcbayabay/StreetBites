import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { db, auth } from '../../firebase.js';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, collection, query, where, getDocs, addDoc, deleteDoc, serverTimestamp, onSnapshot } from 'firebase/firestore'; // Added onSnapshot
import './MenuPage.css';

// Reusable StarRating component
const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <FaStar key={i} className={i < rating ? 'filled' : 'empty'} />
  ));
  return <div className="star-rating">{stars}</div>;
};

const MenuPage = () => {
  const { vendorId } = useParams();
  const navigate = useNavigate();

  const [vendor, setVendor] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const MAX_REVIEWS = 2;
  const MAX_REVIEW_LENGTH = 50;

  const [currentUser, setCurrentUser] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Main useEffect to fetch data and listen for auth changes
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    setLoading(true);
    setError(null);

    // Use onSnapshot for real-time vendor updates (including status)
    const vendorDocRef = doc(db, 'vendor_list', vendorId);
    const unsubscribeVendor = onSnapshot(vendorDocRef, (docSnap) => {
        if (docSnap.exists()) {
          setVendor({ id: docSnap.id, ...docSnap.data() });
          fetchSubCollections(); // Fetch menu/reviews after vendor data is loaded/updated
        } else {
          setError("Vendor not found.");
          setLoading(false);
        }
    }, (err) => {
        console.error("Error fetching vendor data:", err);
        setError("Failed to load vendor data.");
        setLoading(false);
    });

    // Function to fetch subcollections (menu, reviews) - can remain getDocs for efficiency
    const fetchSubCollections = async () => {
        try {
            const menuQuery = query(collection(db, 'menu_items'), where('vendorId', '==', vendorId), where('isDeleted', '==', false));
            const menuSnapshot = await getDocs(menuQuery);
            setMenuItems(menuSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

            const reviewsQuery = query(collection(db, 'reviews'), where('vendorId', '==', vendorId));
            const reviewsSnapshot = await getDocs(reviewsQuery);
            setReviews(reviewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } catch (err) {
            console.error("Error fetching sub-collections:", err);
            // Don't set error here if vendor loaded fine, maybe just log or show partial error
        } finally {
            setLoading(false); // Set loading false after everything is attempted
        }
    };


    return () => {
      unsubscribeAuth();
      unsubscribeVendor(); // Detach the vendor listener
    };
  }, [vendorId]); // Only re-run if vendorId changes

  // useEffect to check if the item is a favorite (no changes needed)
  useEffect(() => {
    let cancelled = false;
    const checkFavorite = async () => {
      try {
        if (!currentUser) {
          setIsFavorite(false);
          setFavoriteId(null);
          return;
        }

        const favQuery = query(
          collection(db, 'favorites'),
          where('userId', '==', currentUser.uid),
          where('vendorId', '==', vendorId)
        );
        const favSnapshot = await getDocs(favQuery);
        if (cancelled) return;
        if (!favSnapshot.empty) {
          const favDoc = favSnapshot.docs[0];
          setIsFavorite(true);
          setFavoriteId(favDoc.id);
        } else {
          setIsFavorite(false);
          setFavoriteId(null);
        }
      } catch (err) {
        console.error('Error checking favorite:', err);
        // keep previous state if there's an error
      }
    };

    checkFavorite();

    return () => {
      cancelled = true;
    };
  }, [currentUser, vendorId]);

  // useEffect for the pop-up timer (no changes needed)
  useEffect(() => {
    if (!showPopup) return;
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showPopup]);

  // Function to handle the favorite button click (no changes needed)
  const handleFavoriteToggle = async () => {
    try {
      if (!currentUser) {
        setPopupMessage('Please log in to add favorites.');
        setShowPopup(true);
        return;
      }

      if (isFavorite) {
        // Remove favorite
        if (favoriteId) {
          await deleteDoc(doc(db, 'favorites', favoriteId));
        } else {
          // fallback: try to find and delete
          const favQuery = query(
            collection(db, 'favorites'),
            where('userId', '==', currentUser.uid),
            where('vendorId', '==', vendorId)
          );
          const favSnapshot = await getDocs(favQuery);
          if (!favSnapshot.empty) {
            await deleteDoc(doc(db, 'favorites', favSnapshot.docs[0].id));
          }
        }
        setIsFavorite(false);
        setFavoriteId(null);
        setPopupMessage('Removed from favorites');
        setShowPopup(true);
      } else {
        // Add favorite
        const newFavRef = await addDoc(collection(db, 'favorites'), {
          userId: currentUser.uid,
          vendorId,
          createdAt: serverTimestamp(),
        });
        setIsFavorite(true);
        setFavoriteId(newFavRef.id);
        setPopupMessage('Added to favorites');
        setShowPopup(true);
      }
    } catch (err) {
      console.error('Error toggling favorite:', err);
      setPopupMessage('Failed to update favorites. Please try again.');
      setShowPopup(true);
    }
  };

  const handlePrev = () => setActiveIndex(prev => (prev > 0 ? prev - 1 : menuItems.length - 1));
  const handleNext = () => setActiveIndex(prev => (prev < menuItems.length - 1 ? prev + 1 : 0));
  const activeItem = menuItems[activeIndex];

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const displayedReviews = reviews.slice(0, MAX_REVIEWS);

  if (loading) return <div className="menu-page-container loading"><p>Loading...</p></div>;
  if (error) return <div className="menu-page-container error"><p>Error: {error}</p></div>;
  if (!vendor) return null; // Vendor not found after loading

  // Do not show menu details if vendor is inactive
  if (vendor.status === 'inactive') {
    return (
      <div className="menu-page-container inactive-vendor">
        <header className="menu-header">
           <button onClick={() => navigate('/')} className="back-button"><FaArrowLeft /></button>
           <div className="vendor-name-title-clickable inactive-title">
             <h1>{vendor.businessName}</h1>
             <span className="status-badge inactive">Currently Inactive</span>
           </div>
           {/* Optionally hide favorite button for inactive */}
           {/* <button className={`heart-button disabled`} disabled> <FaRegHeart /> </button> */}
        </header>
        <p className="inactive-message">This vendor is currently inactive and not accepting orders or displaying their menu at this time.</p>
      </div>
    );
  }

  // Render normal page if vendor is active
  return (
    <div className="menu-page-container">
      {showPopup && <div className="favorite-popup">{popupMessage}</div>}

      <header className="menu-header">
       <button onClick={() => navigate('/')} className="back-button"><FaArrowLeft /></button>
        {/* UPDATED: Added status badge next to the name */}
        <div className="vendor-name-title-clickable" onClick={() => navigate(`/vendor/${vendor.id}`)}>
          <h1>{vendor.businessName}</h1>
          {/* --- THIS IS THE NEW STATUS BADGE --- */}
          <span className={`status-badge ${vendor.status === 'active' ? 'active' : 'inactive'}`}>
            {vendor.status === 'active' ? 'Active' : 'Inactive'}
          </span>
          {/* --- END OF NEW STATUS BADGE --- */}
        </div>
        <button className={`heart-button ${isFavorite ? 'active' : ''}`} onClick={handleFavoriteToggle}>
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </header>

      {/* Only show carousel and menu if there are items */}
      {menuItems.length > 0 ? (
          <>
            <div className="menu-carousel">
              <button onClick={handlePrev} className="carousel-nav-button prev" disabled={menuItems.length <= 1}><FaChevronLeft /></button>
              <div className="carousel-track-container">
                <div className="carousel-track" style={{ transform: `translateX(calc(-${activeIndex * 100}%))` }}>
                  {menuItems.map((item) => (
                    <div key={item.id} className="carousel-item">
                      <img src={item.imageUrl || 'https://via.placeholder.com/400x250'} alt={item.name} />
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={handleNext} className="carousel-nav-button next" disabled={menuItems.length <= 1}><FaChevronRight /></button>
            </div>

            <div className="menu-dot-indicators">
              {menuItems.map((_, index) => (
                <span key={index} className={`dot ${index === activeIndex ? 'active' : ''}`}></span>
              ))}
            </div>
          </>
      ) : (
          <div className="no-menu-items-visual">
              <p>No menu items uploaded yet.</p>
          </div>
      )}


      <div className="menu-details-card">
        {activeItem ? (
          <div className="main-dish-section">
            {activeItem.isBestSeller && <span className="bestseller-tag">Best seller</span>}
            <div className="dish-header">
              <h2 className="dish-name">{activeItem.name}</h2>
              <p className="dish-price">₱{activeItem.price ? activeItem.price.toFixed(2) : '0.00'}</p>
            </div>
            <p className="dish-description">{activeItem.description || 'No description provided.'}</p>
            {/* Removed decorative pattern div */}
          </div>
        ) : (
           // Only show this if menuItems array was initially empty
           menuItems.length === 0 && <div className="main-dish-section empty-menu"><p>Check back soon for menu items!</p></div>
        )}

        <div className="reviews-section">
          {reviews.length > 0 ? (
            <>
              {displayedReviews.map(review => (
                <div key={review.id} className="review-item">
                  <div className="reviewer-info">
                    <img src={review.reviewerAvatarUrl || 'https://via.placeholder.com/40'} alt={review.reviewerName} className="reviewer-avatar" />
                    <div className="reviewer-details">
                      <p className="reviewer-name">{review.reviewerName || 'Anonymous'}</p>
                      <p className="review-text">{truncateText(review.text, MAX_REVIEW_LENGTH)}</p>
                    </div>
                    <div className="review-rating">
                      <span>{review.rating}</span>
                      <FaStar className="filled"/>
                    </div>
                  </div>
                </div>
              ))}
              {reviews.length > MAX_REVIEWS && (
                 <button className="view-all-reviews-btn" onClick={() => navigate(`/vendor/${vendorId}`)}>
                      View all {reviews.length} reviews
                 </button>
              )}
            </>
          ) : (
            <p className="no-reviews">No reviews yet. Be the first!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;