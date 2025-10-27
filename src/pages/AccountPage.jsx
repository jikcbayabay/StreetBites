import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './ProfilePage.css';

const AccountPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    contactNumber: ''
  });
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        loadUserData(user.uid);
      } else {
        // User is not logged in, redirect to login page
        navigate('/login');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  const loadUserData = async (uid) => {
    try {
      // Fetch user data from Firestore
      const userDocRef = doc(db, 'users', uid);
      const userDocSnap = await getDoc(userDocRef);
      
      if (userDocSnap.exists()) {
        const data = userDocSnap.data();
        setUserData(data);
        setFormData({
          email: data.email || '',
          contactNumber: data.contact_number || ''
        });
      } else {
        console.error('No user document found');
        alert('User profile not found.');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error loading user data:', error);
      alert('Failed to load user data. Please try again.');
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    if (!currentUser) {
      alert('No user logged in');
      return;
    }

    try {
      // Update user document in Firestore
      const userDocRef = doc(db, 'users', currentUser.uid);
      
      await updateDoc(userDocRef, {
        email: formData.email,
        contact_number: formData.contactNumber,
        updated_at: new Date().toISOString()
      });

      // Update local state
      const updatedData = {
        ...userData,
        email: formData.email,
        contact_number: formData.contactNumber,
        updated_at: new Date().toISOString()
      };

      setUserData(updatedData);
      alert('Changes saved successfully!');
    } catch (error) {
      console.error('Error saving user data:', error);
      alert('Failed to save changes. Please try again.');
    }
  };

  const handleCancel = () => {
    if (userData) {
      setFormData({
        email: userData.email || '',
        contactNumber: userData.contact_number || ''
      });
    }
  };

  const handleBack = () => {
    navigate('/profile');
  };

  if (loading) {
    return (
      <div className="profile-page-background">
        <div className="profile-container account-page">
          <div style={{ textAlign: 'center', padding: '2rem', color: '#fff' }}>
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page-background">
      <div className="profile-container account-page">
        <header className="profile-header">
          <span className="header-title">Account</span>
          <button className="collapse-button" onClick={handleBack}>←</button>
        </header>
        
        <div className="content-section">
          <h2 className="section-title">Account Settings</h2>
          
          <div className="form-group">
            <label className="form-label">EMAIL ADDRESS</label>
            <input 
              type="email" 
              name="email"
              className="form-input" 
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">FIRST NAME</label>
            <input 
              type="text" 
              className="form-input" 
              value={userData?.first_name || ''}
              readOnly
              style={{ backgroundColor: '#f5f5f5', cursor: 'not-allowed' }}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">LAST NAME</label>
            <input 
              type="text" 
              className="form-input" 
              value={userData?.last_name || ''}
              readOnly
              style={{ backgroundColor: '#f5f5f5', cursor: 'not-allowed' }}
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">CONTACT NUMBER</label>
            <input 
              type="tel" 
              name="contactNumber"
              className="form-input" 
              value={formData.contactNumber}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="button-group">
            <button className="btn-primary" onClick={handleSave}>SAVE CHANGES</button>
            <button className="btn-secondary" onClick={handleCancel}>CANCEL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;