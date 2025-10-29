// src/pages/AdminVendorApplications.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase.js';
import { signOut } from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  collection, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  updateDoc,
  addDoc,
  deleteDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { 
  LayoutDashboard, 
  Store, 
  Users, 
  TrendingUp, 
  Settings, 
  Bell, 
  LogOut,
  UserPlus,
  Search,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  FileText,
  MapPin,
  Mail,
  Building,
  Calendar,
  AlertCircle
} from 'lucide-react';
import './AdminDashboard.css';

const AdminVendorApplications = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('vendor-applications');
  const [userName, setUserName] = useState('Admin');
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState([]);
  const [pendingRequests, setPendingRequests] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  
  // Pagination and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('pending');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Fetch admin user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            
            // Verify admin role
            if (userData.role !== 'admin') {
              console.error('User is not an admin');
              navigate('/');
              return;
            }
            
            setUserName(userData.first_name || 'Admin');
          } else {
            console.error('User document not found');
            navigate('/login');
          }
        } else {
          console.error('No authenticated user');
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  // Fetch vendor applications
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const applicationsRef = collection(db, 'vendor_applications');
        const q = query(applicationsRef, orderBy('appliedAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const applicationsData = [];
        querySnapshot.forEach((docSnap) => {
          applicationsData.push({
            id: docSnap.id,
            ...docSnap.data(),
            appliedAt: docSnap.data().appliedAt?.toDate() || new Date()
          });
        });
        
        setApplications(applicationsData);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    if (!loading) {
      fetchApplications();
    }
  }, [loading]);

  // Fetch pending admin requests count
  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const requestsRef = collection(db, 'admin_requests');
        const q = query(requestsRef, where('status', '==', 'pending'));
        const querySnapshot = await getDocs(q);
        
        setPendingRequests(querySnapshot.size);
      } catch (error) {
        console.error('Error fetching pending requests:', error);
      }
    };

    fetchPendingRequests();
  }, []);

  // Filter and search applications
  const filteredApplications = useMemo(() => {
    let filtered = [...applications];

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(app => app.status === statusFilter);
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(app =>
        app.businessName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.address?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [applications, searchQuery, statusFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedApplications = filteredApplications.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter, itemsPerPage]);

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

  const handleViewDetails = (application) => {
    setSelectedApplication(application);
    setShowModal(true);
  };

const handleApproveApplication = async (application) => {
    if (!window.confirm(`Are you sure you want to approve ${application.businessName}'s application?`)) {
      return;
    }

    setActionLoading(true);
    try {
      const user = auth.currentUser;
      
      // 1. Update user role to vendor
      const userRef = doc(db, 'users', application.uid);
      await updateDoc(userRef, {
        role: 'vendor',
        updated_at: serverTimestamp()
      });
      
      // 2. Create vendor profile in vendor_list
      const vendorData = {
        uid: application.uid,
        businessName: application.businessName,
        address: application.address,
        category: '', // To be filled by vendor later
        description: '',
        distance: null,
        heroImages: [],
        hours: application.operatingHours,
        imageURL: '',
        logoUrl: '',
        neighborhood: '',
        numericalRating: null,
        phoneNumber: '',
        priceRange: '',
        rating: null,
        reviewCount: null,
        status: '',
        tags: [],
        isVerified: true,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp()
      };

      await addDoc(collection(db, 'vendor_list'), vendorData);

      // 3. Update application status
      const applicationRef = doc(db, 'vendor_applications', application.id);
      await updateDoc(applicationRef, {
        status: 'approved',
        reviewedAt: serverTimestamp(),
        reviewedBy: user.uid
      });

      // 4. Log admin action
      await addDoc(collection(db, 'admin_logs'), {
        action: 'approve_vendor_application',
        adminId: user.uid,
        adminName: userName,
        targetId: application.id,
        targetType: 'vendor_application',
        details: {
          businessName: application.businessName,
          applicantEmail: application.email,
          applicantUid: application.uid
        },
        timestamp: serverTimestamp()
      });

      // 5. Refresh applications list
      setApplications(prev => 
        prev.map(app => 
          app.id === application.id 
            ? { ...app, status: 'approved', reviewedAt: new Date(), reviewedBy: user.uid }
            : app
        )
      );

      setShowModal(false);
      alert(`${application.businessName}'s application has been approved! User role updated to vendor.`);
    } catch (error) {
      console.error('Error approving application:', error);
      alert('Failed to approve application. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleRejectApplication = (application) => {
    setSelectedApplication(application);
    setRejectionReason('');
    setShowRejectionModal(true);
  };

  const confirmRejectApplication = async () => {
    if (!rejectionReason.trim()) {
      alert('Please provide a reason for rejection');
      return;
    }

    setActionLoading(true);
    try {
      const user = auth.currentUser;

      // Update application status
      const applicationRef = doc(db, 'vendor_applications', selectedApplication.id);
      await updateDoc(applicationRef, {
        status: 'rejected',
        reviewedAt: serverTimestamp(),
        reviewedBy: user.uid,
        rejectionReason: rejectionReason
      });

      // Log admin action
      await addDoc(collection(db, 'admin_logs'), {
        action: 'reject_vendor_application',
        adminId: user.uid,
        adminName: userName,
        targetId: selectedApplication.id,
        targetType: 'vendor_application',
        details: {
          businessName: selectedApplication.businessName,
          applicantEmail: selectedApplication.email,
          applicantUid: selectedApplication.uid,
          rejectionReason: rejectionReason
        },
        timestamp: serverTimestamp()
      });

      // Refresh applications list
      setApplications(prev => 
        prev.map(app => 
          app.id === selectedApplication.id 
            ? { ...app, status: 'rejected', reviewedAt: new Date(), reviewedBy: user.uid, rejectionReason }
            : app
        )
      );

      setShowRejectionModal(false);
      setShowModal(false);
      alert(`${selectedApplication.businessName}'s application has been rejected.`);
    } catch (error) {
      console.error('Error rejecting application:', error);
      alert('Failed to reject application. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteApplication = async (applicationId) => {
    if (!window.confirm('Are you sure you want to delete this application? This action cannot be undone.')) {
      return;
    }

    setActionLoading(true);
    try {
      await deleteDoc(doc(db, 'vendor_applications', applicationId));
      
      setApplications(prev => prev.filter(app => app.id !== applicationId));
      setShowModal(false);
      alert('Application deleted successfully.');
    } catch (error) {
      console.error('Error deleting application:', error);
      alert('Failed to delete application. Please try again.');
    } finally {
      setActionLoading(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { color: '#f39c12', icon: Clock, label: 'Pending' },
      approved: { color: '#27ae60', icon: CheckCircle, label: 'Approved' },
      rejected: { color: '#e74c3c', icon: XCircle, label: 'Rejected' }
    };

    const config = statusConfig[status] || statusConfig.pending;
    const IconComponent = config.icon;

    return (
      <span className="status-badge" style={{ backgroundColor: `${config.color}15`, color: config.color }}>
        <IconComponent size={14} />
        {config.label}
      </span>
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="loading-container">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

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
            <button className="notification-btn" onClick={() => handleNavigation('admin-requests')}>
              <Bell size={20} />
              <span className="notification-badge">{pendingRequests}</span>
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
              className="nav-item"
              onClick={() => handleNavigation('overview')}
            >
              <LayoutDashboard size={20} className="nav-icon" />
              <span className="nav-label">Overview</span>
            </button>
            <button
              className="nav-item"
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
              className="nav-item"
              onClick={() => handleNavigation('analytics')}
            >
              <TrendingUp size={20} className="nav-icon" />
              <span className="nav-label">Analytics</span>
            </button>
            <button
              className="nav-item"
              onClick={() => handleNavigation('admin-requests')}
            >
              <UserPlus size={20} className="nav-icon" />
              <span className="nav-label">Admin Requests</span>
              {pendingRequests > 0 && (
                <span className="nav-badge">{pendingRequests}</span>
              )}
            </button>
            <button
              className={`nav-item ${activeTab === 'vendor-applications' ? 'active' : ''}`}
              onClick={() => handleNavigation('vendor-applications')}
            >
              <FileText size={20} className="nav-icon" />
              <span className="nav-label">Vendor Applications</span>
            </button>
            <button
              className="nav-item"
              onClick={() => handleNavigation('logs')}
            >
              <Clock size={20} className="nav-icon" />
              <span className="nav-label">Admin Logs</span>
            </button>
            <button
              className="nav-item"
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
              <h2 className="section-title">Vendor Applications</h2>
              <div className="stats-summary">
                <span className="stat-item">
                  <Clock size={16} />
                  {applications.filter(app => app.status === 'pending').length} Pending
                </span>
                <span className="stat-item">
                  <CheckCircle size={16} />
                  {applications.filter(app => app.status === 'approved').length} Approved
                </span>
                <span className="stat-item">
                  <XCircle size={16} />
                  {applications.filter(app => app.status === 'rejected').length} Rejected
                </span>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="activity-controls">
              <div className="search-box">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by business name, email, or address..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="filter-controls">
                <select
                  className="filter-select"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
                
                <select
                  className="filter-select"
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                >
                  <option value="5">5 per page</option>
                  <option value="10">10 per page</option>
                  <option value="20">20 per page</option>
                  <option value="50">50 per page</option>
                </select>
              </div>
            </div>

            {/* Applications Table */}
            <div className="table-card">
              {paginatedApplications.length > 0 ? (
                <>
                  <div className="table-container">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Business Name</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Applied Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedApplications.map((application) => (
                          <tr key={application.id}>
                            <td>
                              <div className="table-cell-content">
                                <Building size={16} className="cell-icon" />
                                <span className="cell-text">{application.businessName}</span>
                              </div>
                            </td>
                            <td>
                              <div className="table-cell-content">
                                <Mail size={16} className="cell-icon" />
                                <span className="cell-text">{application.email}</span>
                              </div>
                            </td>
                            <td>
                              <div className="table-cell-content">
                                <MapPin size={16} className="cell-icon" />
                                <span className="cell-text">{application.address}</span>
                              </div>
                            </td>
                            <td>
                              <div className="table-cell-content">
                                <Calendar size={16} className="cell-icon" />
                                <span className="cell-text">
                                  {formatDate(application.appliedAt)}
                                </span>
                              </div>
                            </td>
                            <td>{getStatusBadge(application.status)}</td>
                            <td>
                              <div className="action-buttons">
                                <button
                                  className="action-btn view"
                                  onClick={() => handleViewDetails(application)}
                                  title="View Details"
                                >
                                  <Eye size={16} />
                                </button>
                                {application.status === 'pending' && (
                                  <>
                                    <button
                                      className="action-btn approve"
                                      onClick={() => handleApproveApplication(application)}
                                      disabled={actionLoading}
                                      title="Approve"
                                    >
                                      <CheckCircle size={16} />
                                    </button>
                                    <button
                                      className="action-btn reject"
                                      onClick={() => handleRejectApplication(application)}
                                      disabled={actionLoading}
                                      title="Reject"
                                    >
                                      <XCircle size={16} />
                                    </button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="pagination">
                      <div className="pagination-info">
                        Showing {startIndex + 1} to {Math.min(endIndex, filteredApplications.length)} of {filteredApplications.length} applications
                      </div>
                      
                      <div className="pagination-buttons">
                        <button
                          className="pagination-btn"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          <ChevronLeft size={16} />
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                          if (
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1)
                          ) {
                            return (
                              <button
                                key={page}
                                className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                                onClick={() => handlePageChange(page)}
                              >
                                {page}
                              </button>
                            );
                          } else if (
                            page === currentPage - 2 ||
                            page === currentPage + 2
                          ) {
                            return <span key={page} className="pagination-ellipsis">...</span>;
                          }
                          return null;
                        })}
                        
                        <button
                          className="pagination-btn"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="empty-state">
                  <FileText size={48} strokeWidth={1.5} className="empty-icon" />
                  <p className="empty-text">
                    {searchQuery || statusFilter !== 'all' 
                      ? 'No applications match your filters' 
                      : 'No vendor applications yet'}
                  </p>
                  <p className="empty-subtext">
                    {searchQuery || statusFilter !== 'all'
                      ? 'Try adjusting your search or filter criteria'
                      : 'Applications will appear here when users apply to become vendors'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* View Details Modal */}
      {showModal && selectedApplication && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Application Details</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <div className="detail-section">
                <div className="detail-row">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value">{getStatusBadge(selectedApplication.status)}</span>
                </div>
                
                <div className="detail-row">
                  <span className="detail-label">Business Name:</span>
                  <span className="detail-value">{selectedApplication.businessName}</span>
                </div>
                
                <div className="detail-row">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{selectedApplication.email}</span>
                </div>
                
                <div className="detail-row">
                  <span className="detail-label">Address:</span>
                  <span className="detail-value">{selectedApplication.address}</span>
                </div>
                
                <div className="detail-row">
                  <span className="detail-label">Operating Hours:</span>
                  <span className="detail-value">{selectedApplication.operatingHours}</span>
                </div>
                
                <div className="detail-row">
                  <span className="detail-label">Applied Date:</span>
                  <span className="detail-value">{formatDate(selectedApplication.appliedAt)}</span>
                </div>
                
                <div className="detail-row">
                  <span className="detail-label">User ID:</span>
                  <span className="detail-value mono">{selectedApplication.uid}</span>
                </div>

                {selectedApplication.status === 'rejected' && selectedApplication.rejectionReason && (
                  <div className="detail-row rejection-reason">
                    <span className="detail-label">
                      <AlertCircle size={16} />
                      Rejection Reason:
                    </span>
                    <span className="detail-value">{selectedApplication.rejectionReason}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="modal-footer">
              {selectedApplication.status === 'pending' && (
                <>
                  <button
                    className="modal-btn approve-btn"
                    onClick={() => handleApproveApplication(selectedApplication)}
                    disabled={actionLoading}
                  >
                    <CheckCircle size={18} />
                    {actionLoading ? 'Processing...' : 'Approve Application'}
                  </button>
                  <button
                    className="modal-btn reject-btn"
                    onClick={() => {
                      setShowModal(false);
                      handleRejectApplication(selectedApplication);
                    }}
                    disabled={actionLoading}
                  >
                    <XCircle size={18} />
                    Reject Application
                  </button>
                </>
              )}
              {selectedApplication.status !== 'pending' && (
                <button
                  className="modal-btn delete-btn"
                  onClick={() => handleDeleteApplication(selectedApplication.id)}
                  disabled={actionLoading}
                >
                  Delete Application
                </button>
              )}
              <button className="modal-btn cancel-btn" onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rejection Reason Modal */}
      {showRejectionModal && selectedApplication && (
        <div className="modal-overlay" onClick={() => setShowRejectionModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Reject Application</h3>
              <button className="modal-close" onClick={() => setShowRejectionModal(false)}>
                ×
              </button>
            </div>
            
            <div className="modal-body">
              <p className="rejection-warning">
                You are about to reject the application from <strong>{selectedApplication.businessName}</strong>.
              </p>
              <p className="rejection-instruction">
                Please provide a reason for rejection:
              </p>
              <textarea
                className="rejection-textarea"
                placeholder="Enter reason for rejection..."
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                rows={5}
              />
            </div>
            
            <div className="modal-footer">
              <button
                className="modal-btn reject-btn"
                onClick={confirmRejectApplication}
                disabled={actionLoading || !rejectionReason.trim()}
              >
                <XCircle size={18} />
                {actionLoading ? 'Processing...' : 'Confirm Rejection'}
              </button>
              <button
                className="modal-btn cancel-btn"
                onClick={() => setShowRejectionModal(false)}
                disabled={actionLoading}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVendorApplications;