import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar, FaShareSquare, FaSave, FaPlus, FaCheckCircle, FaExternalLinkAlt, FaPhone } from 'react-icons/fa';
import { db } from '../../firebase.js';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch vendor details
        const vendorRef = doc(db, 'vendor_list', vendorId);
        const vendorSnap = await getDoc(vendorRef);

        if (vendorSnap.exists()) {
          setVendor({ id: vendorSnap.id, ...vendorSnap.data() });
        } else {
          throw new Error("Vendor not found.");
        }

        // Fetch reviews for this vendor
        const reviewsQuery = query(collection(db, 'reviews'), where('vendorId', '==', vendorId));
        const reviewsSnapshot = await getDocs(reviewsQuery);
        setReviews(reviewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      } catch (err)
 {
        console.error("Error fetching data:", err);
        setError("Failed to load page data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [vendorId]);

  const ratingBreakdown = useMemo(() => {
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(review => {
      if (counts[review.rating] !== undefined) {
        counts[review.rating]++;
      }
    });
    return counts;
  }, [reviews]);

  if (loading) return <div className="profile-page-container loading"><p>Loading profile...</p></div>;
  if (error) return <div className="profile-page-container error"><p>{error}</p></div>;
  if (!vendor) return null;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(vendor.address)}`;

  return (
    <div className="profile-page-container">
      <header className="profile-hero">
        <button className="profile-back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        {/* The heart button and hero-actions div have been removed from here */}
        <div className="hero-gallery">
          {vendor.heroImages && vendor.heroImages.map((imgUrl, index) => (
            <img key={index} src={imgUrl} alt={`Vendor view ${index + 1}`} className="hero-image" />
          ))}
        </div>
      </header>

      <main className="profile-content-area">
        <div className="main-content">
          <div className="vendor-info-header">
            <img src={vendor.logoUrl} alt={`${vendor.businessName} logo`} className="vendor-logo" />
            <div className="vendor-title-group">
              <h1 className="vendor-profile-name">{vendor.businessName}</h1>
              <div className="vendor-rating-reviews">
                <StarRating rating={vendor.rating} />
                <span>{vendor.reviewCount} reviews</span>
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
          
          <div className="action-buttons-container">
            <button className="btn btn-primary" onClick={() => navigate(`/vendor/${vendor.id}/review`)}>
              <FaStar /> Write a review
            </button>
            <button className="btn"><FaPlus /> Add photos/videos</button>
            <button className="btn"><FaShareSquare /> Share</button>
            <button className="btn"><FaSave /> Save</button>
          </div>

          <div className="location-section">
            <div className="location-address">
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                {vendor.address}
              </a>
              {vendor.neighborhood && <span>{vendor.neighborhood}</span>}
            </div>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <button className="btn get-directions-btn">Get directions</button>
            </a>
          </div>

          <div className="reviews-main-section">
            <div className="overall-rating-summary">
              <h3>Overall rating</h3>
              <StarRating rating={vendor.rating} className="summary-stars" />
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

            <div className="review-list">
              {reviews.map(review => (
                <div key={review.id} className="review-card">
                  <div className="reviewer-profile">
                    <img src={review.reviewerAvatarUrl} alt={review.reviewerName} className="reviewer-avatar" />
                    <div className="reviewer-meta">
                      <span className="reviewer-name">{review.reviewerName}</span>
                      <span className="reviewer-location">{review.reviewerLocation || 'Buellton, CA'}</span>
                    </div>
                  </div>
                  <div className="review-content">
                    <div className="review-header">
                      <StarRating rating={review.rating} />
                      <span className="review-date">
                        {review.timestamp ? new Date(review.timestamp.seconds * 1000).toLocaleDateString() : 'Sep 18, 2025'}
                      </span>
                    </div>
                    <p className="review-text">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VendorProfilePage;