// src/pages/AdminDashboard.jsx
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
  Plus,
  Activity,
  BarChart3,
  PieChart,
  Shield,
  Mail,
  CreditCard,
  Clock,
  FileText,
  UserPlus
} from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [userName, setUserName] = useState('Admin');
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [pendingRequests, setPendingRequests] = useState(0);

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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleNavigation = (tab) => {
    if (tab === 'users') {
      navigate('/admin-user-management');
    } else if (tab === 'admin-requests') {
      navigate('/admin-requests');
    } else if (tab === 'logs') {
      navigate('/admin-logs');
    } else {
      setActiveTab(tab);
    }
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
              className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => handleNavigation('reviews')}
            >
              <Star size={20} className="nav-icon" />
              <span className="nav-label">Reviews</span>
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
                <div className="activity-card">
                  <div className="empty-state">
                    <Activity size={48} strokeWidth={1.5} className="empty-icon" />
                    <p className="empty-text">No recent activity</p>
                    <p className="empty-subtext">Activity will appear here once vendors and users start interacting with the platform</p>
                  </div>
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