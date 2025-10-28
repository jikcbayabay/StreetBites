import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar, FaCheckCircle, FaBookOpen } from 'react-icons/fa';
import { db } from '../../firebase.js';
import { doc, onSnapshot, collection, query, where, getDocs } from 'firebase/firestore';
import './VendorProfilePage.css';

// Reusable StarRating component
const StarRating = ({ rating, className = "" }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) { stars.push(<FaStar key={i} />); }
    else if (i === Math.ceil(rating) && !Number.isInteger(rating)) { stars.push(<FaStarHalfAlt key={i} />); }
    else { stars.push(<FaRegStar key={i} />); }
  }
  return <div className={`profile-star-rating ${className}`}>{stars}</div>;
};

const VendorProfilePage = () => {
  const { vendorId } = useParams();
  const navigate = useNavigate();
  
  const [vendor, setVendor] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    // 1. Real-time listener for the vendor document
    const vendorRef = doc(db, 'vendor_list', vendorId);
    const unsubscribeVendor = onSnapshot(vendorRef, (docSnap) => {
      if (docSnap.exists()) {
        setVendor({ id: docSnap.id, ...docSnap.data() });
      } else {
        setError("Vendor not found.");
        setLoading(false);
      }
    }, (err) => {
      console.error("Vendor snapshot error:", err);
      setError("Failed to load vendor data.");
      setLoading(false);
    });

    // 2. Real-time listener for reviews
    const reviewsQuery = query(collection(db, 'reviews'), where('vendorId', '==', vendorId));
    const unsubscribeReviews = onSnapshot(reviewsQuery, (snapshot) => {
      const fetchedReviews = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReviews(fetchedReviews);
    }, (err) => {
        console.error("Reviews snapshot error:", err);
        setError("Failed to load reviews.");
    });

    // 3. One-time fetch for menu items
    const fetchMenuItems = async () => {
      try {
        const menuQuery = query(collection(db, 'menu_items'), where('vendorId', '==', vendorId));
        const menuSnapshot = await getDocs(menuQuery);
        setMenuItems(menuSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.error("Error fetching menu items:", err);
      } finally {
        setLoading(false); // Stop loading after all initial data is fetched
      }
    };
    fetchMenuItems();

    // Cleanup function to detach both listeners when the component unmounts
    return () => {
      unsubscribeVendor();
      unsubscribeReviews();
    };
  }, [vendorId]);

  // Separate best sellers from other menu items
  const { bestSellers, otherMenuItems } = useMemo(() => {
    const best = menuItems.filter(item => item.isBestSeller);
    const others = menuItems.filter(item => !item.isBestSeller);
    return { bestSellers: best, otherMenuItems: others };
  }, [menuItems]);

  const ratingBreakdown = useMemo(() => {
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(review => {
      if (counts.hasOwnProperty(review.rating)) {
        counts[review.rating]++;
      }
    });
    return counts;
  }, [reviews]);
  
  // Helper function to prepare images for the hero gallery
  const prepareHeroImages = (images = []) => {
    if (!images || images.length === 0) return [null, null, null];
    if (images.length === 1) return [images[0], images[0], images[0]];
    if (images.length === 2) return [images[0], images[1], images[0]];
    return images.slice(0, 3);
  };
  
  if (loading) return <div className="profile-page-container loading"><p>Loading profile...</p></div>;
  if (error) return <div className="profile-page-container error"><p>{error}</p></div>;
  if (!vendor) return null;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(vendor.address)}`;
  const displayImages = prepareHeroImages(vendor.heroImages);

  return (
    <div className="profile-page-container">
      <header className="profile-hero">
        <button className="profile-back-button" onClick={() => navigate(`/menu/${vendorId}`)}>
            <FaArrowLeft />
        </button>
        <div className="hero-gallery">
          {displayImages.map((imgUrl, index) => (
            imgUrl ? (
              <img key={index} src={imgUrl} alt={`Vendor view ${index + 1}`} className="hero-image" />
            ) : (
              <div key={index} className="hero-image-placeholder"></div>
            )
          ))}
        </div>
      </header>
      
      <div className="profile-body">
        <div className="main-content-grid">
          {/* --- FLOATING INFO CARD (MIDDLE COLUMN) --- */}
          <div className="floating-info-card">
            <img src={vendor.logoUrl || 'https://via.placeholder.com/150'} alt={`${vendor.businessName} logo`} className="vendor-logo" />
            <div className="vendor-title-group">
              <h1 className="vendor-profile-name">{vendor.businessName}</h1>
              <div className="vendor-rating-reviews">
                <StarRating rating={vendor.numericalRating} />
                <span>{reviews.length} reviews</span>
              </div>
              <div className="vendor-meta-info">
                <span>{vendor.priceRange}</span>
                <span className="dot-separator">•</span>
                <span>{vendor.category}</span>
              </div>
              <div className="vendor-hours">
                <span className="open-status">Open</span>
                <span>{vendor.hours}</span>
              </div>
              {vendor.isVerified && <div className="verified-badge"><FaCheckCircle /> Verified over 3 months ago</div>}
            </div>
          </div>
          
          {/* --- LEFT COLUMN --- */}
          <div className="left-column">
            <div className="action-buttons-container card-style">
              <button className="btn btn-primary" onClick={() => navigate(`/vendor/${vendor.id}/review`)}>
                <FaStar /> Write a review
              </button>
              <button className="btn btn-secondary" onClick={() => navigate(`/menu/${vendor.id}`)}>
                <FaBookOpen /> View Menu
              </button>
            </div>
            <div className="location-section card-style">
              <div className="location-address">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">{vendor.address}</a>
                {vendor.neighborhood && <span>{vendor.neighborhood}</span>}
              </div>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <button className="btn get-directions-btn">Get directions</button>
              </a>
            </div>
            <div className="reviews-main-section card-style">
              <div className="rating-distribution">
                <div className="overall-rating-summary">
                  <h3>Overall rating</h3>
                  <StarRating rating={vendor.numericalRating} className="summary-stars" />
                  <p>{reviews.length} reviews</p>
                </div>
                <div className="rating-breakdown">
                  {[5, 4, 3, 2, 1].map(star => (
                    <div key={star} className="bar-container">
                      <span>{star} stars</span>
                      <div className="bar-background">
                        <div 
                          className="bar-fill" 
                          style={{ width: `${reviews.length > 0 ? (ratingBreakdown[star] / reviews.length) * 100 : 0}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="review-list">
                {reviews.map(review => (
                  <div key={review.id} className="review-card">
                    <div className="reviewer-profile">
                      <img src={review.reviewerAvatarUrl || 'https://via.placeholder.com/50'} alt={review.reviewerName} className="reviewer-avatar" />
                      <div className="reviewer-meta">
                        <span className="reviewer-name">{review.reviewerName || 'Anonymous'}</span>
                        {review.reviewerLocation && <span className="reviewer-location">{review.reviewerLocation}</span>}
                      </div>
                    </div>
                    <div className="review-content">
                      <div className="review-header">
                        <StarRating rating={review.rating} />
                        <span className="review-date">
                          {review.timestamp ? new Date(review.timestamp.seconds * 1000).toLocaleDateString() : 'Date not available'}
                        </span>
                      </div>
                      <p className="review-text">{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* --- RIGHT COLUMN --- */}
          <aside className="right-column">
            <div className="menu-section card-style">
              <h3>Menu</h3>
              {bestSellers.length > 0 && (
                <div className="menu-category">
                  <h4>Best Sellers</h4>
                  {bestSellers.map(item => (
                    <div key={item.id} className="menu-item">
                      <div className="menu-item-info">
                        <span className="menu-item-name">{item.name}</span>
                        <p className="menu-item-description">{item.description}</p>
                      </div>
                      <span className="menu-item-price">₱{item.price}</span>
                    </div>
                  ))}
                </div>
              )}
              {otherMenuItems.length > 0 && (
                 <div className="menu-category">
                   <h4>Other Items</h4>
                   {otherMenuItems.map(item => (
                     <div key={item.id} className="menu-item">
                      <div className="menu-item-info">
                        <span className="menu-item-name">{item.name}</span>
                      </div>
                      <span className="menu-item-price">₱{item.price}</span>
                     </div>
                   ))}
                 </div>
              )}
               {menuItems.length === 0 && (
                <p className="no-menu-message">No menu items available yet.</p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default VendorProfilePage;