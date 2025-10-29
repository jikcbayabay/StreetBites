// src/pages/AdminDashboard.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase.js';
import { signOut } from 'firebase/auth';
import { doc, getDoc, collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { 
  LayoutDashboard, 
  Store, 
  Users, 
  Star, 
  TrendingUp, 
  Settings, 
  Bell, 
  LogOut,
  Plus,
  Activity,
  BarChart3,
  PieChart,
  Shield,
  Mail,
  CreditCard,
  Clock,
  FileText,
  UserPlus,
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [userName, setUserName] = useState('Admin');
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [pendingRequests, setPendingRequests] = useState(0);
  const [applications, setApplications] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  
  // Pagination and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUserName(userData.first_name || 'Admin');
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Fetch users for stats
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, 'users');
        const querySnapshot = await getDocs(usersRef);
        
        const usersData = [];
        querySnapshot.forEach((docSnap) => {
          const userData = docSnap.data();
          if (userData.role !== 'admin') {
            usersData.push({ id: docSnap.id, ...userData });
          }
        });
        
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Fetch pending admin requests
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
            ...docSnap.data()
          });
        });
        
        setApplications(applicationsData);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  // Fetch recent activities
  useEffect(() => {
    const fetchRecentActivities = async () => {
      try {
        const activities = [];

        // Fetch recent user registrations
        const usersRef = collection(db, 'users');
        const usersQuery = query(usersRef, orderBy('created_at', 'desc'), limit(5));
        const usersSnapshot = await getDocs(usersQuery);
        
        usersSnapshot.forEach((doc) => {
          const userData = doc.data();
          const userName = userData.role === 'vendor' 
            ? userData.business_name || `${userData.first_name} ${userData.last_name}`
            : `${userData.first_name} ${userData.last_name}`;
          
          activities.push({
            id: doc.id,
            type: userData.role === 'vendor' ? 'vendor_registration' : 'user_registration',
            description: userData.role === 'vendor' 
              ? `New vendor "${userName}" registered`
              : `New user ${userName} joined`,
            timestamp: userData.created_at?.toDate() || new Date(),
            icon: userData.role === 'vendor' ? 'Store' : 'UserPlus',
            color: userData.role === 'vendor' ? '#E84C3D' : '#3498db'
          });
        });

        // Fetch recent vendor profile updates
        const vendorsRef = collection(db, 'vendor_list');
        const vendorsQuery = query(vendorsRef, orderBy('updated_at', 'desc'), limit(5));
        const vendorsSnapshot = await getDocs(vendorsQuery);
        
        vendorsSnapshot.forEach((doc) => {
          const vendorData = doc.data();
          const businessName = vendorData.businessName || 'Unknown Vendor';
          
          const createdAt = vendorData.created_at?.toDate?.() || new Date(0);
          const updatedAt = vendorData.updated_at?.toDate?.() || new Date(0);
          
          if (updatedAt.getTime() - createdAt.getTime() > 60000) {
            activities.push({
              id: doc.id,
              type: 'vendor_update',
              description: `Vendor "${businessName}" updated their profile`,
              timestamp: updatedAt,
              icon: 'Settings',
              color: '#f39c12'
            });
          }
        });

        // Fetch recent reviews
        const reviewsRef = collection(db, 'reviews');
        const reviewsQuery = query(reviewsRef, orderBy('timestamp', 'desc'), limit(5));
        const reviewsSnapshot = await getDocs(reviewsQuery);
        
        for (const docSnapshot of reviewsSnapshot.docs) {
          const reviewData = docSnapshot.data();
          
          let vendorName = 'Unknown Vendor';
          if (reviewData.vendorId) {
            try {
              const vendorDocRef = doc(db, 'vendor_list', reviewData.vendorId);
              const vendorDoc = await getDoc(vendorDocRef);
              if (vendorDoc.exists()) {
                vendorName = vendorDoc.data().businessName || 'Unknown Vendor';
              }
            } catch (error) {
              console.error('Error fetching vendor:', error);
            }
          }
          
          activities.push({
            id: docSnapshot.id,
            type: 'review',
            description: `${reviewData.reviewerName || 'A user'} left a ${reviewData.rating}-star review for ${vendorName}`,
            timestamp: reviewData.timestamp?.toDate() || new Date(),
            icon: 'Star',
            color: '#f1c40f'
          });
        }

        activities.sort((a, b) => b.timestamp - a.timestamp);
        setRecentActivities(activities.slice(0, 10));
      } catch (error) {
        console.error('Error fetching recent activities:', error);
      }
    };

    fetchRecentActivities();
  }, []);

  // Filter and search activities
  const filteredActivities = useMemo(() => {
    let filtered = [...recentActivities];

    if (searchQuery) {
      filtered = filtered.filter(activity =>
        activity.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (roleFilter !== 'all') {
      filtered = filtered.filter(activity => {
        if (roleFilter === 'vendor') {
          return activity.type === 'vendor_registration' || activity.type === 'vendor_update';
        } else if (roleFilter === 'user') {
          return activity.type === 'user_registration';
        } else if (roleFilter === 'review') {
          return activity.type === 'review';
        }
        return true;
      });
    }

    return filtered;
  }, [recentActivities, searchQuery, roleFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedActivities = filteredActivities.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, roleFilter, itemsPerPage]);

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

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) {
      return 'Just now';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const stats = [
    { label: 'Total Vendors', value: users.filter(u => u.role === 'vendor').length.toString(), icon: Store, color: '#E84C3D' },
    { label: 'Active Users', value: users.filter(u => u.account_status === 'active').length.toString(), icon: Users, color: '#3498db' },
    { label: 'Pending Admin Requests', value: pendingRequests.toString(), icon: UserPlus, color: '#e67e22', clickable: true, action: () => handleNavigation('admin-requests') },
    { label: 'Total Users', value: users.length.toString(), icon: Users, color: '#9b59b6' }
  ];

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
              className="nav-item"
              onClick={() => handleNavigation('admin-requests')}
            >
              <UserPlus size={20} className="nav-icon" />
              <span className="nav-label">Admin Requests</span>
              {pendingRequests > 0 && (
                <span className="nav-badge">
                  {pendingRequests}
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
              className="nav-item"
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
          {activeTab === 'overview' && (
            <div className="content-section">
              <h2 className="section-title">Dashboard Overview</h2>
              
              {/* Stats Grid */}
              <div className="stats-grid">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index} 
                      className={`stat-card ${stat.clickable ? 'clickable' : ''}`}
                      onClick={stat.clickable ? stat.action : undefined}
                      style={stat.clickable ? { cursor: 'pointer' } : {}}
                    >
                      <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                        <IconComponent size={28} strokeWidth={2} />
                      </div>
                      <div className="stat-content">
                        <p className="stat-label">{stat.label}</p>
                        <p className="stat-value">{stat.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Recent Activity */}
              <div className="activity-section">
                <h3 className="subsection-title">Recent Activity</h3>
                
                {/* Search and Filters */}
                <div className="activity-controls">
                  <div className="search-box">
                    <Search size={18} className="search-icon" />
                    <input
                      type="text"
                      placeholder="Search by description..."
                      className="search-input"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="filter-controls">
                    <select
                      className="filter-select"
                      value={roleFilter}
                      onChange={(e) => setRoleFilter(e.target.value)}
                    >
                      <option value="all">All Types</option>
                      <option value="vendor">Vendors</option>
                      <option value="user">Users</option>
                      <option value="review">Reviews</option>
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

                <div className="activity-card">
                  {paginatedActivities.length > 0 ? (
                    <>
                      <div className="activity-list">
                        {paginatedActivities.map((activity) => {
                          const IconComponent = 
                            activity.icon === 'Store' ? Store :
                            activity.icon === 'UserPlus' ? UserPlus :
                            activity.icon === 'Settings' ? Settings :
                            activity.icon === 'Star' ? Star :
                            Activity;

                          return (
                            <div key={activity.id} className="activity-item">
                              <div 
                                className="activity-icon" 
                                style={{ backgroundColor: `${activity.color}15`, color: activity.color }}
                              >
                                <IconComponent size={20} strokeWidth={2} />
                              </div>
                              <div className="activity-content">
                                <p className="activity-description">{activity.description}</p>
                                <p className="activity-time">
                                  {formatTimeAgo(activity.timestamp)}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Pagination */}
                      {totalPages > 1 && (
                        <div className="pagination">
                          <div className="pagination-info">
                            Showing {startIndex + 1} to {Math.min(endIndex, filteredActivities.length)} of {filteredActivities.length} activities
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
                      <Activity size={48} strokeWidth={1.5} className="empty-icon" />
                      <p className="empty-text">
                        {searchQuery || roleFilter !== 'all' 
                          ? 'No activities match your filters' 
                          : 'No recent activity'}
                      </p>
                      <p className="empty-subtext">
                        {searchQuery || roleFilter !== 'all'
                          ? 'Try adjusting your search or filter criteria'
                          : 'Activity will appear here once vendors and users start interacting with the platform'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vendors' && (
            <div className="content-section">
              <div className="section-header">
                <h2 className="section-title">Vendor Management</h2>
                <button className="primary-btn">
                  <Plus size={18} />
                  <span>Add Vendor</span>
                </button>
              </div>
              
              <div className="table-card">
                <div className="empty-state">
                  <Store size={48} strokeWidth={1.5} className="empty-icon" />
                  <p className="empty-text">No vendors registered</p>
                  <p className="empty-subtext">Vendors will appear here once they register on the platform</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="content-section">
              <div className="section-header">
                <h2 className="section-title">Review Management</h2>
                <div className="filter-group">
                  <button className="filter-btn active">All</button>
                  <button className="filter-btn">Pending</button>
                  <button className="filter-btn">Approved</button>
                  <button className="filter-btn">Flagged</button>
                </div>
              </div>
              
              <div className="table-card">
                <div className="empty-state">
                  <Star size={48} strokeWidth={1.5} className="empty-icon" />
                  <p className="empty-text">No reviews submitted</p>
                  <p className="empty-subtext">Reviews will appear here once users start rating vendors</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="content-section">
              <h2 className="section-title">Analytics & Reports</h2>
              
              <div className="analytics-grid">
                <div className="analytics-card">
                  <h4 className="card-title">User Growth</h4>
                  <div className="chart-placeholder">
                    <BarChart3 size={48} strokeWidth={1.5} className="chart-icon" />
                    <p>User growth chart will be displayed here</p>
                  </div>
                </div>
                
                <div className="analytics-card">
                  <h4 className="card-title">Vendor Performance</h4>
                  <div className="chart-placeholder">
                    <PieChart size={48} strokeWidth={1.5} className="chart-icon" />
                    <p>Vendor performance metrics will be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="content-section">
              <h2 className="section-title">Platform Settings</h2>
              
              <div className="settings-grid">
                <div className="settings-card">
                  <div className="settings-icon">
                    <Settings size={24} strokeWidth={2} />
                  </div>
                  <h4 className="card-title">General Settings</h4>
                  <p className="card-description">Configure platform-wide settings and preferences</p>
                  <button className="secondary-btn">Configure</button>
                </div>
                
                <div className="settings-card">
                  <div className="settings-icon">
                    <Shield size={24} strokeWidth={2} />
                  </div>
                  <h4 className="card-title">Security Settings</h4>
                  <p className="card-description">Manage security policies and authentication</p>
                  <button className="secondary-btn">Configure</button>
                </div>
                
                <div className="settings-card">
                  <div className="settings-icon">
                    <Mail size={24} strokeWidth={2} />
                  </div>
                  <h4 className="card-title">Notification Settings</h4>
                  <p className="card-description">Control email and push notification preferences</p>
                  <button className="secondary-btn">Configure</button>
                </div>
                
                <div className="settings-card">
                  <div className="settings-icon">
                    <CreditCard size={24} strokeWidth={2} />
                  </div>
                  <h4 className="card-title">Payment Settings</h4>
                  <p className="card-description">Configure payment gateways and billing options</p>
                  <button className="secondary-btn">Configure</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;