// src/pages/AdminLogs.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase.js';
import { signOut } from 'firebase/auth';
import { doc, getDoc, collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { 
  LayoutDashboard, 
  Store, 
  Users, 
  Star, 
  TrendingUp, 
  Settings, 
  Bell, 
  LogOut,
  Clock,
  UserPlus,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Search,
  ChevronLeft,
  ChevronRight,
  Activity
} from 'lucide-react';
import './AdminDashboard.css';

const AdminLogs = () => {
  const navigate = useNavigate();
  const [activeTab] = useState('logs');
  const [userName, setUserName] = useState('Admin');
  const [loading, setLoading] = useState(true);
  const [pendingRequests, setPendingRequests] = useState(0);
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'timestamp', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState('all');
  const [targetTypeFilter, setTargetTypeFilter] = useState('all');

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

  // Fetch admin logs
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const logsRef = collection(db, 'admin_logs');
        const q = query(logsRef, orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const logsData = [];
        querySnapshot.forEach((docSnap) => {
          const logData = docSnap.data();
          logsData.push({ 
            id: docSnap.id, 
            ...logData,
            timestamp: logData.timestamp?.toDate ? logData.timestamp.toDate() : new Date(logData.timestamp)
          });
        });
        
        setLogs(logsData);
        setFilteredLogs(logsData);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchLogs();
  }, []);

  // Filter and search logs
  useEffect(() => {
    let result = [...logs];

    // Search filter
    if (searchTerm) {
      result = result.filter(log => 
        log.adminName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.targetName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.adminEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.action?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formatChanges(log.details).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Action filter
    if (actionFilter !== 'all') {
      result = result.filter(log => log.action === actionFilter);
    }

    // Target type filter
    if (targetTypeFilter !== 'all') {
      result = result.filter(log => log.targetType === targetTypeFilter);
    }

    // Sorting
    result.sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      // Handle nested values
      if (sortConfig.key === 'targetName') {
        aValue = a.targetName || '';
        bValue = b.targetName || '';
      } else if (sortConfig.key === 'adminName') {
        aValue = a.adminName || '';
        bValue = b.adminName || '';
      } else if (sortConfig.key === 'changes') {
        aValue = JSON.stringify(a.details?.changes || '');
        bValue = JSON.stringify(b.details?.changes || '');
      } else if (sortConfig.key === 'timestamp') {
        aValue = a.timestamp || new Date(0);
        bValue = b.timestamp || new Date(0);
      }

      if (sortConfig.direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredLogs(result);
    setCurrentPage(1);
  }, [searchTerm, actionFilter, targetTypeFilter, logs, sortConfig]);

  // Pagination
  const indexOfLastLog = currentPage * itemsPerPage;
  const indexOfFirstLog = indexOfLastLog - itemsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog);
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);

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
    }
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) {
      return <ArrowUpDown size={14} />;
    }
    return sortConfig.direction === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />;
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatChanges = (details) => {
    if (!details?.changes) return 'No changes';
    
    const changes = details.changes;
    const changeEntries = Object.entries(changes).map(([key, value]) => {
      if (typeof value === 'object' && value.old && value.new) {
        return `${key}: "${value.old}" → "${value.new}"`;
      }
      return `${key}: ${JSON.stringify(value)}`;
    });

    return changeEntries.join(', ');
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
              onClick={() => handleNavigation('reviews')}
            >
              <Star size={20} className="nav-icon" />
              <span className="nav-label">Reviews</span>
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
                <span className="nav-badge">
                  {pendingRequests}
                </span>
              )}
            </button>
            <button
              className={`nav-item ${activeTab === 'logs' ? 'active' : ''}`}
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
              <h2 className="section-title">Admin Activity Logs</h2>
            </div>

            {/* Search and Filters */}
            <div className="users-controls">
              <div className="search-box">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by admin name, target user, action, or changes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              <div className="filter-controls">
                <select 
                  value={actionFilter} 
                  onChange={(e) => setActionFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Actions</option>
                  <option value="create">Create</option>
                  <option value="update">Update</option>
                  <option value="delete">Delete</option>
                  <option value="approve">Approve</option>
                  <option value="reject">Reject</option>
                </select>

                <select 
                  value={targetTypeFilter} 
                  onChange={(e) => setTargetTypeFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Types</option>
                  <option value="user">User</option>
                  <option value="vendor">Vendor</option>
                  <option value="admin">Admin</option>
                </select>

                <select 
                  value={itemsPerPage} 
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="filter-select"
                >
                  <option value="15">15 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                  <option value="100">100 per page</option>
                </select>
              </div>
            </div>
            
            <div className="table-container">
              {loading ? (
                <div className="empty-state">
                  <Activity size={48} strokeWidth={1.5} className="empty-icon spinning" />
                  <p className="empty-text">Loading logs...</p>
                </div>
              ) : currentLogs.length === 0 ? (
                <div className="empty-state">
                  <Clock size={48} strokeWidth={1.5} className="empty-icon" />
                  <p className="empty-text">No admin logs found</p>
                  <p className="empty-subtext">
                    {searchTerm || actionFilter !== 'all' || targetTypeFilter !== 'all'
                      ? 'Try adjusting your search or filters'
                      : 'Admin actions will be logged here'}
                  </p>
                </div>
              ) : (
                <>
                  <table className="users-table">
                    <thead>
                      <tr>
                        <th onClick={() => handleSort('action')}>
                          Action {getSortIcon('action')}
                        </th>
                        <th onClick={() => handleSort('adminName')}>
                          Admin Name {getSortIcon('adminName')}
                        </th>
                        <th onClick={() => handleSort('targetName')}>
                          Target User {getSortIcon('targetName')}
                        </th>
                        <th onClick={() => handleSort('targetType')}>
                          Target Type {getSortIcon('targetType')}
                        </th>
                        <th onClick={() => handleSort('changes')}>
                          Changes {getSortIcon('changes')}
                        </th>
                        <th onClick={() => handleSort('timestamp')}>
                          Timestamp {getSortIcon('timestamp')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentLogs.map((log) => (
                        <tr key={log.id}>
                          <td>
                            <span className={`badge badge-${log.action}`}>
                              {log.action}
                            </span>
                          </td>
                          <td>{log.adminName || 'undefined undefined'}</td>
                          <td>{log.targetName || 'N/A'}</td>
                          <td>
                            <span className="badge badge-user">
                              {log.targetType || 'N/A'}
                            </span>
                          </td>
                          <td>{formatChanges(log.details)}</td>
                          <td>{formatTimestamp(log.timestamp)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="pagination">
                      <div className="pagination-info">
                        Showing {indexOfFirstLog + 1} to {Math.min(indexOfLastLog, filteredLogs.length)} of {filteredLogs.length} logs
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
        </main>
      </div>
    </div>
  );
};

export default AdminLogs;