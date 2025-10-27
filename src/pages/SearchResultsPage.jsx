import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SearchResults.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar, FaMapMarkerAlt } from 'react-icons/fa';
import { db } from '../../firebase.js';
import { collection, query as firestoreQuery, where, getDocs } from 'firebase/firestore';

// Helper component to render stars
const StarRating = ({ rating = 0 }) => { // Default rating to 0
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

        {vendors.map((vendor, index) => (
          <div
            key={vendor.id}
            className={`vendor-card ${index === 1 ? 'highlighted' : ''}`}
            onClick={() => navigate(`/menu/${vendor.id}`)}
          >
            <img src={vendor.imageUrl} alt={vendor.businessName} className="vendor-image" />
            <div className="vendor-details">
              <h2 className="vendor-name">{vendor.businessName}</h2>
              <div className="vendor-rating-info">
                <StarRating rating={vendor.rating} />
                <span className="review-count">{vendor.reviewCount} reviews</span>
              </div>
              <div className="vendor-actions">
                <button className="order-button">Menu</button>
              </div>
              <p className="vendor-description">{vendor.description}</p>
              <a href="#" className="vendor-category-link" onClick={(e) => e.preventDefault()}>
                {vendor.category}
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchResultsPage;