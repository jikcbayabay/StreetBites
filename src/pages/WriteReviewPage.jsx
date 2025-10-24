import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaArrowLeft, FaCamera } from 'react-icons/fa';
import { db, auth, storage } from '../../firebase.js'; // Import storage
import { doc, getDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import storage functions
import { onAuthStateChanged } from "firebase/auth";
import './WriteReviewPage.css';

const WriteReviewPage = () => {
  const { vendorId } = useParams();
  const navigate = useNavigate();

  const [vendor, setVendor] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for image file and preview
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  // Check user auth state and fetch vendor data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user);
      } else {
        // If no user, redirect to a login page
        navigate('/login'); 
      }
    });

    const fetchVendor = async () => {
      const docRef = doc(db, 'vendor_list', vendorId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setVendor(docSnap.data());
      }
      setLoading(false);
    };

    fetchVendor();
    return () => unsubscribe();
  }, [vendorId, navigate]);

  // Handler for when a user selects an image file
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      // Create a temporary URL for the image preview
      setImagePreview(URL.createObjectURL(file));
    }
  };
  
  // Handler to remove the selected image
  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview('');
  };

  // handlePostReview now includes image upload
  const handlePostReview = async () => {
    if (rating === 0 || reviewText.length < 85 || !currentUser) return;
    setIsSubmitting(true);

    let imageUrl = null;

    try {
      // Step 1: Upload the image to Firebase Storage if it exists
      if (imageFile) {
        // Create a unique file path
        const imagePath = `reviews/${vendorId}/${Date.now()}_${imageFile.name}`;
        const storageRef = ref(storage, imagePath);
        
        // Upload the file
        const uploadResult = await uploadBytes(storageRef, imageFile);
        
        // Get the public URL of the uploaded image
        imageUrl = await getDownloadURL(uploadResult.ref);
      }

      // Step 2: Save the review to Firestore with the image URL
      await addDoc(collection(db, 'reviews'), {
        vendorId: vendorId,
        userId: currentUser.uid,
        reviewerName: currentUser.displayName || "Anonymous",
        reviewerAvatarUrl: currentUser.photoURL || "/default-avatar.png",
        rating: rating,
        text: reviewText,
        imageUrl: imageUrl, // Add the image URL to the document (will be null if no image)
        timestamp: serverTimestamp()
      });
      
      navigate(`/vendor/${vendorId}`);
    } catch (error) {
      console.error("Error posting review: ", error);
      alert("Failed to post review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading || !vendor) {
    return <div className="review-page-container loading"><p>Loading...</p></div>;
  }
  
  const canSubmit = rating > 0 && reviewText.length >= 85 && !isSubmitting;

  return (
    <div className="review-page-container">
      <button className="review-page-back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>

      <div className="review-form-card">
        <div className="review-form-header">
          <img src={currentUser?.photoURL || "/default-avatar.png"} alt="User Avatar" className="user-avatar-small" />
          <div className="user-info">
            <span className="username">{currentUser?.displayName || 'Username'}</span>
            <span className="location-info">Posting publicly</span>
          </div>
        </div>
        
        <div className="rating-input-section">
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
          <span className="rating-prompt">Select your rating</span>
        </div>

        <h2 className="review-of-title">Start your review of {vendor.businessName}</h2>

        <textarea
          className="review-textarea"
          placeholder="A few things to consider in your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />

        <div className="image-upload-section">
          <label htmlFor="image-upload" className="upload-button">
            <FaCamera /> Add Photo
          </label>
          <input 
            id="image-upload" 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            style={{ display: 'none' }}
          />
          {imagePreview && (
            <div className="image-preview-container">
              <img src={imagePreview} alt="Review preview" className="image-preview" />
              <button className="remove-image-button" onClick={handleRemoveImage}>×</button>
            </div>
          )}
        </div>
        
        <div className="review-footer">
          <span className="char-count-info">
            Reviews need to be at least 85 characters.
          </span>
          <button 
            className="post-review-btn" 
            onClick={handlePostReview}
            disabled={!canSubmit}
          >
            {isSubmitting ? 'Posting...' : 'Post Review'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteReviewPage;