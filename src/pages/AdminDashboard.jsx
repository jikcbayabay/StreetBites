// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase.js';
import { signOut } from 'firebase/auth';
import { doc, getDoc, collection, query, where, getDocs, deleteDoc, updateDoc, orderBy, addDoc, limit } from 'firebase/firestore';
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
  FileText,
  Activity,
  BarChart3,
  PieChart,
  Shield,
  Mail,
  CreditCard,
  Search,
  Eye,
  Edit,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  Filter
} from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [userName, setUserName] = useState('Admin');
  const [loading, setLoading] = useState(true);
  
  // Users state
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortField, setSortField] = useState('created_at');
  const [sortDirection, setSortDirection] = useState('desc');
  
  // Modal states
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  // Admin logs state
  const [adminLogs, setAdminLogs] = useState([]);
  const [logsLoading, setLogsLoading] = useState(false);
  const [logsFilter, setLogsFilter] = useState('all'); // all, user, vendor, review, settings
  const [logsSearchTerm, setLogsSearchTerm] = useState('');
  const [currentAdminName, setCurrentAdminName] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            // FIXED: Use snake_case to match Firebase
            setUserName(userData.first_name || 'Admin');
            setCurrentAdminName(`${userData.first_name} ${userData.last_name}`);
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

  // Fetch users (exclude admins)
  useEffect(() => {
    if (activeTab === 'users') {
      fetchUsers();
    }
  }, [activeTab]);

  // Fetch admin logs
  useEffect(() => {
    if (activeTab === 'logs') {
      fetchAdminLogs();
    }
  }, [activeTab]);

  const fetchUsers = async () => {
    setUsersLoading(true);
    try {
      const usersRef = collection(db, 'users');
      // FIXED: Fetch all users first, then filter
      const querySnapshot = await getDocs(usersRef);
      
      const usersData = [];
      querySnapshot.forEach((docSnap) => {
        const userData = docSnap.data();
        // Filter out admin users
        if (userData.role !== 'admin') {
          usersData.push({ id: docSnap.id, ...userData });
        }
      });
      
      console.log('Fetched users:', usersData); // Debug log
      setUsers(usersData);
      setFilteredUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Error fetching users: ' + error.message);
    } finally {
      setUsersLoading(false);
    }
  };

  // Log admin action
  const logAdminAction = async (action, targetType, targetId, targetName, details = {}) => {
    try {
      const logData = {
        adminId: auth.currentUser?.uid,
        adminName: currentAdminName || 'Admin',
        adminEmail: auth.currentUser?.email,
        action: action, // 'create', 'update', 'delete', 'status_change', 'role_change', 'approve', 'reject'
        targetType: targetType, // 'user', 'vendor', 'review', 'menu_item'
        targetId: targetId,
        targetName: targetName,
        details: details,
        timestamp: new Date()
      };

      await addDoc(collection(db, 'admin_logs'), logData);
      console.log('Admin action logged:', logData);
    } catch (error) {
      console.error('Error logging admin action:', error);
    }
  };

  // Fetch admin logs (last 15 days only)
  const fetchAdminLogs = async () => {
    setLogsLoading(true);
    try {
      const fifteenDaysAgo = new Date();
      fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);
      
      const logsRef = collection(db, 'admin_logs');
      const q = query(
        logsRef, 
        where('timestamp', '>=', fifteenDaysAgo),
        orderBy('timestamp', 'desc'), 
        limit(500)
      );
      const querySnapshot = await getDocs(q);
      
      const logsData = [];
      querySnapshot.forEach((doc) => {
        logsData.push({ id: doc.id, ...doc.data() });
      });
      
      console.log('Fetched admin logs:', logsData);
      setAdminLogs(logsData);
    } catch (error) {
      console.error('Error fetching admin logs:', error);
      alert('Error fetching admin logs: ' + error.message);
    } finally {
      setLogsLoading(false);
    }
  };

  // Auto-cleanup logs older than 15 days (optional - run periodically)
  const cleanupOldLogs = async () => {
    try {
      const fifteenDaysAgo = new Date();
      fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);
      
      const logsRef = collection(db, 'admin_logs');
      const q = query(logsRef, where('timestamp', '<', fifteenDaysAgo));
      const querySnapshot = await getDocs(q);
      
      const deletePromises = [];
      querySnapshot.forEach((doc) => {
        deletePromises.push(deleteDoc(doc.ref));
      });
      
      await Promise.all(deletePromises);
      console.log(`Cleaned up ${deletePromises.length} old logs`);
    } catch (error) {
      console.error('Error cleaning up old logs:', error);
    }
  };

  // Filter and search users
  useEffect(() => {
    let result = [...users];

    // Search filter
    if (searchTerm) {
      result = result.filter(user => 
        user.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.contact_number?.includes(searchTerm)
      );
    }

    // Role filter
    if (roleFilter !== 'all') {
      result = result.filter(user => user.role === roleFilter);
    }

    // Status filter
    if (statusFilter !== 'all') {
      result = result.filter(user => user.account_status === statusFilter);
    }

    // Sorting
    result.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      if (sortField === 'created_at') {
        aVal = aVal?.toDate?.() || new Date(0);
        bVal = bVal?.toDate?.() || new Date(0);
      } else {
        aVal = aVal?.toString().toLowerCase() || '';
        bVal = bVal?.toString().toLowerCase() || '';
      }

      if (sortDirection === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

    setFilteredUsers(result);
    setCurrentPage(1);
  }, [searchTerm, roleFilter, statusFilter, users, sortField, sortDirection]);

  // Pagination
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // Handlers
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setViewModalOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditFormData({
      first_name: user.first_name || '',
      last_name: user.last_name || '',
      email: user.email || '',
      contact_number: user.contact_number || '',
      role: user.role || '',
      account_status: user.account_status || 'active'
    });
    setEditModalOpen(true);
  };

  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const userName = `${selectedUser.first_name} ${selectedUser.last_name}`;
      await deleteDoc(doc(db, 'users', selectedUser.id));
      
      // Log the action
      await logAdminAction(
        'delete',
        'user',
        selectedUser.id,
        userName,
        { email: selectedUser.email, role: selectedUser.role }
      );
      
      setDeleteModalOpen(false);
      setSelectedUser(null);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user: ' + error.message);
    }
  };

  const saveEditUser = async () => {
    try {
      const userRef = doc(db, 'users', selectedUser.id);
      const userName = `${editFormData.first_name} ${editFormData.last_name}`;
      
      // Track changes
      const changes = {};
      Object.keys(editFormData).forEach(key => {
        if (editFormData[key] !== selectedUser[key]) {
          changes[key] = {
            old: selectedUser[key],
            new: editFormData[key]
          };
        }
      });
      
      await updateDoc(userRef, {
        ...editFormData,
        updated_at: new Date()
      });
      
      // Log the action
      await logAdminAction(
        'update',
        'user',
        selectedUser.id,
        userName,
        { changes: changes, email: editFormData.email }
      );
      
      setEditModalOpen(false);
      setSelectedUser(null);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user: ' + error.message);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getRoleBadgeClass = (role) => {
    switch(role) {
      case 'admin': return 'badge-admin';
      case 'vendor': return 'badge-vendor';
      case 'user': return 'badge-user';
      default: return 'badge-user';
    }
  };

  const getStatusBadgeClass = (status) => {
    return status === 'active' ? 'badge-active' : 'badge-inactive';
  };

  const getActionColor = (action) => {
    switch(action) {
      case 'create': return '#27ae60';
      case 'update': return '#3498db';
      case 'delete': return '#e74c3c';
      case 'status_change': return '#f39c12';
      case 'role_change': return '#9b59b6';
      default: return '#6b7280';
    }
  };

  const getActionIcon = (action) => {
    switch(action) {
      case 'create': return '+';
      case 'update': return '✎';
      case 'delete': return '✕';
      case 'status_change': return '⟳';
      case 'role_change': return '⚡';
      default: return '•';
    }
  };

  const formatLogTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // Filter admin logs
  const filteredLogs = adminLogs.filter(log => {
    const matchesFilter = logsFilter === 'all' || log.targetType === logsFilter;
    const matchesSearch = !logsSearchTerm || 
      log.adminName?.toLowerCase().includes(logsSearchTerm.toLowerCase()) ||
      log.targetName?.toLowerCase().includes(logsSearchTerm.toLowerCase()) ||
      log.action?.toLowerCase().includes(logsSearchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const stats = [
    { label: 'Total Vendors', value: users.filter(u => u.role === 'vendor').length.toString(), icon: Store, color: '#E84C3D' },
    { label: 'Active Users', value: users.filter(u => u.account_status === 'active').length.toString(), icon: Users, color: '#3498db' },
    { label: 'Pending Reviews', value: '0', icon: Star, color: '#f39c12' },
    { label: 'Admin Applications', value: '0', icon: FileText, color: '#9b59b6' }
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
              <span className="notification-badge">0</span>
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
              onClick={() => setActiveTab('overview')}
            >
              <LayoutDashboard size={20} className="nav-icon" />
              <span className="nav-label">Overview</span>
            </button>
            <button
              className={`nav-item ${activeTab === 'vendors' ? 'active' : ''}`}
              onClick={() => setActiveTab('vendors')}
            >
              <Store size={20} className="nav-icon" />
              <span className="nav-label">Vendors</span>
            </button>
            <button
              className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              <Users size={20} className="nav-icon" />
              <span className="nav-label">Users</span>
            </button>
            <button
              className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              <Star size={20} className="nav-icon" />
              <span className="nav-label">Reviews</span>
            </button>
            <button
              className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              <TrendingUp size={20} className="nav-icon" />
              <span className="nav-label">Analytics</span>
            </button>
            <button
              className={`nav-item ${activeTab === 'logs' ? 'active' : ''}`}
              onClick={() => setActiveTab('logs')}
            >
              <Clock size={20} className="nav-icon" />
              <span className="nav-label">Admin Logs</span>
            </button>
            <button
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
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
                    <div key={index} className="stat-card">
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

          {activeTab === 'users' && (
            <div className="content-section">
              <div className="section-header">
                <h2 className="section-title">User Management</h2>
              </div>

              {/* Search and Filters */}
              <div className="users-controls">
                <div className="search-box">
                  <Search size={20} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search by name, email, or contact..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>

                <div className="filter-controls">
                  <select 
                    value={roleFilter} 
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="filter-select"
                  >
                    <option value="all">All Roles</option>
                    <option value="vendor">Vendor</option>
                    <option value="user">User</option>
                  </select>

                  <select 
                    value={statusFilter} 
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="filter-select"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>

                  <select 
                    value={itemsPerPage} 
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="filter-select"
                  >
                    <option value="10">10 per page</option>
                    <option value="25">25 per page</option>
                    <option value="50">50 per page</option>
                  </select>
                </div>
              </div>

              {/* Users Table */}
              <div className="table-container">
                {usersLoading ? (
                  <div className="empty-state">
                    <Activity size={48} strokeWidth={1.5} className="empty-icon spinning" />
                    <p className="empty-text">Loading users...</p>
                  </div>
                ) : currentUsers.length === 0 ? (
                  <div className="empty-state">
                    <Users size={48} strokeWidth={1.5} className="empty-icon" />
                    <p className="empty-text">No users found</p>
                    <p className="empty-subtext">
                      {searchTerm || roleFilter !== 'all' || statusFilter !== 'all' 
                        ? 'Try adjusting your search or filters'
                        : 'Users will appear here once they register on the platform'}
                    </p>
                  </div>
                ) : (
                  <>
                    <table className="users-table">
                      <thead>
                        <tr>
                          <th onClick={() => handleSort('first_name')}>
                            Name {sortField === 'first_name' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th onClick={() => handleSort('email')}>
                            Email {sortField === 'email' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th>Contact Number</th>
                          <th onClick={() => handleSort('role')}>
                            Role {sortField === 'role' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th onClick={() => handleSort('account_status')}>
                            Status {sortField === 'account_status' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th onClick={() => handleSort('created_at')}>
                            Date Joined {sortField === 'created_at' && (sortDirection === 'asc' ? '↑' : '↓')}
                          </th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentUsers.map((user) => (
                          <tr key={user.id}>
                            <td>
                              <div className="user-name">
                                <div className="user-avatar">
                                  {user.first_name?.charAt(0)}{user.last_name?.charAt(0)}
                                </div>
                                <span>{user.first_name} {user.last_name}</span>
                              </div>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.contact_number || 'N/A'}</td>
                            <td>
                              <span className={`badge ${getRoleBadgeClass(user.role)}`}>
                                {user.role}
                              </span>
                            </td>
                            <td>
                              <span className={`badge ${getStatusBadgeClass(user.account_status)}`}>
                                {user.account_status || 'active'}
                              </span>
                            </td>
                            <td>{formatDate(user.created_at)}</td>
                            <td>
                              <div className="action-buttons">
                                <button 
                                  className="action-btn view"
                                  onClick={() => handleViewUser(user)}
                                  title="View Details"
                                >
                                  <Eye size={16} />
                                </button>
                                <button 
                                  className="action-btn edit"
                                  onClick={() => handleEditUser(user)}
                                  title="Edit User"
                                >
                                  <Edit size={16} />
                                </button>
                                <button 
                                  className="action-btn delete"
                                  onClick={() => handleDeleteUser(user)}
                                  title="Delete User"
                                  disabled={user.id === auth.currentUser?.uid}
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="pagination">
                        <div className="pagination-info">
                          Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} users
                        </div>
                        <div className="pagination-buttons">
                          <button 
                            className="pagination-btn"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                          >
                            <ChevronLeft size={18} />
                          </button>
                          {[...Array(Math.min(totalPages, 5))].map((_, index) => {
                            let pageNum;
                            if (totalPages <= 5) {
                              pageNum = index + 1;
                            } else if (currentPage <= 3) {
                              pageNum = index + 1;
                            } else if (currentPage >= totalPages - 2) {
                              pageNum = totalPages - 4 + index;
                            } else {
                              pageNum = currentPage - 2 + index;
                            }
                            return (
                              <button
                                key={pageNum}
                                className={`pagination-btn ${currentPage === pageNum ? 'active' : ''}`}
                                onClick={() => setCurrentPage(pageNum)}
                              >
                                {pageNum}
                              </button>
                            );
                          })}
                          <button 
                            className="pagination-btn"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                          >
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
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

          {activeTab === 'logs' && (
            <div className="content-section">
              <div className="section-header">
                <h2 className="section-title">Admin Activity Logs</h2>
              </div>

              {/* Logs Filters */}
              <div className="users-controls">
                <div className="search-box">
                  <Search size={20} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search by admin name, action, or target..."
                    value={logsSearchTerm}
                    onChange={(e) => setLogsSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>

                <div className="filter-controls">
                  <select 
                    value={logsFilter} 
                    onChange={(e) => setLogsFilter(e.target.value)}
                    className="filter-select"
                  >
                    <option value="all">All Actions</option>
                    <option value="user">User Actions</option>
                    <option value="vendor">Vendor Actions</option>
                    <option value="review">Review Actions</option>
                    <option value="settings">Settings Actions</option>
                  </select>
                </div>
              </div>

              {/* Logs Table */}
              <div className="table-container">
                {logsLoading ? (
                  <div className="empty-state">
                    <Activity size={48} strokeWidth={1.5} className="empty-icon spinning" />
                    <p className="empty-text">Loading admin logs...</p>
                  </div>
                ) : filteredLogs.length === 0 ? (
                  <div className="empty-state">
                    <Clock size={48} strokeWidth={1.5} className="empty-icon" />
                    <p className="empty-text">No admin logs found</p>
                    <p className="empty-subtext">
                      {logsSearchTerm || logsFilter !== 'all'
                        ? 'Try adjusting your search or filters'
                        : 'Admin actions will be logged here'}
                    </p>
                  </div>
                ) : (
                  <table className="users-table">
                    <thead>
                      <tr>
                        <th>Timestamp</th>
                        <th>Admin</th>
                        <th>Action</th>
                        <th>Target Type</th>
                        <th>Target</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLogs.map((log) => (
                        <tr key={log.id}>
                          <td style={{ whiteSpace: 'nowrap', fontSize: '0.8125rem' }}>
                            {formatLogTimestamp(log.timestamp)}
                          </td>
                          <td>
                            <div className="user-name">
                              <div className="user-avatar" style={{ background: '#9b59b6' }}>
                                {log.adminName?.split(' ').map(n => n[0]).join('').substring(0, 2)}
                              </div>
                              <div>
                                <div style={{ fontWeight: 600 }}>{log.adminName}</div>
                                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{log.adminEmail}</div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span 
                              className="badge" 
                              style={{ 
                                backgroundColor: `${getActionColor(log.action)}15`,
                                color: getActionColor(log.action)
                              }}
                            >
                              {getActionIcon(log.action)} {log.action.replace('_', ' ')}
                            </span>
                          </td>
                          <td>
                            <span className={`badge ${getRoleBadgeClass(log.targetType)}`}>
                              {log.targetType}
                            </span>
                          </td>
                          <td style={{ fontWeight: 500 }}>{log.targetName || log.targetId}</td>
                          <td>
                            {log.details && Object.keys(log.details).length > 0 ? (
                              <div style={{ fontSize: '0.8125rem', color: '#6b7280' }}>
                                {log.details.email && <div>Email: {log.details.email}</div>}
                                {log.details.role && <div>Role: {log.details.role}</div>}
                                {log.details.changes && (
                                  <div>
                                    Changed: {Object.keys(log.details.changes).join(', ')}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <span style={{ color: '#9ca3af' }}>—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
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

      {/* View User Modal */}
      {viewModalOpen && selectedUser && (
        <div className="modal-overlay" onClick={() => setViewModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>User Details</h3>
              <button className="modal-close" onClick={() => setViewModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="detail-row">
                <span className="detail-label">First Name:</span>
                <span className="detail-value">{selectedUser.first_name}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Last Name:</span>
                <span className="detail-value">{selectedUser.last_name}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{selectedUser.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Contact Number:</span>
                <span className="detail-value">{selectedUser.contact_number || 'N/A'}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Role:</span>
                <span className={`badge ${getRoleBadgeClass(selectedUser.role)}`}>
                  {selectedUser.role}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Account Status:</span>
                <span className={`badge ${getStatusBadgeClass(selectedUser.account_status)}`}>
                  {selectedUser.account_status || 'active'}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Date Joined:</span>
                <span className="detail-value">{formatDate(selectedUser.created_at)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {editModalOpen && selectedUser && (
        <div className="modal-overlay" onClick={() => setEditModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Edit User</h3>
              <button className="modal-close" onClick={() => setEditModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={editFormData.first_name}
                  onChange={(e) => setEditFormData({...editFormData, first_name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={editFormData.last_name}
                  onChange={(e) => setEditFormData({...editFormData, last_name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={editFormData.email}
                  onChange={(e) => setEditFormData({...editFormData, email: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Contact Number</label>
                <input
                  type="tel"
                  className="form-input"
                  value={editFormData.contact_number}
                  onChange={(e) => setEditFormData({...editFormData, contact_number: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Role</label>
                <select
                  className="form-input"
                  value={editFormData.role}
                  onChange={(e) => setEditFormData({...editFormData, role: e.target.value})}
                >
                  <option value="user">User</option>
                  <option value="vendor">Vendor</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Account Status</label>
                <select
                  className="form-input"
                  value={editFormData.account_status}
                  onChange={(e) => setEditFormData({...editFormData, account_status: e.target.value})}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="secondary-btn" onClick={() => setEditModalOpen(false)}>
                Cancel
              </button>
              <button className="primary-btn" onClick={saveEditUser}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && selectedUser && (
        <div className="modal-overlay" onClick={() => setDeleteModalOpen(false)}>
          <div className="modal-content modal-small" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Delete User</h3>
              <button className="modal-close" onClick={() => setDeleteModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete <strong>{selectedUser.first_name} {selectedUser.last_name}</strong>?</p>
              <p className="warning-text">This action cannot be undone.</p>
            </div>
            <div className="modal-footer">
              <button className="secondary-btn" onClick={() => setDeleteModalOpen(false)}>
                Cancel
              </button>
              <button className="delete-confirm-btn" onClick={confirmDelete}>
                Delete User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;