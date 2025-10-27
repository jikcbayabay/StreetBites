import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { db, auth } from '../../firebase.js';
import { doc, getDoc, collection, addDoc, serverTimestamp, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";
import './WriteReviewPage.css';

// Reusable StarRating component for sidebar
const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, i) => (
        <FaStar key={i} className={i < rating ? 'filled' : 'empty'} />
    ));
    return <div className="sidebar-star-rating">{stars}</div>;
};

const WriteReviewPage = () => {
    const { vendorId } = useParams();
    const navigate = useNavigate();

    const [vendor, setVendor] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [userProfile, setUserProfile] = useState(null); // State for user's profile data
    const [recentReviews, setRecentReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);
    const availableTags = ['Food', 'Service', 'Ambiance'];

    // Effect to get the authenticated user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(user);
            } else {
                navigate('/login');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Effect to fetch all necessary data once the user is known
    useEffect(() => {
        if (!currentUser || !vendorId) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                // 1. Fetch user's first and last name from 'users' collection
                const userRef = doc(db, 'users', currentUser.uid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    setUserProfile(userSnap.data());
                } else {
                    console.warn("User profile document not found in Firestore.");
                }

                // 2. Fetch vendor details
                const vendorRef = doc(db, 'vendor_list', vendorId);
                const vendorSnap = await getDoc(vendorRef);
                if (vendorSnap.exists()) {
                    setVendor(vendorSnap.data());
                }

                // 3. Fetch recent reviews for the sidebar
                const reviewsQuery = query(
                    collection(db, 'reviews'),
                    where('vendorId', '==', vendorId),
                    orderBy('timestamp', 'desc'),
                    limit(3)
                );
                const reviewsSnapshot = await getDocs(reviewsQuery);
                setRecentReviews(reviewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

            } catch (error) {
                console.error("Error fetching page data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentUser, vendorId]);

    const handleTagClick = (tag) => {
        setSelectedTags(prevTags => 
            prevTags.includes(tag)
                ? prevTags.filter(t => t !== tag)
                : [...prevTags, tag]
        );
    };

    const handlePostReview = async () => {
        if (rating === 0 || reviewText.length < 20 || !currentUser || !userProfile) return;
        setIsSubmitting(true);

        // Construct the full name from the fetched user profile
        const fullName = (userProfile.first_name && userProfile.last_name)
            ? `${userProfile.first_name} ${userProfile.last_name}`
            : currentUser.displayName || "Anonymous";

        try {
            await addDoc(collection(db, 'reviews'), {
                vendorId: vendorId,
                userId: currentUser.uid,
                reviewerName: fullName, // Use the constructed full name
                reviewerAvatarUrl: currentUser.photoURL || "/default-avatar.png",
                rating: rating,
                text: reviewText,
                tags: selectedTags,
                timestamp: serverTimestamp()
            });
            navigate(`/vendor/${vendorId}`);
        } catch (error) {
            console.error("Error posting review: ", error);
            alert("Failed to post review. Please try again.");
            setIsSubmitting(false);
        }
    };

    if (loading || !vendor) {
        return <div className="review-page-loading"><p>Loading...</p></div>;
    }
    
    const canSubmit = rating > 0 && reviewText.length >= 20 && !isSubmitting;

    const truncateText = (text, maxLength) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    return (
        <div className="write-review-page">
            <div className="review-content-wrapper">
                {/* --- Left Column: Main Form --- */}
                <div className="review-main-form">
                    <div className="form-vendor-header">
                        <img src={vendor.logoUrl || 'https://via.placeholder.com/80'} alt={vendor.businessName} className="vendor-avatar" />
                        <div className="vendor-info">
                            <span className="vendor-name">{vendor.businessName}</span>
                            <span className="vendor-location">{vendor.address}</span>
                        </div>
                    </div>

                    <div className="rating-section">
                        <h3>How would you rate your experience?</h3>
                        <div className="star-rating-input">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <FaStar
                                    key={star}
                                    className={hoverRating >= star || rating >= star ? 'star active' : 'star'}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    onClick={() => setRating(star)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="experience-section">
                        <h3>Tell us about your experience</h3>
                        <p>A few things to consider in your review</p>
                        <div className="tags">
                            {availableTags.map(tag => (
                                <button
                                    key={tag}
                                    className={`tag-button ${selectedTags.includes(tag) ? 'active' : ''}`}
                                    onClick={() => handleTagClick(tag)}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                        <textarea
                            placeholder="Start your review..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        />
                        <span className="char-count">Reviews need to be at least 20 characters.</span>
                    </div>
                    
                    <button className="post-review-btn" onClick={handlePostReview} disabled={!canSubmit}>
                        {isSubmitting ? 'Posting...' : 'Post Review'}
                    </button>
                </div>

                {/* --- Right Column: Recent Reviews Sidebar --- */}
                <aside className="recent-reviews-sidebar">
                    <h3>Recent reviews</h3>
                    {recentReviews.map(review => (
                        <div key={review.id} className="sidebar-review-item">
                            <div className="sidebar-reviewer-info">
                                <img src={review.reviewerAvatarUrl || 'https://via.placeholder.com/40'} alt={review.reviewerName} className="sidebar-reviewer-avatar" />
                                <div className="sidebar-reviewer-details">
                                    <span className="sidebar-reviewer-name">{review.reviewerName || 'Anonymous'}</span>
                                    <span className="sidebar-reviewer-stats">0 reviews • 0 photos</span>
                                </div>
                            </div>
                            <div className="sidebar-review-content">
                                <StarRating rating={review.rating} />
                                <span className="sidebar-review-date">
                                    {review.timestamp ? new Date(review.timestamp.seconds * 1000).toLocaleDateString() : ''}
                                </span>
                            </div>
                            <p className="sidebar-review-text">
                                {truncateText(review.text, 150)}
                            </p>
                        </div>
                    ))}
                </aside>
            </div>
        </div>
    );
};

export default WriteReviewPage;