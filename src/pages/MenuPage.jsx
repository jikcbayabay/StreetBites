import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaRegHeart, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { db, auth } from '../../firebase.js';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, collection, query, where, getDocs, addDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
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
  
  // Constants for limiting reviews
  const MAX_REVIEWS = 2;
  const MAX_REVIEW_LENGTH = 50;

  // State for favorites and pop-up
  const [currentUser, setCurrentUser] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Main useEffect to fetch data and listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    const fetchData = async () => {
      setLoading(true);
      try {
        const vendorDocRef = doc(db, 'vendor_list', vendorId);
        const vendorDocSnap = await getDoc(vendorDocRef);
        if (vendorDocSnap.exists()) {
          setVendor({ id: vendorDocSnap.id, ...vendorDocSnap.data() });
        } else { throw new Error("Vendor not found."); }

        const menuQuery = query(collection(db, 'menu_items'), where('vendorId', '==', vendorId));
        const menuSnapshot = await getDocs(menuQuery);
        setMenuItems(menuSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

        const reviewsQuery = query(collection(db, 'reviews'), where('vendorId', '==', vendorId));
        const reviewsSnapshot = await getDocs(reviewsQuery);
        setReviews(reviewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => unsubscribe();
  }, [vendorId]);

  // useEffect to check if the item is a favorite
  useEffect(() => {
    if (!currentUser || !vendorId) {
      setIsFavorite(false);
      return;
    }
    const favoritesRef = collection(db, 'favorites');
    const q = query(favoritesRef, where("userId", "==", currentUser.uid), where("vendorId", "==", vendorId));
    getDocs(q).then(querySnapshot => {
      if (!querySnapshot.empty) {
        setIsFavorite(true);
        setFavoriteId(querySnapshot.docs[0].id);
      } else {
        setIsFavorite(false);
        setFavoriteId(null);
      }
    });
  }, [currentUser, vendorId]);
  
  // useEffect for the pop-up timer
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  // Function to handle the favorite button click
  const handleFavoriteToggle = async () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    if (isFavorite) {
      await deleteDoc(doc(db, 'favorites', favoriteId));
      setIsFavorite(false);
      setFavoriteId(null);
      setPopupMessage('Removed from favorites');
      setShowPopup(true);
    } else {
      const newFav = await addDoc(collection(db, 'favorites'), {
        userId: currentUser.uid,
        vendorId: vendorId,
        timestamp: serverTimestamp()
      });
      setIsFavorite(true);
      setFavoriteId(newFav.id);
      setPopupMessage('Added to favorites!');
      setShowPopup(true);
    }
  };

  const handlePrev = () => setActiveIndex(prev => (prev > 0 ? prev - 1 : menuItems.length - 1));
  const handleNext = () => setActiveIndex(prev => (prev < menuItems.length - 1 ? prev + 1 : 0));
  const activeItem = menuItems[activeIndex];

  // Function to truncate review text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Limit the number of reviews displayed
  const displayedReviews = reviews.slice(0, MAX_REVIEWS);

  if (loading) return <div className="menu-page-container loading"><p>Loading...</p></div>;
  if (error) return <div className="menu-page-container error"><p>Error: {error}</p></div>;
  if (!vendor) return null;

  return (
    <div className="menu-page-container">
      {showPopup && <div className="favorite-popup">{popupMessage}</div>}

      <header className="menu-header">
        <button onClick={() => navigate(-1)} className="back-button"><FaArrowLeft /></button>
        <div className="vendor-name-title-clickable" onClick={() => navigate(`/vendor/${vendor.id}`)}>
          <h1>{vendor.businessName}</h1>
        </div>
        <button className={`heart-button ${isFavorite ? 'active' : ''}`} onClick={handleFavoriteToggle}>
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </header>

      <div className="menu-carousel">
        <button onClick={handlePrev} className="carousel-nav-button prev"><FaChevronLeft /></button>
        <div className="carousel-track-container">
          <div className="carousel-track" style={{ transform: `translateX(calc(-${activeIndex * 100}%))` }}>
            {menuItems.map((item) => (
              <div key={item.id} className="carousel-item">
                <img src={item.imageUrl} alt={item.name} />
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} className="carousel-nav-button next"><FaChevronRight /></button>
      </div>

      <div className="menu-dot-indicators">
        {menuItems.map((_, index) => (
          <span key={index} className={`dot ${index === activeIndex ? 'active' : ''}`}></span>
        ))}
      </div>

      <div className="menu-details-card">
        
        
        {activeItem ? (
          <div className="main-dish-section">
            {activeItem.isBestSeller && <span className="bestseller-tag">Best seller</span>}
            <div className="dish-header">
              <h2 className="dish-name">{activeItem.name}</h2>
              <p className="dish-price">₱{activeItem.price}</p>
            </div>
            <p className="dish-description">{activeItem.description}</p>
            <div className="decorative-pattern"></div>
          </div>
        ) : (
          <div className="main-dish-section empty-menu">
            <p>No menu items available for this vendor yet.</p>
          </div>
        )}

        <div className="reviews-section">
          {reviews.length > 0 ? (
            <>
              {displayedReviews.map(review => (
                <div key={review.id} className="review-item">
                  <div className="reviewer-info">
                    <img src={review.reviewerAvatarUrl} alt={review.reviewerName} className="reviewer-avatar" />
                    <div className="reviewer-details">
                      <p className="reviewer-name">{review.reviewerName}</p>
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
                <p className="more-reviews-text">Showing {MAX_REVIEWS} of {reviews.length} reviews</p>
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