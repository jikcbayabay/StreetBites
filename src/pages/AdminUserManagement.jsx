// src/pages/AdminUserManagement.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase.js';
import { signOut } from 'firebase/auth';
import { doc, getDoc, collection, getDocs, deleteDoc, updateDoc, addDoc, query, where } from 'firebase/firestore';
import { 
  LayoutDashboard, 
  Store, 
  Users, 
  Star, 
  TrendingUp, 
  Settings, 
  Bell, 
  LogOut,
  Search,
  Eye,
  Edit,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
  Activity,
  Clock,
  UserPlus
} from 'lucide-react';
import './AdminDashboard.css';

const AdminUserManagement = () => {
  const navigate = useNavigate();
  const [activeTab] = useState('users');
  const [userName, setUserName] = useState('Admin');
  const [currentAdminName, setCurrentAdminName] = useState('');
  const [pendingRequests, setPendingRequests] = useState(0);
  
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
            setCurrentAdminName(`${userData.first_name} ${userData.last_name}`);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
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

  // Fetch users (exclude admins)
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setUsersLoading(true);
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
      
      console.log('Fetched users:', usersData);
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
        action: action,
        targetType: targetType,
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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleNavigation = (tab) => {
    switch(tab) {
      case 'overview':
        navigate('/admin-dashboard');
        break;
      case 'vendors':
        navigate('/admin-dashboard');
        break;
      case 'reviews':
        navigate('/admin-dashboard');
        break;
      case 'analytics':
        navigate('/admin-dashboard');
        break;
      case 'admin-requests':
        navigate('/admin-requests');
        break;
      case 'logs':
        navigate('/admin-logs');
        break;
      case 'settings':
        navigate('/admin-dashboard');
        break;
      default:
        break;
    }
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
              className="nav-item active"
              onClick={() => {}}
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

export default AdminUserManagement;