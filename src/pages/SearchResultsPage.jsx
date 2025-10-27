import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SearchResults.css';
import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar, FaMapMarkerAlt } from 'react-icons/fa';
import { db } from '../../firebase.js';
import { collection, query as firestoreQuery, where, getDocs } from 'firebase/firestore';

// Helper component to render stars based on rating
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
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
    <div className="vendors-page">
      <header className="vendors-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeft />
        </button>
        <h1 className="header-title">{displayCategory}</h1>
      </header>

      <main className="vendors-list">
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
              <p className="vendor-address">{vendor.address}</p>
              <div className="vendor-meta">
                <span className="vendor-price">{vendor.priceRange}</span>
                <FaMapMarkerAlt className="location-icon" />
                <span className="vendor-distance">{vendor.distance} KM</span>
              </div>
              <p className="vendor-description">{vendor.description}</p>
              <a href="#" className="vendor-category-link" onClick={(e) => e.preventDefault()}>
                {vendor.category}
              </a>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default SearchResultsPage;