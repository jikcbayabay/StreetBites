import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../../firebase.js';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, collection, query, where, getDocs, getCountFromServer, updateDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { User, Plus, TrendingUp, MapPin, Star, Eye, Heart, MessageCircle, Camera, LogOut, Bell, Settings, BarChart2, Edit3, Trash2, Link as LinkIcon, ChevronsUpDown, Power, PowerOff } from 'lucide-react'; // Added Power and PowerOff icons
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
        profileViews: "1.2k", // Example static value
        totalLikes: 0,
        totalReviews: 0,
    });

    // State for modals
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showProfileImageModal, setShowProfileImageModal] = useState(false);
    const [showManageModal, setShowManageModal] = useState(false); // State for manage status modal
    const [selectedItem, setSelectedItem] = useState(null);

    // State for forms
    const [newItem, setNewItem] = useState({ name: '', price: '', description: '', imageUrl: '', category: '', isBestSeller: false });
    const [editItem, setEditItem] = useState({ name: '', price: '', description: '', imageUrl: '', category: '', isBestSeller: false });
    const [editableProfile, setEditableProfile] = useState({});
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // General submitting state for forms/actions

    // Effect to get the current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                fetchVendorProfiles(user.uid); // Fetch profiles once user is confirmed
            } else {
                navigate('/login');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Effect to fetch specific data when selectedVendorId changes
    useEffect(() => {
        if (selectedVendorId) {
            setLoading(true); // Set loading true when selection changes
            fetchDashboardData(selectedVendorId);
        } else if (vendorProfiles.length === 0 && currentUser) {
             // Handle case where user has no profiles after initial check
             setLoading(false);
        }
    }, [selectedVendorId, vendorProfiles]); // Rerun when selectedVendorId or the list of profiles changes


    // Fetches all business profiles owned by the user
    const fetchVendorProfiles = async (authUid) => {
        // setLoading(true); // Loading is handled by useEffect calling fetchDashboardData
        try {
            const vendorQuery = query(collection(db, "vendor_list"), where("uid", "==", authUid));
            const vendorSnapshot = await getDocs(vendorQuery);

            if (vendorSnapshot.empty) {
                console.log("No vendor profiles found for this user.");
                setVendorProfiles([]);
                setVendorData(null); // Clear vendor data if no profiles
                setSelectedVendorId(''); // Clear selection
                setLoading(false); // Stop loading if no profiles
                return;
            }

            const profiles = vendorSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setVendorProfiles(profiles);

            // Determine which profile to select
            if (!selectedVendorId && profiles.length > 0) {
                 // If no vendor is currently selected, default to the first one
                 setSelectedVendorId(profiles[0].id);
            } else if (selectedVendorId) {
                // If a vendor was already selected, make sure it still exists
                const stillExists = profiles.some(p => p.id === selectedVendorId);
                if (!stillExists && profiles.length > 0) {
                    // If the previously selected one is gone, default to the first
                    setSelectedVendorId(profiles[0].id);
                } else if (!stillExists && profiles.length === 0) {
                     // If the previously selected one is gone and there are no profiles left
                     setSelectedVendorId('');
                     setVendorData(null);
                     setLoading(false);
                }
                // If it still exists, the useEffect for selectedVendorId will handle fetching its data
            }

        } catch (error) {
            console.error("Failed to fetch vendor profiles:", error);
            setLoading(false); // Stop loading on error
        }
        // Loading is set to false within fetchDashboardData
    };

    // Fetches listings and insights for a specific business ID
    const fetchDashboardData = async (vendorId) => {
        // Find the full profile data from the state we already fetched
        // Ensure vendorProfiles is populated before finding
        const currentVendorProfile = vendorProfiles.find(p => p.id === vendorId);
        if (currentVendorProfile) {
            setVendorData(currentVendorProfile);
            setEditableProfile(currentVendorProfile); // Pre-fill profile edit form
        } else if (vendorProfiles.length > 0) {
            // If vendorProfiles is loaded but the ID is not found (shouldn't normally happen)
             console.warn("Selected vendor ID not found in fetched profiles.");
             setLoading(false);
             return; // Avoid unnecessary fetches
        } else {
             // If vendorProfiles is not yet loaded, wait for the fetchVendorProfiles call
             // setLoading(false); // Might cause flicker if called too early
             return;
        }

        try {
            // Fetch Listings
            const listingsQuery = query(collection(db, 'menu_items'), where('vendorId', '==', vendorId), where('isDeleted', '==', false));
            const listingsSnapshot = await getDocs(listingsQuery);
            const filteredListings = listingsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setListings(filteredListings);

            // Fetch Insights (Likes Count)
            const favoritesQuery = query(collection(db, 'favorites'), where('vendorId', '==', vendorId));
            const favoritesSnapshot = await getCountFromServer(favoritesQuery);
            const totalLikes = favoritesSnapshot.data().count;

            // Fetch Insights (Reviews Count)
            const reviewsQuery = query(collection(db, 'reviews'), where('vendorId', '==', vendorId));
            const reviewsSnapshot = await getCountFromServer(reviewsQuery);
            const totalReviews = reviewsSnapshot.data().count;

            setInsights(prev => ({ ...prev, totalLikes, totalReviews }));

        } catch (error) {
            console.error("Failed to fetch dashboard data:", error);
            // setError("Could not load listings or insights."); // Set specific error - uncomment if needed
        } finally {
            setLoading(false); // Ensure loading is set to false after fetches
        }
    };

    // Handler for changing the selected business via dropdown
    const handleVendorChange = (e) => {
        setSelectedVendorId(e.target.value);
        setLoading(true); // Show loading while switching
    };

    // Handler for user logout
    const handleLogout = () => {
        signOut(auth).then(() => navigate('/login')).catch(console.error);
    };

    // Handler for updating profile image URL
    const handleProfileImageUpdate = async (e) => {
        e.preventDefault();
        if (!profileImageUrl.trim() || !vendorData) return;
        setIsSubmitting(true);
        try {
            const vendorRef = doc(db, 'vendor_list', vendorData.id);
            await updateDoc(vendorRef, { logoUrl: profileImageUrl });

            setShowProfileImageModal(false);
            setProfileImageUrl('');
            // Manually update the local state to show change immediately
            setVendorData(prev => ({...prev, logoUrl: profileImageUrl}));
            setVendorProfiles(prev => prev.map(p => p.id === vendorData.id ? {...p, logoUrl: profileImageUrl} : p));
            alert("Profile image updated successfully!");
        } catch (error) {
            console.error("Error updating profile image:", error);
            alert("Failed to update profile image. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handler for adding a new menu item
    const handleAddNewListing = async (e) => {
        e.preventDefault();
        if (!newItem.name || !newItem.price || !vendorData) return;
        setIsSubmitting(true);
        try {
            const docRef = await addDoc(collection(db, 'menu_items'), {
                vendorId: vendorData.id,
                name: newItem.name,
                price: parseFloat(newItem.price),
                description: newItem.description,
                imageUrl: newItem.imageUrl || '',
                category: newItem.category || '',
                isBestSeller: newItem.isBestSeller,
                isDeleted: false,
                createdAt: serverTimestamp(),
            });
            // Optimistically update UI
             setListings(prev => [...prev, { id: docRef.id, vendorId: vendorData.id, ...newItem, price: parseFloat(newItem.price), isDeleted: false }]);
            setNewItem({ name: '', price: '', description: '', imageUrl: '', category: '', isBestSeller: false });
            setShowAddModal(false);
        } catch (error) {
            console.error("Error adding new listing:", error);
            alert("Failed to add listing. Please try again.");
             // Optionally refetch if optimistic update fails often
             // fetchDashboardData(selectedVendorId);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handler to open the edit modal and populate form
    const handleEditItem = (item) => {
        setSelectedItem(item);
        setEditItem({
            name: item.name,
            price: item.price,
            description: item.description || '',
            imageUrl: item.imageUrl || '',
            category: item.category || '',
            isBestSeller: item.isBestSeller || false,
            currentImageUrl: item.imageUrl // Keep track of the original image URL
        });
        setShowEditModal(true);
    };

    // Handler for updating an existing menu item
    const handleUpdateItem = async (e) => {
        e.preventDefault();
        if (!editItem.name || !editItem.price || !selectedItem) return;
        setIsSubmitting(true);
        try {
            const itemRef = doc(db, 'menu_items', selectedItem.id);
            const updatedData = {
                name: editItem.name,
                price: parseFloat(editItem.price),
                description: editItem.description,
                imageUrl: editItem.imageUrl || editItem.currentImageUrl, // Use new URL or keep current
                category: editItem.category || '',
                isBestSeller: editItem.isBestSeller,
            };
            await updateDoc(itemRef, updatedData);
             // Optimistically update UI
             setListings(prev => prev.map(item => item.id === selectedItem.id ? { ...item, ...updatedData } : item));
            setShowEditModal(false);
            setSelectedItem(null);
        } catch (error) {
            console.error("Error updating item:", error);
            alert("Failed to update item. Please try again.");
            // Optionally refetch
            // fetchDashboardData(selectedVendorId);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handler for marking a menu item as deleted
    const handleDeleteItem = async () => {
        if (!selectedItem) return;
        // Use a simple prompt for confirmation, replace with a custom modal if needed
        if (!window.confirm(`Are you sure you want to delete "${selectedItem.name}"?`)) return;
        setIsSubmitting(true);
        try {
            const itemRef = doc(db, 'menu_items', selectedItem.id);
            await updateDoc(itemRef, { isDeleted: true });
            // Optimistically update UI
            setListings(prev => prev.filter(item => item.id !== selectedItem.id));
            setShowEditModal(false);
            setSelectedItem(null);
        } catch (error) {
            console.error("Error deleting item:", error);
            alert("Failed to delete item. Please try again.");
            // Optionally refetch
            // fetchDashboardData(selectedVendorId);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handler for updating the vendor's profile details
    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        if (!vendorData) return;
        setIsSubmitting(true);
        const changedFields = {};
        // Only include fields that have actually changed
        if (editableProfile.businessName !== vendorData.businessName) changedFields.businessName = editableProfile.businessName;
        if (editableProfile.description !== vendorData.description) changedFields.description = editableProfile.description;
        if (editableProfile.address !== vendorData.address) changedFields.address = editableProfile.address;
         // Add other editable fields here (e.g., category, hours)

        if (Object.keys(changedFields).length === 0) {
            alert("No changes detected.");
            setIsSubmitting(false);
            return;
        }

        try {
            const vendorRef = doc(db, 'vendor_list', vendorData.id);
            await updateDoc(vendorRef, changedFields);
             // Manually update local state for immediate feedback
             const updatedVendorData = { ...vendorData, ...changedFields };
             setVendorData(updatedVendorData);
             setVendorProfiles(prev => prev.map(p => p.id === vendorData.id ? updatedVendorData : p));
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handler for navigating to the 'add business' page
    const handleAddAnotherBusiness = () => navigate('/add-business');

    // Handler for toggling the business status (active/inactive)
    const handleToggleStatus = async () => {
        if (!vendorData) return;
        setIsSubmitting(true);
        const newStatus = vendorData.status === 'active' ? 'inactive' : 'active';
        try {
            const vendorRef = doc(db, 'vendor_list', vendorData.id);
            await updateDoc(vendorRef, { status: newStatus });
            
            // Manually update local state for immediate feedback
            const updatedVendorData = { ...vendorData, status: newStatus };
            setVendorData(updatedVendorData);
            setVendorProfiles(prev => prev.map(p => p.id === vendorData.id ? updatedVendorData : p));

            setShowManageModal(false);
            alert(`Your business "${vendorData.businessName}" is now ${newStatus}.`);
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update business status.");
        } finally {
            setIsSubmitting(false);
        }
    };


    // --- Render Functions ---

    const renderListings = () => (
        <div className="content-section">
            <div className="section-header">
                <div className="title-with-selector">
                    <h2 className="section-title">My Listings</h2>
                    {vendorProfiles.length > 1 && (
                        <div className="vendor-selector-wrapper">
                             <select className="vendor-selector" value={selectedVendorId} onChange={handleVendorChange} disabled={loading}>
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

            {!vendorData && !loading && vendorProfiles.length === 0 && (
                 <div className="empty-menu-state card-style" style={{padding: '40px', textAlign: 'center'}}>
                    <p>You haven't added any business profiles yet.</p>
                    <button className="primary-btn" style={{marginTop: '1rem'}} onClick={() => navigate('/add-business')}>Add Your First Business</button>
                </div>
            )}
            
            {vendorData && (
                <>
                    <div className="activity-card">
                        <div className="vendor-profile">
                            <div className="vendor-image-container">
                                <img src={vendorData.logoUrl || "https://via.placeholder.com/100"} alt={vendorData.businessName} className="vendor-image" />
                                {vendorData.status === 'inactive' && <div className="status-overlay inactive">Inactive</div>}
                                <button className="edit-image-btn" onClick={() => setShowProfileImageModal(true)}>
                                    <Camera size={16} />
                                </button>
                            </div>
                            <div className="vendor-info">
                                <div className="vendor-name-and-status">
                                    <h3>{vendorData.businessName}</h3>
                                    <span className={`status-badge ${vendorData.status === 'active' ? 'active' : 'inactive'}`}>
                                        {vendorData.status === 'active' ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
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
            { label: "Profile Views", value: insights.profileViews || 'N/A', icon: <Eye size={24} /> },
            { label: "Total Likes", value: insights.totalLikes, icon: <Heart size={24} /> },
            { label: "Total Reviews", value: insights.totalReviews, icon: <MessageCircle size={24} /> },
        ];
        return (
            <div className="content-section">
                <h2 className="section-title">Insights for {vendorData?.businessName || '...'}</h2>
                 {!vendorData && !loading && (
                    <p>Select a business to view insights.</p>
                 )}
                 {vendorData && (
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
                 )}
            </div>
        );
    };

    const renderProfile = () => (
        <div className="content-section">
            <h2 className="section-title">Profile Settings for {vendorData?.businessName || '...'}</h2>
            {!vendorData && !loading && (
                 <p>Select a business to manage its profile.</p>
            )}
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
                     {/* Add inputs for other fields like category, hours etc. if needed */}
                    <div className="form-actions">
                        <button type="submit" className="primary-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Saving...' : 'Save Changes'}
                        </button>
                        <button type="button" className="secondary-btn" onClick={handleAddAnotherBusiness}>
                            <Plus size={16} /> Add Another Business
                        </button>
                        <button type="button" className="danger-btn" onClick={() => setShowManageModal(true)}>
                            <Settings size={16} /> Manage Status
                        </button>
                    </div>
                </form>
            )}
        </div>
    );

    // --- Main Return ---
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
            {showProfileImageModal && vendorData && (
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
                                        defaultValue={vendorData.logoUrl || ''}
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
            {showAddModal && vendorData && (
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
            {showEditModal && selectedItem && vendorData && (
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

            {/* Manage Business Modal */}
            {showManageModal && vendorData && (
                <div className="modal-overlay" onClick={() => setShowManageModal(false)}>
                    <div className="modal-content modal-small" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Manage Business Status</h3>
                            <button className="modal-close" onClick={() => setShowManageModal(false)}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <p>Set "{vendorData.businessName}" as active or inactive. Inactive profiles will be hidden from public view.</p>
                            <div className="status-toggle-section">
                                <span>Current Status:</span>
                                <span className={`status-indicator ${vendorData.status === 'active' ? 'active' : 'inactive'}`}>
                                    {vendorData.status === 'active' ? 'Active' : 'Inactive'}
                                </span>
                            </div>
                            <button
                                className={`btn ${vendorData.status === 'active' ? 'btn-danger' : 'btn-success'}`}
                                onClick={handleToggleStatus}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Updating...' : (vendorData.status === 'active' ? <><PowerOff size={16}/> Mark as Inactive</> : <><Power size={16}/> Mark as Active</>)}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VendorDashboard;

