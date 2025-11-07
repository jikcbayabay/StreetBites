// src/pages/AdminVendors.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase.js';
import { signOut } from 'firebase/auth';
import { doc, getDoc, collection, getDocs, query, where, deleteDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { 
  LayoutDashboard, 
  Store, 
  Users, 
  Star, 
  TrendingUp, 
  Settings, 
  Bell, 
  LogOut,
  UserPlus,
  Clock,
  MapPin,
  Phone,
  DollarSign,
  CheckCircle,
  XCircle,
  AlertCircle,
  FileText,
  X,
  MessageSquare,
  Calendar,
  Trash2
} from 'lucide-react';
import './AdminDashboard.css';

const AdminVendors = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('vendors');
  const [userName, setUserName] = useState('Admin');
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [pendingRequestsCount, setPendingRequestsCount] = useState(0);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [vendorReviews, setVendorReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [showReviewsModal, setShowReviewsModal] = useState(false);
  const [allReviews, setAllReviews] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [vendorToDelete, setVendorToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUserName(userData.firstName || userData.first_name || 'Admin');
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const fetchPendingRequests = async () => {
      try {
        const requestsRef = collection(db, 'admin_requests');
        const q = query(requestsRef, where('status', '==', 'pending'));
        const querySnapshot = await getDocs(q);
        setPendingRequestsCount(querySnapshot.size);
      } catch (error) {
        console.error('Error fetching pending requests:', error);
      }
    };

    fetchUserData();
    fetchPendingRequests();
  }, []);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      setLoading(true);
      
      // Fetch all users with vendor role
      const usersRef = collection(db, 'users');
      const usersQuery = query(usersRef, where('role', '==', 'vendor'));
      const usersSnapshot = await getDocs(usersQuery);
      
      // Fetch all vendor listings
      const vendorListRef = collection(db, 'vendor_list');
      const vendorListSnapshot = await getDocs(vendorListRef);
      
      // Fetch all reviews to calculate actual ratings
      const reviewsRef = collection(db, 'reviews');
      const reviewsSnapshot = await getDocs(reviewsRef);
      
      // Store all reviews for later use
      const reviewsData = [];
      reviewsSnapshot.forEach((reviewDoc) => {
        reviewsData.push({
          id: reviewDoc.id,
          ...reviewDoc.data()
        });
      });
      setAllReviews(reviewsData);
      
      // Create a map of vendor listings by uid
      const vendorListMap = {};
      vendorListSnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        if (data.uid) {
          vendorListMap[data.uid] = { id: docSnap.id, ...data };
        }
      });
      
      // Calculate ratings from reviews for each vendor
      const vendorRatings = {};
      reviewsData.forEach((reviewData) => {
        const vendorId = reviewData.vendorId;
        const rating = reviewData.rating;
        
        if (vendorId && rating) {
          if (!vendorRatings[vendorId]) {
            vendorRatings[vendorId] = { totalRating: 0, count: 0 };
          }
          vendorRatings[vendorId].totalRating += rating;
          vendorRatings[vendorId].count += 1;
        }
      });
      
      // Combine user data with vendor listing data and calculated ratings
      const vendorsData = [];
      usersSnapshot.forEach((userDoc) => {
        const userData = userDoc.data();
        const vendorListing = vendorListMap[userDoc.id];
        
        if (vendorListing) {
          const vendorId = vendorListing.id;
          const ratingData = vendorRatings[vendorId];
          const calculatedRating = ratingData 
            ? ratingData.totalRating / ratingData.count 
            : 0;
          const reviewCount = ratingData ? ratingData.count : 0;
          
          vendorsData.push({
            userId: userDoc.id,
            vendorId: vendorListing.id,
            // User data
            email: userData.email,
            firstName: userData.first_name || userData.firstName,
            lastName: userData.last_name || userData.lastName,
            contactNumber: userData.contact_number,
            accountStatus: userData.account_status,
            createdAt: userData.created_at,
            // Vendor listing data
            address: vendorListing.address,
            businessName: vendorListing.businessName,
            category: vendorListing.category,
            description: vendorListing.description,
            hours: vendorListing.hours,
            isVerified: vendorListing.isVerified,
            neighborhood: vendorListing.neighborhood,
            phoneNumber: vendorListing.phoneNumber,
            priceRange: vendorListing.priceRange,
            // Use calculated rating from reviews
            rating: calculatedRating,
            reviewCount: reviewCount
          });
        }
      });
      
      // Sort by creation date (newest first)
      vendorsData.sort((a, b) => {
        const dateA = a.createdAt?.toDate() || new Date(0);
        const dateB = b.createdAt?.toDate() || new Date(0);
        return dateB - dateA;
      });
      
      setVendors(vendorsData);
    } catch (error) {
      console.error('Error fetching vendors:', error);
      alert('Error loading vendors: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleViewReviews = async (vendor) => {
    setSelectedVendor(vendor);
    setShowReviewsModal(true);
    setLoadingReviews(true);
    
    try {
      // Filter reviews for this vendor
      const reviews = allReviews.filter(review => review.vendorId === vendor.vendorId);
      
      // Fetch reviewer names
      const reviewsWithNames = await Promise.all(
        reviews.map(async (review) => {
          try {
            const userDoc = await getDoc(doc(db, 'users', review.userId));
            const userData = userDoc.exists() ? userDoc.data() : {};
            return {
              ...review,
              reviewerName: review.reviewerName || userData.first_name || userData.firstName || 'Anonymous',
              reviewerAvatar: review.reviewerAvatarUrl || userData.avatarUrl || null
            };
          } catch (error) {
            console.error('Error fetching reviewer data:', error);
            return {
              ...review,
              reviewerName: review.reviewerName || 'Anonymous',
              reviewerAvatar: review.reviewerAvatarUrl || null
            };
          }
        })
      );
      
      // Sort by timestamp (newest first)
      reviewsWithNames.sort((a, b) => {
        const dateA = a.timestamp?.toDate() || new Date(0);
        const dateB = b.timestamp?.toDate() || new Date(0);
        return dateB - dateA;
      });
      
      setVendorReviews(reviewsWithNames);
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setLoadingReviews(false);
    }
  };

  const handleDeleteVendor = async () => {
    if (!vendorToDelete) return;
    
    setIsDeleting(true);
    try {
      // Delete vendor listing from vendor_list
      await deleteDoc(doc(db, 'vendor_list', vendorToDelete.vendorId));
      
      // Delete user account from users collection
      await deleteDoc(doc(db, 'users', vendorToDelete.userId));
      
      // Delete all reviews associated with this vendor
      const vendorReviews = allReviews.filter(review => review.vendorId === vendorToDelete.vendorId);
      await Promise.all(
        vendorReviews.map(review => deleteDoc(doc(db, 'reviews', review.id)))
      );
      
      // Log the action
      const currentUser = auth.currentUser;
      if (currentUser) {
        await addDoc(collection(db, 'admin_logs'), {
          action: 'delete',
          targetType: 'vendor',
          targetId: vendorToDelete.vendorId,
          targetName: vendorToDelete.businessName,
          performedBy: currentUser.uid,
          performedByEmail: currentUser.email,
          timestamp: serverTimestamp(),
          details: {
            vendorName: vendorToDelete.businessName,
            vendorEmail: vendorToDelete.email,
            reviewsDeleted: vendorReviews.length
          }
        });
      }
      
      // Refresh vendor list
      await fetchVendors();
      
      // Close modal and reset state
      setShowDeleteModal(false);
      setVendorToDelete(null);
      
      alert('Vendor deleted successfully!');
    } catch (error) {
      console.error('Error deleting vendor:', error);
      alert('Error deleting vendor: ' + error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleNavigation = (tab) => {
    if (tab === 'overview') {
      navigate('/admin-dashboard');
    } else if (tab === 'users') {
      navigate('/admin-users');
    } else if (tab === 'vendors') {
      navigate('/admin-vendors');
    } else if (tab === 'admin-requests') {
      navigate('/admin-requests');
    } else if (tab === 'logs') {
      navigate('/admin-logs');
    } else if (tab === 'analytics') {
      navigate('/admin-analytics');
    } else if (tab === 'vendor-applications') {
      navigate('/admin-vendor-application');
    }
  };

  const filteredVendors = vendors.filter(vendor => {
    if (filter === 'all') return true;
    if (filter === 'verified') return vendor.isVerified === true;
    if (filter === 'unverified') return vendor.isVerified !== true;
    if (filter === 'active') return vendor.accountStatus === 'active';
    if (filter === 'inactive') return vendor.accountStatus !== 'active';
    return true;
  });

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'
    });
  };

  const formatDateTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Star Rating Component
  const StarRating = ({ rating, size = 16 }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // Full star
        stars.push(
          <Star 
            key={i} 
            size={size} 
            style={{ color: '#f59e0b', fill: '#f59e0b' }} 
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        // Half star
        stars.push(
          <div key={i} style={{ position: 'relative', display: 'inline-block' }}>
            <Star size={size} style={{ color: '#e5e7eb', fill: '#e5e7eb' }} />
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '50%', 
              overflow: 'hidden' 
            }}>
              <Star size={size} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
            </div>
          </div>
        );
      } else {
        // Empty star
        stars.push(
          <Star 
            key={i} 
            size={size} 
            style={{ color: '#e5e7eb', fill: '#e5e7eb' }} 
          />
        );
      }
    }
    
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        {stars}
      </div>
    );
  };

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="dashboard-title">StreetBites</h1>
            <span className="admin-badge">Admin</span>
          </div>
          <div className="header-right">
            <button className="notification-btn" onClick={() => navigate('/admin-requests')}>
              <Bell size={20} />
              {pendingRequestsCount > 0 && (
                <span className="notification-badge">{pendingRequestsCount}</span>
              )}
            </button>
            <div className="admin-profile">
              <div className="profile-avatar">{userName.charAt(0).toUpperCase()}</div>
              <span className="profile-name">Hello {userName}!</span>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <nav className="sidebar-nav">
            <button
              className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => handleNavigation('overview')}
            >
              <LayoutDashboard size={20} className="nav-icon" />
              <span className="nav-label">Overview</span>
            </button>
            <button
              className={`nav-item ${activeTab === 'vendors' ? 'active' : ''}`}
              onClick={() => handleNavigation('vendors')}
            >
              <Store size={20} className="nav-icon" />
              <span className="nav-label">Vendors</span>
            </button>
            <button
              className="nav-item"
              onClick={() => handleNavigation('users')}
            >
              <Users size={20} className="nav-icon" />
              <span className="nav-label">Users</span>
            </button>
            <button
              className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => handleNavigation('analytics')}
            > 
              <TrendingUp size={20} className="nav-icon" />
              <span className="nav-label">Analytics</span>
            </button>
            <button
              className={`nav-item ${activeTab === 'admin-requests' ? 'active' : ''}`}
              onClick={() => handleNavigation('admin-requests')}
            >
              <UserPlus size={20} className="nav-icon" />
              <span className="nav-label">Admin Requests</span>
              {pendingRequestsCount > 0 && (
                <span className="nav-badge">{pendingRequestsCount}</span>
              )}
            </button>
            <button
              className="nav-item"
              onClick={() => handleNavigation('vendor-applications')}
            >
              <FileText size={20} className="nav-icon" />
              <span className="nav-label">Vendor Applications</span>
            </button>
            <button
              className={`nav-item ${activeTab === 'logs' ? 'active' : ''}`}
              onClick={() => handleNavigation('logs')}
            >
              <Clock size={20} className="nav-icon" />
              <span className="nav-label">Admin Logs</span>
            </button>
            <button
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => handleNavigation('settings')}
            >
              <Settings size={20} className="nav-icon" />
              <span className="nav-label">Settings</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <div className="content-section">
            <div className="section-header">
              <h2 className="section-title">
                <Store size={28} style={{ marginRight: '0.5rem' }} />
                Vendor Management
              </h2>
              <div className="filter-group">
                <button 
                  className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                  onClick={() => setFilter('all')}
                >
                  All ({vendors.length})
                </button>
                <button 
                  className={`filter-btn ${filter === 'verified' ? 'active' : ''}`}
                  onClick={() => setFilter('verified')}
                >
                  Verified ({vendors.filter(v => v.isVerified === true).length})
                </button>
                <button 
                  className={`filter-btn ${filter === 'unverified' ? 'active' : ''}`}
                  onClick={() => setFilter('unverified')}
                >
                  Unverified ({vendors.filter(v => v.isVerified !== true).length})
                </button>
                <button 
                  className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
                  onClick={() => setFilter('active')}
                >
                  Active ({vendors.filter(v => v.accountStatus === 'active').length})
                </button>
              </div>
            </div>
            
            <div className="table-card">
              {loading ? (
                <div className="empty-state">
                  <Clock size={48} strokeWidth={1.5} className="empty-icon" />
                  <p className="empty-text">Loading vendors...</p>
                </div>
              ) : filteredVendors.length === 0 ? (
                <div className="empty-state">
                  <Store size={48} strokeWidth={1.5} className="empty-icon" />
                  <p className="empty-text">No {filter !== 'all' ? filter : ''} vendors found</p>
                  <p className="empty-subtext">Vendors will appear here</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '1.5rem', padding: '1.5rem' }}>
                  {filteredVendors.map((vendor) => (
                    <div key={vendor.vendorId} style={{
                      background: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      transition: 'all 0.2s'
                    }}>
                      {/* Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #f0f0f0' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flex: 1 }}>
                          <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            flexShrink: 0
                          }}>
                            {vendor.businessName?.charAt(0).toUpperCase() || 'V'}
                          </div>
                          <div style={{ minWidth: 0 }}>
                            <h3 style={{ margin: '0 0 0.25rem', color: '#2d3748', fontSize: '1.125rem', fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {vendor.businessName || 'N/A'}
                            </h3>
                            <p style={{ margin: '0', color: '#718096', fontSize: '0.875rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {vendor.firstName} {vendor.lastName}
                            </p>
                          </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end', flexShrink: 0, marginLeft: '0.5rem' }}>
                          {vendor.isVerified ? (
                            <span style={{ 
                              backgroundColor: '#10b98115', 
                              color: '#10b981',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: '600',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.25rem'
                            }}>
                              <CheckCircle size={12} />
                              Verified
                            </span>
                          ) : (
                            <span style={{ 
                              backgroundColor: '#f59e0b15', 
                              color: '#f59e0b',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: '600',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.25rem'
                            }}>
                              <AlertCircle size={12} />
                              Unverified
                            </span>
                          )}
                          {vendor.accountStatus === 'active' && (
                            <span style={{ 
                              backgroundColor: '#3b82f615', 
                              color: '#3b82f6',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: '600',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.25rem'
                            }}>
                              <CheckCircle size={12} />
                              Active
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Category Badge */}
                      {vendor.category && (
                        <div style={{ marginBottom: '1rem' }}>
                          <span style={{ 
                            backgroundColor: '#8b5cf615', 
                            color: '#8b5cf6',
                            padding: '0.375rem 0.75rem',
                            borderRadius: '6px',
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            display: 'inline-block'
                          }}>
                            {vendor.category}
                          </span>
                        </div>
                      )}

                      {/* Description */}
                      {vendor.description && (
                        <p style={{ 
                          margin: '0 0 1rem', 
                          color: '#4a5568', 
                          fontSize: '0.875rem', 
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                          {vendor.description}
                        </p>
                      )}

                      {/* Details */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1rem' }}>
                        {vendor.address && (
                          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#718096', fontSize: '0.875rem' }}>
                            <MapPin size={16} style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                            <span style={{ lineHeight: 1.4 }}>{vendor.address}</span>
                          </div>
                        )}
                        {vendor.neighborhood && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#718096', fontSize: '0.875rem' }}>
                            <MapPin size={16} />
                            <span>Neighborhood: {vendor.neighborhood}</span>
                          </div>
                        )}
                        {vendor.phoneNumber && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#718096', fontSize: '0.875rem' }}>
                            <Phone size={16} />
                            <span>{vendor.phoneNumber}</span>
                          </div>
                        )}
                        {vendor.hours && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#718096', fontSize: '0.875rem' }}>
                            <Clock size={16} />
                            <span>{vendor.hours}</span>
                          </div>
                        )}
                        {vendor.priceRange && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#718096', fontSize: '0.875rem' }}>
                            <DollarSign size={16} />
                            <span>Price: {vendor.priceRange}</span>
                          </div>
                        )}
                      </div>

                      {/* Rating & Reviews */}
                      <div style={{ paddingTop: '1rem', borderTop: '1px solid #f0f0f0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            {vendor.rating > 0 ? (
                              <>
                                <StarRating rating={vendor.rating} size={16} />
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <span style={{ color: '#2d3748', fontWeight: '600', fontSize: '0.875rem' }}>
                                    {vendor.rating.toFixed(1)}
                                  </span>
                                  <span style={{ color: '#718096', fontSize: '0.875rem' }}>
                                    ({vendor.reviewCount} {vendor.reviewCount === 1 ? 'review' : 'reviews'})
                                  </span>
                                </div>
                              </>
                            ) : (
                              <span style={{ color: '#9ca3af', fontSize: '0.875rem', fontStyle: 'italic' }}>
                                No reviews yet
                              </span>
                            )}
                          </div>
                          <div style={{ color: '#718096', fontSize: '0.75rem' }}>
                            Joined {formatDate(vendor.createdAt)}
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          {vendor.reviewCount > 0 && (
                            <button
                              onClick={() => handleViewReviews(vendor)}
                              style={{
                                flex: 1,
                                padding: '0.625rem 1rem',
                                backgroundColor: '#f97316',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                transition: 'background-color 0.2s'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
                            >
                              <MessageSquare size={16} />
                              View Reviews
                            </button>
                          )}
                          <button
                            onClick={() => {
                              setVendorToDelete(vendor);
                              setShowDeleteModal(true);
                            }}
                            style={{
                              flex: vendor.reviewCount > 0 ? 0 : 1,
                              padding: '0.625rem 1rem',
                              backgroundColor: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '8px',
                              fontSize: '0.875rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.5rem',
                              transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
                          >
                            <Trash2 size={16} />
                            {vendor.reviewCount > 0 ? '' : 'Delete Vendor'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Reviews Modal */}
      {showReviewsModal && selectedVendor && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e5e7eb',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h2 style={{ margin: '0 0 0.25rem', fontSize: '1.5rem', fontWeight: '600', color: '#1f2937' }}>
                  Reviews for {selectedVendor.businessName}
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <StarRating rating={selectedVendor.rating} size={18} />
                  <span style={{ color: '#4b5563', fontSize: '0.875rem' }}>
                    {selectedVendor.rating.toFixed(1)} average from {selectedVendor.reviewCount} {selectedVendor.reviewCount === 1 ? 'review' : 'reviews'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowReviewsModal(false);
                  setSelectedVendor(null);
                  setVendorReviews([]);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6b7280',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1.5rem'
            }}>
              {loadingReviews ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem' }}>
                  <Clock size={48} strokeWidth={1.5} style={{ color: '#9ca3af' }} />
                </div>
              ) : vendorReviews.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                  <MessageSquare size={48} strokeWidth={1.5} style={{ margin: '0 auto 1rem', color: '#9ca3af' }} />
                  <p style={{ margin: 0, fontSize: '1rem' }}>No reviews yet</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {vendorReviews.map((review) => (
                    <div key={review.id} style={{
                      padding: '1.5rem',
                      backgroundColor: '#f9fafb',
                      borderRadius: '12px',
                      border: '1px solid #e5e7eb'
                    }}>
                      {/* Review Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: review.reviewerAvatar 
                              ? `url(${review.reviewerAvatar}) center/cover` 
                              : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1rem',
                            fontWeight: '600',
                            flexShrink: 0
                          }}>
                            {!review.reviewerAvatar && (review.reviewerName?.charAt(0).toUpperCase() || 'A')}
                          </div>
                          <div>
                            <h4 style={{ margin: '0 0 0.25rem', fontSize: '1rem', fontWeight: '600', color: '#1f2937' }}>
                              {review.reviewerName}
                            </h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <StarRating rating={review.rating} size={14} />
                              <span style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '600' }}>
                                {review.rating}.0
                              </span>
                            </div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', fontSize: '0.75rem' }}>
                          <Calendar size={14} />
                          <span>{formatDateTime(review.timestamp)}</span>
                        </div>
                      </div>

                      {/* Review Tags */}
                      {review.tags && review.tags.length > 0 && (
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                          {review.tags.map((tag, index) => (
                            <span key={index} style={{
                              backgroundColor: '#dbeafe',
                              color: '#1e40af',
                              padding: '0.25rem 0.625rem',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: '500'
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Review Text */}
                      {review.text && (
                        <p style={{
                          margin: 0,
                          color: '#374151',
                          fontSize: '0.9375rem',
                          lineHeight: 1.6
                        }}>
                          {review.text}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && vendorToDelete && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1001,
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            maxWidth: '500px',
            width: '100%',
            padding: '2rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            {/* Warning Icon */}
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#fee2e2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}>
              <AlertCircle size={32} style={{ color: '#ef4444' }} />
            </div>

            {/* Title */}
            <h2 style={{
              margin: '0 0 0.75rem',
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1f2937',
              textAlign: 'center'
            }}>
              Delete Vendor?
            </h2>

            {/* Description */}
            <p style={{
              margin: '0 0 0.5rem',
              color: '#6b7280',
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              textAlign: 'center'
            }}>
              Are you sure you want to delete <strong>{vendorToDelete.businessName}</strong>?
            </p>
            
            <p style={{
              margin: '0 0 1.5rem',
              color: '#ef4444',
              fontSize: '0.875rem',
              lineHeight: 1.6,
              textAlign: 'center',
              fontWeight: '500'
            }}>
              This will permanently delete the vendor account, listing, and all associated reviews. This action cannot be undone.
            </p>

            {/* Vendor Info Box */}
            <div style={{
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.5rem' }}>
                <strong>Vendor:</strong> {vendorToDelete.businessName}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.5rem' }}>
                <strong>Owner:</strong> {vendorToDelete.firstName} {vendorToDelete.lastName}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.5rem' }}>
                <strong>Email:</strong> {vendorToDelete.email}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                <strong>Reviews to delete:</strong> {vendorToDelete.reviewCount}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setVendorToDelete(null);
                }}
                disabled={isDeleting}
                style={{
                  flex: 1,
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'white',
                  color: '#374151',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  cursor: isDeleting ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.2s',
                  opacity: isDeleting ? 0.5 : 1
                }}
                onMouseEnter={(e) => !isDeleting && (e.currentTarget.style.backgroundColor = '#f9fafb')}
                onMouseLeave={(e) => !isDeleting && (e.currentTarget.style.backgroundColor = 'white')}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteVendor}
                disabled={isDeleting}
                style={{
                  flex: 1,
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  cursor: isDeleting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'background-color 0.2s',
                  opacity: isDeleting ? 0.7 : 1
                }}
                onMouseEnter={(e) => !isDeleting && (e.currentTarget.style.backgroundColor = '#dc2626')}
                onMouseLeave={(e) => !isDeleting && (e.currentTarget.style.backgroundColor = '#ef4444')}
              >
                {isDeleting ? (
                  <>
                    <Clock size={16} style={{ animation: 'spin 1s linear infinite' }} />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={16} />
                    Delete Vendor
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVendors;