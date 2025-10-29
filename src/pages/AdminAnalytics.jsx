import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase.js';
import { signOut } from 'firebase/auth';
import { doc, getDoc, collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { 
  LayoutDashboard, 
  Store, 
  Users, 
  TrendingUp, 
  Settings, 
  Bell, 
  LogOut,
  Clock,
  UserPlus,
  Activity,
  Star,
  MessageSquare,
  Award,
  BarChart3,
  FileText
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import './AdminDashboard.css';

const AdminAnalytics = () => {
  const navigate = useNavigate();
  const [activeTab] = useState('analytics');
  const [userName, setUserName] = useState('Admin');
  const [loading, setLoading] = useState(true);
  const [pendingRequests, setPendingRequests] = useState(0);
  const [timeRange, setTimeRange] = useState('7d');
  
  // Analytics Data
  const [userGrowthData, setUserGrowthData] = useState([]);
  const [vendorGrowthData, setVendorGrowthData] = useState([]);
  const [reviewGrowthData, setReviewGrowthData] = useState([]);
  const [ratingDistribution, setRatingDistribution] = useState([]);
  const [topVendors, setTopVendors] = useState([]);
  const [categoryDistribution, setCategoryDistribution] = useState([]);
  const [topReviewers, setTopReviewers] = useState([]);
  const [popularTags, setPopularTags] = useState([]);
  
  // Summary Stats
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalVendors: 0,
    verifiedVendors: 0,
    totalReviews: 0,
    avgRating: 0
  });

  const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];

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
      }
    };

    fetchUserData();
  }, []);

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

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      setLoading(true);
      try {
        await Promise.all([
          fetchUserAnalytics(),
          fetchVendorAnalytics(),
          fetchReviewAnalytics()
        ]);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalyticsData();
  }, [timeRange]);

  const getDateRange = () => {
    const end = new Date();
    const start = new Date();
    
    switch(timeRange) {
      case '7d':
        start.setDate(end.getDate() - 7);
        break;
      case '30d':
        start.setDate(end.getDate() - 30);
        break;
      case '90d':
        start.setDate(end.getDate() - 90);
        break;
      case '1y':
        start.setFullYear(end.getFullYear() - 1);
        break;
      default:
        start.setDate(end.getDate() - 7);
    }
    
    return { start, end };
  };

  const fetchUserAnalytics = async () => {
    try {
      const usersRef = collection(db, 'users');
      const querySnapshot = await getDocs(usersRef);
      
      const users = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        users.push({
          ...data,
          created_at: data.created_at?.toDate ? data.created_at.toDate() : new Date(data.created_at)
        });
      });

      const { start, end } = getDateRange();
      const filteredUsers = users.filter(u => u.created_at >= start && u.created_at <= end);
      
      // User Growth Data
      const growthMap = {};
      filteredUsers.forEach(user => {
        const date = user.created_at.toISOString().split('T')[0];
        growthMap[date] = (growthMap[date] || 0) + 1;
      });
      
      const growthData = Object.keys(growthMap).sort().map(date => ({
        date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        users: growthMap[date]
      }));
      
      setUserGrowthData(growthData);
      
      // Stats
      const activeUsers = users.filter(u => u.account_status === 'active').length;
      setStats(prev => ({
        ...prev,
        totalUsers: users.length,
        activeUsers: activeUsers
      }));
    } catch (error) {
      console.error('Error fetching user analytics:', error);
    }
  };

  const fetchVendorAnalytics = async () => {
    try {
      // Fetch vendors from vendor_list
      const vendorsRef = collection(db, 'vendor_list');
      const querySnapshot = await getDocs(vendorsRef);
      
      const vendors = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        vendors.push({
          id: doc.id,
          ...data
        });
      });

      // Fetch users to get vendor account info
      const usersRef = collection(db, 'users');
      const usersQuery = query(usersRef, where('role', '==', 'vendor'));
      const usersSnapshot = await getDocs(usersQuery);
      
      const vendorUsersMap = {};
      usersSnapshot.forEach((doc) => {
        vendorUsersMap[doc.id] = doc.data();
      });

      // Filter to only show vendors that exist in both collections
      const validVendors = vendors.filter(v => vendorUsersMap[v.uid]);

      // Fetch all reviews to calculate actual average ratings
      const reviewsRef = collection(db, 'reviews');
      const reviewsSnapshot = await getDocs(reviewsRef);
      
      const vendorRatingsMap = {};
      reviewsSnapshot.forEach((doc) => {
        const review = doc.data();
        const vendorId = review.vendorId;
        
        if (!vendorRatingsMap[vendorId]) {
          vendorRatingsMap[vendorId] = { totalRating: 0, count: 0 };
        }
        
        vendorRatingsMap[vendorId].totalRating += review.rating || 0;
        vendorRatingsMap[vendorId].count++;
      });

      // Top Vendors by Average Rating (only valid vendors)
      const topVendorsList = validVendors
        .filter(v => vendorRatingsMap[v.id] && vendorRatingsMap[v.id].count > 0)
        .map(v => {
          const avgRating = vendorRatingsMap[v.id].totalRating / vendorRatingsMap[v.id].count;
          return {
            name: v.businessName,
            rating: avgRating.toFixed(2),
            reviews: vendorRatingsMap[v.id].count,
            category: v.category
          };
        })
        .sort((a, b) => {
          if (b.rating === a.rating) return b.reviews - a.reviews;
          return b.rating - a.rating;
        })
        .slice(0, 10);
      
      setTopVendors(topVendorsList);

      // Category Distribution
      const categoryMap = {};
      vendors.forEach(vendor => {
        const cat = vendor.category || 'Uncategorized';
        categoryMap[cat] = (categoryMap[cat] || 0) + 1;
      });
      
      const categoryData = Object.keys(categoryMap).map(cat => ({
        name: cat,
        value: categoryMap[cat]
      }));
      
      setCategoryDistribution(categoryData);

      // Stats
      const verifiedVendors = vendors.filter(v => v.isVerified === true).length;
      setStats(prev => ({
        ...prev,
        totalVendors: vendors.length,
        verifiedVendors: verifiedVendors
      }));
    } catch (error) {
      console.error('Error fetching vendor analytics:', error);
    }
  };

  const fetchReviewAnalytics = async () => {
    try {
      const reviewsRef = collection(db, 'reviews');
      const querySnapshot = await getDocs(reviewsRef);
      
      const reviews = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        reviews.push({
          id: doc.id,
          ...data,
          timestamp: data.timestamp?.toDate ? data.timestamp.toDate() : new Date(data.timestamp)
        });
      });

      const { start, end } = getDateRange();
      const filteredReviews = reviews.filter(r => r.timestamp >= start && r.timestamp <= end);

      // Review Growth Data
      const reviewGrowthMap = {};
      filteredReviews.forEach(review => {
        const date = review.timestamp.toISOString().split('T')[0];
        reviewGrowthMap[date] = (reviewGrowthMap[date] || 0) + 1;
      });
      
      const reviewGrowth = Object.keys(reviewGrowthMap).sort().map(date => ({
        date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        reviews: reviewGrowthMap[date]
      }));
      
      setReviewGrowthData(reviewGrowth);

      // Rating Distribution
      const ratingMap = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      reviews.forEach(review => {
        if (review.rating >= 1 && review.rating <= 5) {
          ratingMap[review.rating]++;
        }
      });
      
      const ratingData = Object.keys(ratingMap).map(rating => ({
        rating: `${rating} ⭐`,
        count: ratingMap[rating]
      }));
      
      setRatingDistribution(ratingData);

      // Top Reviewers
      const reviewerMap = {};
      reviews.forEach(review => {
        const name = review.reviewerName || 'Anonymous';
        if (!reviewerMap[name]) {
          reviewerMap[name] = { count: 0, avgRating: 0, totalRating: 0 };
        }
        reviewerMap[name].count++;
        reviewerMap[name].totalRating += review.rating || 0;
      });
      
      const topReviewersList = Object.keys(reviewerMap)
        .map(name => ({
          name,
          count: reviewerMap[name].count,
          avgRating: (reviewerMap[name].totalRating / reviewerMap[name].count).toFixed(1)
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
      
      setTopReviewers(topReviewersList);

      // Popular Tags
      const tagMap = {};
      reviews.forEach(review => {
        if (review.tags && Array.isArray(review.tags)) {
          review.tags.forEach(tag => {
            tagMap[tag] = (tagMap[tag] || 0) + 1;
          });
        }
      });
      
      const popularTagsList = Object.keys(tagMap)
        .map(tag => ({ tag, count: tagMap[tag] }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);
      
      setPopularTags(popularTagsList);

      // Stats
      const totalRating = reviews.reduce((sum, r) => sum + (r.rating || 0), 0);
      const avgRating = reviews.length > 0 ? (totalRating / reviews.length).toFixed(2) : 0;
      
      setStats(prev => ({
        ...prev,
        totalReviews: reviews.length,
        avgRating: avgRating
      }));
    } catch (error) {
      console.error('Error fetching review analytics:', error);
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

  return (
    <div className="admin-dashboard">
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
                <span className="nav-badge">{pendingRequests}</span>
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
              className="nav-item"
              onClick={() => handleNavigation('settings')}
            >
              <Settings size={20} className="nav-icon" />
              <span className="nav-label">Settings</span>
            </button>
          </nav>
        </aside>

        <main className="dashboard-main">
          <div className="content-section">
            <div className="section-header">
              <h2 className="section-title">Analytics Dashboard</h2>
              <div className="time-range-selector">
                <button 
                  className={`time-btn ${timeRange === '7d' ? 'active' : ''}`}
                  onClick={() => setTimeRange('7d')}
                >
                  7 Days
                </button>
                <button 
                  className={`time-btn ${timeRange === '30d' ? 'active' : ''}`}
                  onClick={() => setTimeRange('30d')}
                >
                  30 Days
                </button>
                <button 
                  className={`time-btn ${timeRange === '90d' ? 'active' : ''}`}
                  onClick={() => setTimeRange('90d')}
                >
                  90 Days
                </button>
                <button 
                  className={`time-btn ${timeRange === '1y' ? 'active' : ''}`}
                  onClick={() => setTimeRange('1y')}
                >
                  1 Year
                </button>
              </div>
            </div>

            {loading ? (
              <div className="empty-state">
                <Activity size={48} strokeWidth={1.5} className="empty-icon spinning" />
                <p className="empty-text">Loading analytics...</p>
              </div>
            ) : (
              <>
                {/* Summary Stats */}
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#E3F2FD' }}>
                      <Users size={24} color="#1976D2" />
                    </div>
                    <div className="stat-content">
                      <p className="stat-label">Total Users</p>
                      <h3 className="stat-value">{stats.totalUsers}</h3>
                      <p className="stat-subtext">{stats.activeUsers} active</p>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#F3E5F5' }}>
                      <Store size={24} color="#7B1FA2" />
                    </div>
                    <div className="stat-content">
                      <p className="stat-label">Total Vendors</p>
                      <h3 className="stat-value">{stats.totalVendors}</h3>
                      <p className="stat-subtext">{stats.verifiedVendors} verified</p>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#FFF3E0' }}>
                      <MessageSquare size={24} color="#F57C00" />
                    </div>
                    <div className="stat-content">
                      <p className="stat-label">Total Reviews</p>
                      <h3 className="stat-value">{stats.totalReviews}</h3>
                      <p className="stat-subtext">All time</p>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#E8F5E9' }}>
                      <Star size={24} color="#388E3C" />
                    </div>
                    <div className="stat-content">
                      <p className="stat-label">Average Rating</p>
                      <h3 className="stat-value">{stats.avgRating} ⭐</h3>
                      <p className="stat-subtext">Overall platform</p>
                    </div>
                  </div>
                </div>

                {/* User Growth Chart */}
                <div className="chart-container">
                  <h3 className="chart-title">User Registration Trends</h3>
                  {userGrowthData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={userGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="users" stroke="#1976D2" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  ) : (
                    <p className="empty-chart">No user registration data for selected period</p>
                  )}
                </div>

                {/* Review Growth Chart */}
                <div className="chart-container">
                  <h3 className="chart-title">Review Activity Trends</h3>
                  {reviewGrowthData.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={reviewGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="reviews" stroke="#F57C00" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  ) : (
                    <p className="empty-chart">No review data for selected period</p>
                  )}
                </div>

                {/* Rating Distribution */}
                <div className="chart-container">
                  <h3 className="chart-title">Rating Distribution</h3>
                  {ratingDistribution.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={ratingDistribution}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="rating" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#388E3C" />
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <p className="empty-chart">No rating data available</p>
                  )}
                </div>

                {/* Category Distribution */}
                <div className="chart-container">
                  <h3 className="chart-title">Vendors by Category</h3>
                  {categoryDistribution.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={categoryDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {categoryDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <p className="empty-chart">No category data available</p>
                  )}
                </div>

                {/* Top Vendors */}
                <div className="chart-container">
                  <h3 className="chart-title">Top Rated Vendors</h3>
                  {topVendors.length > 0 ? (
                    <div className="leaderboard">
                      {topVendors.map((vendor, index) => (
                        <div key={index} className="leaderboard-item">
                          <div className="leaderboard-rank">#{index + 1}</div>
                          <div className="leaderboard-content">
                            <h4>{vendor.name}</h4>
                            <p className="leaderboard-category">{vendor.category}</p>
                          </div>
                          <div className="leaderboard-stats">
                            <span className="leaderboard-rating">{vendor.rating} ⭐</span>
                            <span className="leaderboard-reviews">{vendor.reviews} reviews</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="empty-chart">No vendor data available</p>
                  )}
                </div>

                {/* Top Reviewers */}
                <div className="chart-container">
                  <h3 className="chart-title">Most Active Reviewers</h3>
                  {topReviewers.length > 0 ? (
                    <div className="leaderboard">
                      {topReviewers.map((reviewer, index) => (
                        <div key={index} className="leaderboard-item">
                          <div className="leaderboard-rank">#{index + 1}</div>
                          <div className="leaderboard-content">
                            <h4>{reviewer.name}</h4>
                          </div>
                          <div className="leaderboard-stats">
                            <span className="leaderboard-reviews">{reviewer.count} reviews</span>
                            <span className="leaderboard-rating">Avg: {reviewer.avgRating} ⭐</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="empty-chart">No reviewer data available</p>
                  )}
                </div>

                {/* Popular Tags */}
                <div className="chart-container">
                  <h3 className="chart-title">Popular Review Tags</h3>
                  {popularTags.length > 0 ? (
                    <div className="tags-grid">
                      {popularTags.map((tag, index) => (
                        <div key={index} className="tag-item">
                          <span className="tag-name">{tag.tag}</span>
                          <span className="tag-count">{tag.count}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="empty-chart">No tag data available</p>
                  )}
                </div>
              </>
            )}
          </div>
        </main>
      </div>

      <style jsx>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-content {
          flex: 1;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #6c757d;
          margin: 0 0 0.25rem 0;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
          color: #2c3e50;
        }

        .stat-subtext {
          font-size: 0.813rem;
          color: #95a5a6;
          margin: 0.25rem 0 0 0;
        }

        .time-range-selector {
          display: flex;
          gap: 0.5rem;
        }

        .time-btn {
          padding: 0.5rem 1rem;
          border: 1px solid #dee2e6;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.875rem;
          transition: all 0.2s;
        }

        .time-btn:hover {
          background: #f8f9fa;
        }

        .time-btn.active {
          background: #007bff;
          color: white;
          border-color: #007bff;
        }

        .chart-container {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .chart-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0 0 1.5rem 0;
          color: #2c3e50;
        }

        .empty-chart {
          text-align: center;
          padding: 3rem;
          color: #95a5a6;
        }

        .leaderboard {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .leaderboard-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .leaderboard-rank {
          font-size: 1.25rem;
          font-weight: 700;
          color: #007bff;
          min-width: 40px;
        }

        .leaderboard-content {
          flex: 1;
        }

        .leaderboard-content h4 {
          margin: 0;
          font-size: 1rem;
          color: #2c3e50;
        }

        .leaderboard-category {
          margin: 0.25rem 0 0 0;
          font-size: 0.813rem;
          color: #6c757d;
        }

        .leaderboard-stats {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .leaderboard-rating {
          font-weight: 600;
          color: #388E3C;
        }

        .leaderboard-reviews {
          font-size: 0.875rem;
          color: #6c757d;
        }

        .tags-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1rem;
        }

        .tag-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 3px solid #007bff;
        }

        .tag-name {
          font-weight: 500;
          color: #2c3e50;
        }

        .tag-count {
          background: #007bff;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.813rem;
          font-weight: 600;
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default AdminAnalytics;