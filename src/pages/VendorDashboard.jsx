import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../../firebase.js';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, collection, query, where, getDocs, getCountFromServer, updateDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { User, Plus, TrendingUp, MapPin, Star, Eye, Heart, MessageCircle, Camera, LogOut, Bell, Settings, BarChart2, Edit3, Trash2, Link as LinkIcon, ChevronsUpDown } from 'lucide-react';
import './VendorDashboard.css';

const VendorDashboard = () => {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState('listings');
    const [loading, setLoading] = useState(true);
    
    const [currentUser, setCurrentUser] = useState(null);
    
    // State to manage multiple businesses
    const [vendorProfiles, setVendorProfiles] = useState([]); // Holds all businesses for the user
    const [selectedVendorId, setSelectedVendorId] = useState(''); // ID of the currently selected business
    const [vendorData, setVendorData] = useState(null); // Data for the selected business

    const [listings, setListings] = useState([]);
    const [insights, setInsights] = useState({
        profileViews: "1.2k",
        totalLikes: 0,
        totalReviews: 0,
    });

    // State for modals
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showProfileImageModal, setShowProfileImageModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    
    // State for forms
    const [newItem, setNewItem] = useState({ name: '', price: '', description: '', imageUrl: '', category: '', isBestSeller: false });
    const [editItem, setEditItem] = useState({ name: '', price: '', description: '', imageUrl: '', category: '', isBestSeller: false });
    const [editableProfile, setEditableProfile] = useState({});
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Effect to get the current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                fetchVendorProfiles(user.uid); // Initial fetch of all business profiles
            } else {
                navigate('/login');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Effect to fetch data for the selected vendor
    useEffect(() => {
        if (selectedVendorId) {
            fetchDashboardData(selectedVendorId);
        }
    }, [selectedVendorId]);

    // Fetches all businesses owned by the user
    const fetchVendorProfiles = async (authUid) => {
        setLoading(true);
        try {
            const vendorQuery = query(collection(db, "vendor_list"), where("uid", "==", authUid));
            const vendorSnapshot = await getDocs(vendorQuery);

            if (vendorSnapshot.empty) {
                console.log("No vendor profiles found for this user.");
                setVendorProfiles([]);
                setVendorData(null);
                setLoading(false);
                return;
            }

            const profiles = vendorSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setVendorProfiles(profiles);
            if (profiles.length > 0) {
                setSelectedVendorId(profiles[0].id); // Select the first business by default
            }

        } catch (error) {
            console.error("Failed to fetch vendor profiles:", error);
            setLoading(false);
        }
    };

    // Fetches listings and insights for a specific business ID
    const fetchDashboardData = async (vendorId) => {
        // Find the full profile data from the state we already fetched
        const currentVendorProfile = vendorProfiles.find(p => p.id === vendorId);
        if (currentVendorProfile) {
            setVendorData(currentVendorProfile);
            setEditableProfile(currentVendorProfile);
        }
        
        try {
            const listingsQuery = query(collection(db, 'menu_items'), where('vendorId', '==', vendorId));
            const listingsSnapshot = await getDocs(listingsQuery);
            const filteredListings = listingsSnapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(item => !item.isDeleted);
            setListings(filteredListings);

            const favoritesQuery = query(collection(db, 'favorites'), where('vendorId', '==', vendorId));
            const favoritesSnapshot = await getCountFromServer(favoritesQuery);
            
            const reviewsQuery = query(collection(db, 'reviews'), where('vendorId', '==', vendorId));
            const reviewsSnapshot = await getCountFromServer(reviewsQuery);
            
            setInsights(prev => ({
                ...prev,
                totalLikes: favoritesSnapshot.data().count,
                totalReviews: reviewsSnapshot.data().count,
            }));
            
        } catch (error) {
            console.error("Failed to fetch dashboard data:", error);
        } finally {
            setLoading(false);
        }
    };
    
    // Handles changing the selected business from the dropdown
    const handleVendorChange = (e) => {
        setSelectedVendorId(e.target.value);
    };

    const handleLogout = () => {
        signOut(auth).then(() => navigate('/login')).catch(console.error);
    };

    const handleProfileImageUpdate = async (e) => {
        e.preventDefault();
        if (!profileImageUrl.trim() || !vendorData) return;
        setIsSubmitting(true);
        try {
            const vendorRef = doc(db, 'vendor_list', vendorData.id);
            await updateDoc(vendorRef, { logoUrl: profileImageUrl });
            
            setShowProfileImageModal(false);
            setProfileImageUrl('');
            await fetchVendorProfiles(currentUser.uid); // Refetch all profiles to get updated data
            alert("Profile image updated successfully!");
        } catch (error) {
            console.error("Error updating profile image:", error);
            alert("Failed to update profile image. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleAddNewListing = async (e) => {
        e.preventDefault();
        if (!newItem.name || !newItem.price || !vendorData) return;
        setIsSubmitting(true);
        try {
            await addDoc(collection(db, 'menu_items'), {
                vendorId: vendorData.id, // Use the ID of the currently selected vendor
                name: newItem.name,
                price: parseFloat(newItem.price),
                description: newItem.description,
                imageUrl: newItem.imageUrl || '',
                category: newItem.category || '',
                isBestSeller: newItem.isBestSeller,
                isDeleted: false,
                createdAt: serverTimestamp(),
            });
            setNewItem({ name: '', price: '', description: '', imageUrl: '', category: '', isBestSeller: false });
            setShowAddModal(false);
            fetchDashboardData(selectedVendorId); // Refresh data for the current vendor
        } catch (error) {
            console.error("Error adding new listing:", error);
            alert("Failed to add listing. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEditItem = (item) => {
        setSelectedItem(item);
        setEditItem({
            name: item.name,
            price: item.price,
            description: item.description || '',
            imageUrl: item.imageUrl || '',
            category: item.category || '',
            isBestSeller: item.isBestSeller || false,
            currentImageUrl: item.imageUrl
        });
        setShowEditModal(true);
    };

    const handleUpdateItem = async (e) => {
        e.preventDefault();
        if (!editItem.name || !editItem.price || !selectedItem) return;
        setIsSubmitting(true);
        try {
            const itemRef = doc(db, 'menu_items', selectedItem.id);
            await updateDoc(itemRef, {
                name: editItem.name,
                price: parseFloat(editItem.price),
                description: editItem.description,
                imageUrl: editItem.imageUrl || editItem.currentImageUrl,
                category: editItem.category || '',
                isBestSeller: editItem.isBestSeller,
            });
            setShowEditModal(false);
            setSelectedItem(null);
            fetchDashboardData(selectedVendorId);
        } catch (error) {
            console.error("Error updating item:", error);
            alert("Failed to update item. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteItem = async () => {
        if (!selectedItem) return;
        if (!window.confirm(`Are you sure you want to delete "${selectedItem.name}"?`)) return;
        setIsSubmitting(true);
        try {
            const itemRef = doc(db, 'menu_items', selectedItem.id);
            await updateDoc(itemRef, { isDeleted: true });
            setShowEditModal(false);
            setSelectedItem(null);
            fetchDashboardData(selectedVendorId);
        } catch (error) {
            console.error("Error deleting item:", error);
            alert("Failed to delete item. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        if (!vendorData) return;
        setIsSubmitting(true);
        try {
            const vendorRef = doc(db, 'vendor_list', vendorData.id);
            await updateDoc(vendorRef, editableProfile);
            await fetchVendorProfiles(currentUser.uid); // Refetch profiles to update dropdown if name changed
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleAddAnotherBusiness = () => {
        navigate('/add-business');
    };

    const renderListings = () => (
        <div className="content-section">
            <div className="section-header">
                <div className="title-with-selector">
                    <h2 className="section-title">My Listings</h2>
                    {vendorProfiles.length > 1 && (
                        <div className="vendor-selector-wrapper">
                             <select className="vendor-selector" value={selectedVendorId} onChange={handleVendorChange}>
                                {vendorProfiles.map(profile => (
                                    <option key={profile.id} value={profile.id}>
                                        {profile.businessName}
                                    </option>
                                ))}
                            </select>
                            <ChevronsUpDown size={16} className="vendor-selector-icon" />
                        </div>
                    )}
                </div>
                <button className="primary-btn" onClick={() => setShowAddModal(true)} disabled={!vendorData}>
                    <Plus size={18} /> Add New Listing
                </button>
            </div>

            {!vendorData && !loading && (
                 <div className="empty-menu-state" style={{padding: '40px', textAlign: 'center'}}>
                    <p>No business profile found. Please add one to get started.</p>
                    <button className="primary-btn" style={{marginTop: '1rem'}} onClick={() => navigate('/add-business')}>Add a Business</button>
                </div>
            )}
            
            {vendorData && (
                <>
                    <div className="activity-card">
                        <div className="vendor-profile">
                            <div className="vendor-image-container">
                                <img src={vendorData.logoUrl || "https://via.placeholder.com/100"} alt={vendorData.businessName} className="vendor-image" />
                                <button className="edit-image-btn" onClick={() => setShowProfileImageModal(true)}>
                                    <Camera size={16} />
                                </button>
                            </div>
                            <div className="vendor-info">
                                <h3>{vendorData.businessName}</h3>
                                <p className="vendor-description">{vendorData.description}</p>
                                <div className="vendor-meta">
                                    <span className="location"><MapPin size={14} />{vendorData.address}</span>
                                    <span className="category">{vendorData.category}</span>
                                    <span className="rating"><Star size={14} fill="#fbbf24" color="#fbbf24" />{vendorData.numericalRating || 'N/A'}</span>
                                </div>
                            </div>
                            <button className="action-btn edit" onClick={() => setActiveNav('profile')}><Edit3 size={16} /> Edit Profile</button>
                        </div>
                    </div>
                    <h3 className="subsection-title">Menu Items ({listings.length})</h3>
                    <div className="menu-scrollable-container">
                        <div className="listings-grid">
                            {listings.length === 0 ? (
                                <div className="empty-menu-state">
                                    <p>No menu items yet. Click "Add New Listing" to get started!</p>
                                </div>
                            ) : (
                                listings.map(item => (
                                    <div key={item.id} className="listing-card" onClick={() => handleEditItem(item)}>
                                        <div className="listing-image-wrapper">
                                            {item.isBestSeller && (
                                                <div className="bestseller-badge">
                                                    <Star size={12} fill="white" /> Best Seller
                                                </div>
                                            )}
                                            <img src={item.imageUrl || "https://via.placeholder.com/300x200"} alt={item.name} className="listing-image" />
                                        </div>
                                        <div className="listing-details">
                                            <h4>{item.name}</h4>
                                            {item.category && <p className="listing-category">{item.category}</p>}
                                            <p className="listing-price">₱{item.price.toFixed(2)}</p>
                                            {item.description && <p className="listing-description">{item.description}</p>}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
    
    const renderInsights = () => {
        const dynamicInsights = [
            { label: "Profile Views", value: insights.profileViews, icon: <Eye size={24} /> },
            { label: "Total Likes", value: insights.totalLikes, icon: <Heart size={24} /> },
            { label: "Total Reviews", value: insights.totalReviews, icon: <MessageCircle size={24} /> },
        ];
        return (
            <div className="content-section">
                <h2 className="section-title">Insights</h2>
                <div className="stats-grid">
                    {dynamicInsights.map((insight, idx) => (
                        <div key={idx} className="stat-card">
                            <div className="stat-icon" style={{backgroundColor: '#fff5f5', color: '#E84C3D'}}>{insight.icon}</div>
                            <div className="stat-content">
                                <p className="stat-label">{insight.label}</p>
                                <h3 className="stat-value">{insight.value}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderProfile = () => (
        <div className="content-section">
            <h2 className="section-title">Profile Settings</h2>
            {vendorData && (
                <form className="table-card" onSubmit={handleProfileUpdate}>
                    <div className="form-group">
                        <label className="form-label">Business Name</label>
                        <input type="text" className="form-input" value={editableProfile.businessName || ''} onChange={(e) => setEditableProfile({...editableProfile, businessName: e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea rows="3" className="form-input" value={editableProfile.description || ''} onChange={(e) => setEditableProfile({...editableProfile, description: e.target.value})}></textarea>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-input" value={editableProfile.address || ''} onChange={(e) => setEditableProfile({...editableProfile, address: e.target.value})} />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="primary-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Saving...' : 'Save Changes'}
                        </button>
                        <button type="button" className="secondary-btn" onClick={handleAddAnotherBusiness}>
                            <Plus size={16} /> Add Another Business
                        </button>
                    </div>
                </form>
            )}
        </div>
    );

    return (
        <div className="admin-dashboard">
            <header className="dashboard-header">
                <div className="header-content">
                    <div className="header-left">
                        <h1 className="dashboard-title">StreetBites</h1>
                        <span className="admin-badge">Vendor</span>
                    </div>
                    <div className="header-right">
                        <button className="notification-btn" onClick={() => alert('Notifications feature coming soon!')}>
                            <Bell size={20} /><span className="notification-badge">2</span>
                        </button>
                        <div className="admin-profile">
                            <div className="profile-avatar">{currentUser?.email?.charAt(0).toUpperCase()}</div>
                            <span className="profile-name">{currentUser?.displayName || currentUser?.email}</span>
                        </div>
                        <button className="logout-btn" onClick={handleLogout}><LogOut size={18} /><span>Logout</span></button>
                    </div>
                </div>
            </header>

            <div className="dashboard-container">
                <aside className="dashboard-sidebar">
                    <nav className="sidebar-nav">
                        <button className={`nav-item ${activeNav === 'listings' ? 'active' : ''}`} onClick={() => setActiveNav('listings')}>
                           <MapPin size={20} className="nav-icon"/> <span className="nav-label">Listings</span>
                        </button>
                        <button className={`nav-item ${activeNav === 'insights' ? 'active' : ''}`} onClick={() => setActiveNav('insights')}>
                           <BarChart2 size={20} className="nav-icon"/> <span className="nav-label">Insights</span>
                        </button>
                        <button className={`nav-item ${activeNav === 'profile' ? 'active' : ''}`} onClick={() => setActiveNav('profile')}>
                           <Settings size={20} className="nav-icon"/> <span className="nav-label">Settings</span>
                        </button>
                    </nav>
                </aside>
                <main className="dashboard-main">
                    {loading ? <p style={{ textAlign: 'center', padding: '40px' }}>Loading Dashboard...</p> : (
                        <>
                            {activeNav === 'listings' && renderListings()}
                            {activeNav === 'insights' && renderInsights()}
                            {activeNav === 'profile' && renderProfile()}
                        </>
                    )}
                </main>
            </div>

            {/* Profile Image Modal */}
            {showProfileImageModal && (
                <div className="modal-overlay" onClick={() => setShowProfileImageModal(false)}>
                    <div className="modal-content modal-small" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Update Profile Image</h3>
                            <button className="modal-close" onClick={() => setShowProfileImageModal(false)}>&times;</button>
                        </div>
                        <form className="modal-body" onSubmit={handleProfileImageUpdate}>
                            <div className="form-group">
                                <label className="form-label">Image URL</label>
                                <div className="url-input-wrapper">
                                    <LinkIcon size={18} className="url-icon" />
                                    <input 
                                        type="url" 
                                        className="form-input url-input" 
                                        placeholder="https://example.com/image.jpg" 
                                        value={profileImageUrl} 
                                        onChange={(e) => setProfileImageUrl(e.target.value)} 
                                        required 
                                    />
                                </div>
                                <small style={{color: '#6b7280', fontSize: '0.875rem', display: 'block', marginTop: '0.5rem'}}>
                                    Paste a direct link to your profile image
                                </small>
                            </div>
                            {profileImageUrl && (
                                <div className="image-preview">
                                    <label className="form-label">Preview</label>
                                    <img src={profileImageUrl} alt="Preview" onError={(e) => e.target.src = "https://via.placeholder.com/100"} />
                                </div>
                            )}
                            <div className="modal-footer">
                                <button type="button" className="secondary-btn" onClick={() => setShowProfileImageModal(false)}>Cancel</button>
                                <button type="submit" className="primary-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Updating...' : 'Update Image'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Add Listing Modal */}
            {showAddModal && (
                <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Add New Listing</h3>
                            <button className="modal-close" onClick={() => setShowAddModal(false)}>&times;</button>
                        </div>
                        <form className="modal-body" onSubmit={handleAddNewListing}>
                            <div className="form-group">
                                <label className="form-label">Item Name</label>
                                <input type="text" className="form-input" placeholder="e.g., Chicken Barbecue" value={newItem.name} onChange={(e) => setNewItem({...newItem, name: e.target.value})} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Price (₱)</label>
                                <input type="number" step="0.01" className="form-input" placeholder="e.g., 35.00" value={newItem.price} onChange={(e) => setNewItem({...newItem, price: e.target.value})} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Category</label>
                                <input 
                                    type="text"
                                    className="form-input" 
                                    placeholder="e.g., Isaw, Street Food, Grilled"
                                    value={newItem.category} 
                                    onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Description</label>
                                <textarea rows="3" className="form-input" placeholder="Describe your item..." value={newItem.description} onChange={(e) => setNewItem({...newItem, description: e.target.value})}></textarea>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Image URL</label>
                                <div className="url-input-wrapper">
                                    <LinkIcon size={18} className="url-icon" />
                                    <input 
                                        type="url" 
                                        className="form-input url-input" 
                                        placeholder="https://example.com/image.jpg" 
                                        value={newItem.imageUrl} 
                                        onChange={(e) => setNewItem({...newItem, imageUrl: e.target.value})} 
                                    />
                                </div>
                                <small style={{color: '#6b7280', fontSize: '0.875rem', display: 'block', marginTop: '0.5rem'}}>
                                    Optional: Paste a direct link to the item image
                                </small>
                            </div>
                            <div className="form-group">
                                <label className="form-label" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                    <input 
                                        type="checkbox" 
                                        checked={newItem.isBestSeller} 
                                        onChange={(e) => setNewItem({...newItem, isBestSeller: e.target.checked})}
                                        style={{width: '18px', height: '18px', cursor: 'pointer'}}
                                    />
                                    <span>Mark as Best Seller</span>
                                    <Star size={16} fill={newItem.isBestSeller ? "#fbbf24" : "none"} color="#fbbf24" />
                                </label>
                                <small style={{color: '#6b7280', fontSize: '0.875rem', display: 'block', marginTop: '0.5rem', marginLeft: '1.5rem'}}>
                                    Best sellers will be highlighted to customers
                                </small>
                            </div>
                            {newItem.imageUrl && (
                                <div className="image-preview">
                                    <label className="form-label">Preview</label>
                                    <img src={newItem.imageUrl} alt="Preview" onError={(e) => e.target.src = "https://via.placeholder.com/300x200"} />
                                </div>
                            )}
                            <div className="modal-footer">
                                <button type="button" className="secondary-btn" onClick={() => setShowAddModal(false)}>Cancel</button>
                                <button type="submit" className="primary-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Adding...' : 'Add Listing'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Edit Listing Modal */}
            {showEditModal && selectedItem && (
                <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Edit Menu Item</h3>
                            <button className="modal-close" onClick={() => setShowEditModal(false)}>&times;</button>
                        </div>
                        <form className="modal-body" onSubmit={handleUpdateItem}>
                            <div className="form-group">
                                <label className="form-label">Item Name</label>
                                <input type="text" className="form-input" value={editItem.name} onChange={(e) => setEditItem({...editItem, name: e.target.value})} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Price (₱)</label>
                                <input type="number" step="0.01" className="form-input" value={editItem.price} onChange={(e) => setEditItem({...editItem, price: e.target.value})} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Category</label>
                                <input 
                                    type="text"
                                    className="form-input" 
                                    placeholder="e.g., Isaw, Street Food, Grilled"
                                    value={editItem.category} 
                                    onChange={(e) => setEditItem({...editItem, category: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Description</label>
                                <textarea rows="3" className="form-input" value={editItem.description} onChange={(e) => setEditItem({...editItem, description: e.target.value})}></textarea>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Image URL</label>
                                <div className="url-input-wrapper">
                                    <LinkIcon size={18} className="url-icon" />
                                    <input 
                                        type="url" 
                                        className="form-input url-input" 
                                        placeholder="https://example.com/image.jpg" 
                                        value={editItem.imageUrl} 
                                        onChange={(e) => setEditItem({...editItem, imageUrl: e.target.value})} 
                                    />
                                </div>
                                <small style={{color: '#6b7280', fontSize: '0.875rem', display: 'block', marginTop: '0.5rem'}}>
                                    Leave empty to keep current image
                                </small>
                            </div>
                            <div className="form-group">
                                <label className="form-label" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                                    <input 
                                        type="checkbox" 
                                        checked={editItem.isBestSeller} 
                                        onChange={(e) => setEditItem({...editItem, isBestSeller: e.target.checked})}
                                        style={{width: '18px', height: '18px', cursor: 'pointer'}}
                                    />
                                    <span>Mark as Best Seller</span>
                                    <Star size={16} fill={editItem.isBestSeller ? "#fbbf24" : "none"} color="#fbbf24" />
                                </label>
                                <small style={{color: '#6b7280', fontSize: '0.875rem', display: 'block', marginTop: '0.5rem', marginLeft: '1.5rem'}}>
                                    Best sellers will be highlighted to customers
                                </small>
                            </div>
                            {(editItem.imageUrl || editItem.currentImageUrl) && (
                                <div className="image-preview">
                                    <label className="form-label">Current Image</label>
                                    <img src={editItem.imageUrl || editItem.currentImageUrl} alt="Current" onError={(e) => e.target.src = "https://via.placeholder.com/300x200"} />
                                </div>
                            )}
                            <div className="modal-footer">
                                <button type="button" className="delete-confirm-btn" onClick={handleDeleteItem} disabled={isSubmitting}>
                                    <Trash2 size={16} /> Delete Item
                                </button>
                                <div style={{flex: 1}}></div>
                                <button type="button" className="secondary-btn" onClick={() => setShowEditModal(false)}>Cancel</button>
                                <button type="submit" className="primary-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VendorDashboard;