import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SearchResults.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { db } from '../../firebase.js';
import { collection, query as firestoreQuery, where, getDocs } from 'firebase/firestore';

// Helper component to render stars
const StarRating = ({ rating = 0 }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) { stars.push(<FaStar key={i} />); }
    else if (i === Math.ceil(rating) && !Number.isInteger(rating)) { stars.push(<FaStarHalfAlt key={i} />); }
    else { stars.push(<FaRegStar key={i} />); }
  }
  return <div className="star-rating">{stars}</div>;
};

const SearchResultsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const displayCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : '';

  useEffect(() => {
    const fetchVendors = async () => {
      if (!category) return;
      setLoading(true);
      setError(null);

      try {
        const vendorsCollectionRef = collection(db, 'vendor_list');
        // Fetch vendors based ONLY on category
        const q = firestoreQuery(vendorsCollectionRef, where("category", "==", category));
        const querySnapshot = await getDocs(q);

        const fetchedVendors = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setVendors(fetchedVendors);
      } catch (err) {
        console.error("Error fetching vendors:", err);
        setError("Could not load vendor data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchVendors();
  }, [category]);

  const formatReviewCount = (count) => {
    if (!count || count === 0) return '0';
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k';
    }
    return count;
  };

  return (
    <div className="search-results-page">
      <header className="vendors-header">
        <button className="back-button" onClick={() => navigate(-1)}>
            <FaArrowLeft />
        </button>
        <h1 className="header-title">Best "{displayCategory}" in Quezon City</h1>
      </header>

      <main className="search-results-container">
        <div className="vendors-list">
          {loading && <p className="message">Loading vendors...</p>}
          {error && <p className="message error">{error}</p>}
          {!loading && vendors.length === 0 && (
            <p className="message">No vendors found for "{displayCategory}".</p>
          )}

        {/* Map directly over vendors, do not filter out inactive ones */}
        {vendors.map((vendor, index) => (
          <div
            key={vendor.id}
            // Add 'inactive' class if status is inactive for styling (e.g., dimming)
            className={`vendor-card ${vendor.status === 'inactive' ? 'inactive' : ''}`}
            // Only navigate if the vendor is active
            onClick={() => {
                if (vendor.status !== 'inactive') {
                    navigate(`/menu/${vendor.id}`);
                }
            }}
            // Add cursor style based on status
            style={{ cursor: vendor.status === 'inactive' ? 'not-allowed' : 'pointer' }}
          >
            <img src={vendor.logoUrl || 'https://via.placeholder.com/150'} alt={vendor.businessName} className="vendor-image" />
            <div className="vendor-details">
              <h2 className="vendor-name">{vendor.businessName}</h2>
              <div className="vendor-rating-info">
                <StarRating rating={vendor.numericalRating} />
                <span className="review-count">({formatReviewCount(vendor.reviewCount)} reviews)</span>
              </div>
               <div className="vendor-meta-search">
                  <span className="vendor-category-link">{vendor.category}</span>
                  {/* Show status badge, using 'Active'/'Inactive' text */}
                  {vendor.status && (
                     <>
                        <span className="dot-separator">•</span>
                        <span className={`status-badge ${vendor.status === 'active' ? 'active' : 'inactive'}`}>
                           {vendor.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                     </>
                  )}
               </div>
              <p className="vendor-description">{vendor.description}</p>
            </div>
            <div className="vendor-actions">
              {/* Disable button and change text if inactive */}
              <button
                className={`order-button ${vendor.status === 'inactive' ? 'disabled' : ''}`}
                onClick={(e) => {
                    if (vendor.status !== 'inactive') {
                        e.stopPropagation(); // Prevent card's onClick if button is clicked
                        navigate(`/menu/${vendor.id}`);
                    } else {
                        e.stopPropagation(); // Still prevent card's onClick
                    }
                }}
                disabled={vendor.status === 'inactive'} // Disable button visually and functionally
              >
                {vendor.status === 'inactive' ? 'Currently Inactive' : 'Menu'}
              </button>
            </div>
          </div>
        ))}
        </div>
      </main>
    </div>
  );
};

export default SearchResultsPage;