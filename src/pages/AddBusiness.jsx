// AddBusiness.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ArrowLeft } from 'lucide-react';
import './VendorDashboard.css'; // We can reuse the same CSS

const AddBusiness = () => {
    const navigate = useNavigate();
    const [businessDetails, setBusinessDetails] = useState({
        businessName: '',
        category: '',
        address: '',
        description: '',
        phoneNumber: '',
        logoUrl: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const currentUser = auth.currentUser;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBusinessDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!currentUser) {
            alert("You must be logged in to add a business.");
            return;
        }
        if (!businessDetails.businessName || !businessDetails.address) {
            alert("Business Name and Address are required.");
            return;
        }
        setIsSubmitting(true);
        try {
            await addDoc(collection(db, 'vendor_list'), {
                uid: currentUser.uid,
                businessName: businessDetails.businessName,
                category: businessDetails.category,
                address: businessDetails.address,
                description: businessDetails.description,
                phoneNumber: businessDetails.phoneNumber,
                logoUrl: businessDetails.logoUrl,
                // Add default values for other required fields
                numericalRating: 0,
                rating: 0,
                reviewCount: 0,
                status: 'active',
                isVerified: false,
                createdAt: serverTimestamp(),
            });
            alert('New business added successfully!');
            navigate('/vendor-dashboard'); // Navigate back to the dashboard
        } catch (error) {
            console.error("Error adding new business: ", error);
            alert("Failed to add business. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="admin-dashboard">
            <main className="dashboard-main" style={{ marginLeft: 0, padding: '2rem' }}>
                <div className="content-section">
                    <button onClick={() => navigate(-1)} className="back-button" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#333' }}>
                        <ArrowLeft size={18} /> Back to Dashboard
                    </button>
                    <h2 className="section-title">Add a New Business Profile</h2>
                    <form className="table-card" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Business Name</label>
                            <input type="text" name="businessName" className="form-input" value={businessDetails.businessName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Category</label>
                            <input type="text" name="category" placeholder="e.g., Street Food, Cafe" className="form-input" value={businessDetails.category} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Address</label>
                            <input type="text" name="address" className="form-input" value={businessDetails.address} onChange={handleChange} required />
                        </div>
                         <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <input type="tel" name="phoneNumber" className="form-input" value={businessDetails.phoneNumber} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea rows="3" name="description" className="form-input" value={businessDetails.description} onChange={handleChange}></textarea>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Logo Image URL</label>
                            <input type="url" name="logoUrl" placeholder="https://example.com/logo.jpg" className="form-input" value={businessDetails.logoUrl} onChange={handleChange} />
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="primary-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit New Business'}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default AddBusiness;