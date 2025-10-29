// src/pages/AdminRequests.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase.js';
import { signOut } from 'firebase/auth';
import { doc, getDoc, collection, getDocs, updateDoc, deleteDoc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { 
  ArrowLeft,
  LayoutDashboard, 
  Store, 
  Users, 
  Star, 
  TrendingUp, 
  Settings, 
  Bell, 
  LogOut,
  UserPlus,
  Check, 
  X, 
  Clock,
  Mail,
  Calendar,
  AlertCircle,
  Phone,
  FileText
} from 'lucide-react';
import './AdminDashboard.css';

const AdminRequests = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('admin-requests');
  const [userName, setUserName] = useState('Admin');
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('pending');
  const [processingId, setProcessingId] = useState(null);

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

    fetchUserData();
  }, []);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const requestsRef = collection(db, 'admin_requests');
      const querySnapshot = await getDocs(requestsRef);
      
      const requestsData = [];
      querySnapshot.forEach((docSnap) => {
        requestsData.push({ id: docSnap.id, ...docSnap.data() });
      });
      
      requestsData.sort((a, b) => {
        const dateA = a.created_at?.toDate() || new Date(0);
        const dateB = b.created_at?.toDate() || new Date(0);
        return dateB - dateA;
      });
      
      setRequests(requestsData);
    } catch (error) {
      console.error('Error fetching requests:', error);
      alert('Error loading requests: ' + error.message);
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

  const handleApprove = async (requestId) => {
    const request = requests.find(r => r.id === requestId);
    if (!request) {
      alert('Request not found');
      return;
    }

    if (!window.confirm(`Are you sure you want to approve this admin request?\n\nName: ${request.first_name} ${request.last_name}\nEmail: ${request.email}\n\nThis will create a new admin account.`)) {
      return;
    }

    setProcessingId(requestId);
    
    try {
      // Create admin account in Firebase Auth using the temporary password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        request.email,
        request.temp_password // Use the temporary plain text password
      );

      const newUser = userCredential.user;

      // Save admin data in Firestore users collection with correct field names
      await setDoc(doc(db, 'users', newUser.uid), {
        first_name: request.first_name,
        last_name: request.last_name,
        contact_number: request.contact_number,
        email: request.email,
        role: 'admin',
        account_status: 'active',
        uid: newUser.uid,
        created_at: new Date(),
        updated_at: new Date(),
        approvedBy: auth.currentUser.uid,
      });

      // Update request status
      const requestRef = doc(db, 'admin_requests', requestId);
      await updateDoc(requestRef, {
        status: 'approved',
        processed_at: new Date(),
        processed_by: auth.currentUser.uid,
        admin_uid: newUser.uid
      });

      // Delete the temporary password from the request for security
      await updateDoc(requestRef, {
        temp_password: null
      });
      
      alert(`Admin account created successfully!\n\nEmail: ${request.email}\n\nThe new admin can now login with their credentials.`);
      fetchRequests();
    } catch (error) {
      console.error('Error approving request:', error);
      
      let errorMessage = 'Failed to approve request: ';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage += 'This email is already registered. The account may have been created previously.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage += 'Invalid email address.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage += 'Password is too weak.';
      } else {
        errorMessage += error.message;
      }
      
      alert(errorMessage);
    } finally {
      setProcessingId(null);
    }
  };

  const handleReject = async (requestId) => {
    const reason = window.prompt('Please provide a reason for rejection (optional):');
    if (reason === null) return; // User cancelled

    setProcessingId(requestId);

    try {
      const requestRef = doc(db, 'admin_requests', requestId);
      await updateDoc(requestRef, {
        status: 'rejected',
        processed_at: new Date(),
        processed_by: auth.currentUser.uid,
        rejection_reason: reason || 'No reason provided',
        temp_password: null // Clear the temporary password
      });
      
      alert('Request rejected successfully.');
      fetchRequests();
    } catch (error) {
      console.error('Error rejecting request:', error);
      alert('Failed to reject request: ' + error.message);
    } finally {
      setProcessingId(null);
    }
  };

  const handleDelete = async (requestId) => {
    if (!window.confirm('Are you sure you want to delete this request? This action cannot be undone.')) {
      return;
    }
    
    setProcessingId(requestId);

    try {
      const requestRef = doc(db, 'admin_requests', requestId);
      await deleteDoc(requestRef);
      
      alert('Request deleted successfully.');
      fetchRequests();
    } catch (error) {
      console.error('Error deleting request:', error);
      alert('Failed to delete request: ' + error.message);
    } finally {
      setProcessingId(null);
    }
  };

  const filteredRequests = requests.filter(request => {
    if (filter === 'all') return true;
    return request.status === filter;
  });

  const formatDate = (timestamp) => {
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

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { class: 'status-pending', icon: Clock, label: 'Pending', color: '#f39c12' },
      approved: { class: 'status-approved', icon: Check, label: 'Approved', color: '#27ae60' },
      rejected: { class: 'status-rejected', icon: X, label: 'Rejected', color: '#e74c3c' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    const IconComponent = config.icon;
    
    return (
      <span className="status-badge" style={{ 
        backgroundColor: `${config.color}15`, 
        color: config.color,
        padding: '0.25rem 0.75rem',
        borderRadius: '6px',
        fontSize: '0.875rem',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem'
      }}>
        <IconComponent size={14} />
        {config.label}
      </span>
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
            <button className="notification-btn">
              <Bell size={20} />
              <span className="notification-badge">
                {requests.filter(r => r.status === 'pending').length}
              </span>
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
              {requests.filter(r => r.status === 'pending').length > 0 && (
                <span className="nav-badge">
                  {requests.filter(r => r.status === 'pending').length}
                </span>
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
                <UserPlus size={28} style={{ marginRight: '0.5rem' }} />
                Admin Requests
              </h2>
              <div className="filter-group">
                <button 
                  className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                  onClick={() => setFilter('all')}
                >
                  All ({requests.length})
                </button>
                <button 
                  className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
                  onClick={() => setFilter('pending')}
                >
                  Pending ({requests.filter(r => r.status === 'pending').length})
                </button>
                <button 
                  className={`filter-btn ${filter === 'approved' ? 'active' : ''}`}
                  onClick={() => setFilter('approved')}
                >
                  Approved ({requests.filter(r => r.status === 'approved').length})
                </button>
                <button 
                  className={`filter-btn ${filter === 'rejected' ? 'active' : ''}`}
                  onClick={() => setFilter('rejected')}
                >
                  Rejected ({requests.filter(r => r.status === 'rejected').length})
                </button>
              </div>
            </div>
            
            <div className="table-card">
              {loading ? (
                <div className="empty-state">
                  <Clock size={48} strokeWidth={1.5} className="empty-icon" />
                  <p className="empty-text">Loading requests...</p>
                </div>
              ) : filteredRequests.length === 0 ? (
                <div className="empty-state">
                  <UserPlus size={48} strokeWidth={1.5} className="empty-icon" />
                  <p className="empty-text">No {filter !== 'all' ? filter : ''} requests found</p>
                  <p className="empty-subtext">Admin requests will appear here</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem', padding: '1.5rem' }}>
                  {filteredRequests.map((request) => (
                    <div key={request.id} style={{
                      background: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      transition: 'all 0.2s',
                      opacity: processingId === request.id ? 0.6 : 1,
                      pointerEvents: processingId === request.id ? 'none' : 'auto'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #f0f0f0' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                          <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.25rem',
                            fontWeight: '700'
                          }}>
                            {request.first_name?.charAt(0).toUpperCase() || 'A'}
                          </div>
                          <div>
                            <h3 style={{ margin: '0 0 0.25rem', color: '#2d3748', fontSize: '1.125rem', fontWeight: '600' }}>
                              {request.first_name} {request.last_name}
                            </h3>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0', color: '#718096', fontSize: '0.875rem' }}>
                              <Mail size={14} />
                              {request.email}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(request.status)}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                        {request.contact_number && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#718096', fontSize: '0.875rem' }}>
                            <Phone size={16} />
                            <span>{request.contact_number}</span>
                          </div>
                        )}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#718096', fontSize: '0.875rem' }}>
                          <Calendar size={16} />
                          <span>Requested: {formatDate(request.created_at)}</span>
                        </div>
                        {request.processed_at && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#718096', fontSize: '0.875rem' }}>
                            <Clock size={16} />
                            <span>Processed: {formatDate(request.processed_at)}</span>
                          </div>
                        )}
                      </div>

                      {request.rejection_reason && (
                        <div style={{ display: 'flex', gap: '0.5rem', padding: '1rem', background: '#fef2f2', borderRadius: '8px', marginBottom: '1rem', border: '1px solid #fecaca' }}>
                          <AlertCircle size={16} style={{ flexShrink: 0, color: '#ef4444', marginTop: '0.125rem' }} />
                          <p style={{ margin: 0, color: '#7f1d1d', fontSize: '0.875rem', lineHeight: 1.5 }}>
                            <strong>Rejection Reason:</strong> {request.rejection_reason}
                          </p>
                        </div>
                      )}

                      {request.note && (
                        <div style={{ display: 'flex', gap: '0.5rem', padding: '1rem', background: '#fffbeb', borderRadius: '8px', marginBottom: '1rem', border: '1px solid #fde68a' }}>
                          <AlertCircle size={16} style={{ flexShrink: 0, color: '#f59e0b', marginTop: '0.125rem' }} />
                          <p style={{ margin: 0, color: '#78350f', fontSize: '0.875rem', lineHeight: 1.5 }}>
                            <strong>Note:</strong> {request.note}
                          </p>
                        </div>
                      )}

                      {request.status === 'pending' ? (
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                          <button 
                            onClick={() => handleApprove(request.id)}
                            disabled={processingId !== null}
                            style={{
                              flex: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.5rem',
                              padding: '0.75rem',
                              background: processingId === request.id ? '#86efac' : '#10b981',
                              color: 'white',
                              border: 'none',
                              borderRadius: '8px',
                              fontWeight: '600',
                              cursor: processingId !== null ? 'not-allowed' : 'pointer',
                              transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                              if (processingId === null) e.target.style.background = '#059669';
                            }}
                            onMouseLeave={(e) => {
                              if (processingId === null) e.target.style.background = '#10b981';
                            }}
                          >
                            <Check size={18} />
                            {processingId === request.id ? 'Processing...' : 'Approve'}
                          </button>
                          <button 
                            onClick={() => handleReject(request.id)}
                            disabled={processingId !== null}
                            style={{
                              flex: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '0.5rem',
                              padding: '0.75rem',
                              background: processingId === request.id ? '#fca5a5' : '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '8px',
                              fontWeight: '600',
                              cursor: processingId !== null ? 'not-allowed' : 'pointer',
                              transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                              if (processingId === null) e.target.style.background = '#dc2626';
                            }}
                            onMouseLeave={(e) => {
                              if (processingId === null) e.target.style.background = '#ef4444';
                            }}
                          >
                            <X size={18} />
                            {processingId === request.id ? 'Processing...' : 'Reject'}
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => handleDelete(request.id)}
                          disabled={processingId !== null}
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem',
                            background: processingId === request.id ? '#d1d5db' : '#f3f4f6',
                            color: '#6b7280',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: '600',
                            cursor: processingId !== null ? 'not-allowed' : 'pointer',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            if (processingId === null) e.target.style.background = '#e5e7eb';
                          }}
                          onMouseLeave={(e) => {
                            if (processingId === null) e.target.style.background = '#f3f4f6';
                          }}
                        >
                          <X size={18} />
                          {processingId === request.id ? 'Deleting...' : 'Delete'}
                        </button>
                      )}
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

export default AdminRequests;