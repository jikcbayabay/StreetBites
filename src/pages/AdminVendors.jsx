// src/pages/AdminVendors.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase.js';
import { signOut } from 'firebase/auth';
import { doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';
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
  FileText
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
      
      // Create a map of vendor listings by uid
      const vendorListMap = {};
      vendorListSnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        if (data.uid) {
          vendorListMap[data.uid] = { id: docSnap.id, ...data };
        }
      });
      
      // Combine user data with vendor listing data
      const vendorsData = [];
      usersSnapshot.forEach((userDoc) => {
        const userData = userDoc.data();
        const vendorListing = vendorListMap[userDoc.id];
        
        if (vendorListing) {
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
            rating: vendorListing.rating,
            reviewCount: vendorListing.reviewCount
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
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid #f0f0f0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Star size={16} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                          <span style={{ color: '#2d3748', fontWeight: '600', fontSize: '0.875rem' }}>
                            {vendor.rating ? vendor.rating.toFixed(1) : 'N/A'}
                          </span>
                          <span style={{ color: '#718096', fontSize: '0.875rem' }}>
                            ({vendor.reviewCount || 0} reviews)
                          </span>
                        </div>
                        <div style={{ color: '#718096', fontSize: '0.75rem' }}>
                          Joined {formatDate(vendor.createdAt)}
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
    </div>
  );
};

export default AdminVendors;