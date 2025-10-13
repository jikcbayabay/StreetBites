import React, { useState } from 'react';
import { User, Plus, TrendingUp, MapPin, Star, Eye, Heart, MessageCircle, Camera } from 'lucide-react';

// CSS embedded in the component for artifact compatibility
const styles = `
  .vendor-dashboard {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    min-height: 100vh;
    padding-bottom: 80px;
  }

  .vendor-header {
    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
    color: white;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .vendor-header h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }

  .vendor-badge {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
  }

  .vendor-main {
    padding: 20px;
    max-width: 100%;
  }

  .vendor-content {
    animation: fadeIn 0.3s ease-in;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .content-header h2 {
    font-size: 22px;
    font-weight: bold;
    color: #111827;
    margin: 0;
  }

  .add-button {
    background-color: #dc2626;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s;
  }

  .add-button:hover {
    background-color: #b91c1c;
  }

  .vendor-card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .vendor-profile {
    display: flex;
    gap: 16px;
    align-items: start;
  }

  .vendor-image-container {
    position: relative;
    flex-shrink: 0;
  }

  .vendor-image {
    width: 100px;
    height: 100px;
    border-radius: 12px;
    object-fit: cover;
  }

  .edit-image-btn {
    position: absolute;
    bottom: -8px;
    right: -8px;
    background-color: #dc2626;
    color: white;
    border: 2px solid white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .vendor-info {
    flex: 1;
  }

  .vendor-info h3 {
    font-size: 18px;
    font-weight: bold;
    color: #111827;
    margin: 0 0 8px 0;
  }

  .vendor-description {
    font-size: 14px;
    color: #6b7280;
    margin: 0 0 12px 0;
  }

  .vendor-meta {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    font-size: 13px;
  }

  .vendor-meta .location {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #6b7280;
  }

  .vendor-meta .category {
    background-color: #f3f4f6;
    padding: 4px 10px;
    border-radius: 12px;
    color: #374151;
  }

  .vendor-meta .rating {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #111827;
    font-weight: 600;
  }

  .edit-button {
    background-color: #f3f4f6;
    color: #374151;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s;
  }

  .edit-button:hover {
    background-color: #e5e7eb;
  }

  .listings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }

  .listing-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .listing-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .listing-image-wrapper {
    position: relative;
    height: 180px;
    overflow: hidden;
  }

  .listing-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .listing-stats {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 8px;
  }

  .listing-stats span {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .listing-details {
    padding: 12px;
  }

  .listing-details h4 {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
    margin: 0 0 6px 0;
  }

  .listing-price {
    font-size: 18px;
    font-weight: bold;
    color: #dc2626;
    margin: 0 0 12px 0;
  }

  .edit-listing-btn {
    width: 100%;
    background-color: #f3f4f6;
    color: #374151;
    border: none;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s;
  }

  .edit-listing-btn:hover {
    background-color: #e5e7eb;
  }

  .period-select {
    padding: 8px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    background-color: white;
    cursor: pointer;
    font-size: 14px;
    color: #374151;
  }

  .insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
  }

  .insight-card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 12px;
  }

  .insight-icon {
    width: 44px;
    height: 44px;
    background-color: #fee2e2;
    color: #dc2626;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .insight-info {
    flex: 1;
  }

  .insight-label {
    font-size: 13px;
    color: #6b7280;
    margin: 0 0 4px 0;
  }

  .insight-value {
    font-size: 24px;
    font-weight: bold;
    color: #111827;
    margin: 0 0 4px 0;
  }

  .insight-change {
    font-size: 12px;
    font-weight: 600;
  }

  .insight-change.positive {
    color: #10b981;
  }

  .chart-placeholder {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .chart-placeholder h3 {
    font-size: 18px;
    font-weight: bold;
    color: #111827;
    margin: 0 0 16px 0;
  }

  .chart-content {
    background-color: #f9fafb;
    border-radius: 8px;
    padding: 40px;
    text-align: center;
    color: #6b7280;
  }

  .chart-content p {
    margin: 8px 0;
  }

  .chart-note {
    font-size: 13px;
  }

  .messages-list {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .message-item {
    display: flex;
    gap: 12px;
    padding: 16px;
    border-bottom: 1px solid #f3f4f6;
    cursor: pointer;
    transition: background-color 0.3s;
    position: relative;
  }

  .message-item:hover {
    background-color: #f9fafb;
  }

  .message-item.unread {
    background-color: #fef2f2;
  }

  .message-avatar {
    width: 44px;
    height: 44px;
    background-color: #f3f4f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
    flex-shrink: 0;
  }

  .message-content {
    flex: 1;
  }

  .message-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  .message-header h4 {
    font-size: 15px;
    font-weight: 600;
    color: #111827;
    margin: 0;
  }

  .message-time {
    font-size: 12px;
    color: #9ca3af;
  }

  .message-text {
    font-size: 14px;
    color: #6b7280;
    margin: 0;
  }

  .unread-indicator {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: #dc2626;
    border-radius: 50%;
  }

  .profile-section {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .profile-field {
    margin-bottom: 20px;
  }

  .profile-field label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    margin-bottom: 8px;
  }

  .profile-field input,
  .profile-field textarea,
  .profile-field select {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    color: #374151;
    box-sizing: border-box;
  }

  .profile-field textarea {
    resize: vertical;
    font-family: Arial, sans-serif;
  }

  .save-button {
    background-color: #dc2626;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    width: 100%;
    transition: background-color 0.3s;
  }

  .save-button:hover {
    background-color: #b91c1c;
  }

  .vendor-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    border-top: 1px solid #e5e7eb;
    padding: 8px 16px 12px;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
    z-index: 100;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 12px;
    color: #6b7280;
    transition: color 0.3s;
    position: relative;
  }

  .nav-item.active {
    color: #dc2626;
  }

  .nav-item span {
    font-size: 11px;
    font-weight: 500;
  }

  .notification-badge {
    position: absolute;
    top: 0;
    right: 8px;
    background-color: #dc2626;
    color: white;
    font-size: 10px;
    font-weight: bold;
    padding: 2px 5px;
    border-radius: 10px;
    min-width: 16px;
    text-align: center;
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
  }

  .modal-content {
    background: white;
    border-radius: 16px;
    padding: 24px;
    max-width: 500px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
  }

  .modal-content h3 {
    font-size: 20px;
    font-weight: bold;
    color: #111827;
    margin: 0 0 20px 0;
  }

  .modal-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .form-field {
    display: flex;
    flex-direction: column;
  }

  .form-field label {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    margin-bottom: 8px;
  }

  .form-field input,
  .form-field textarea {
    padding: 10px 12px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    color: #374151;
  }

  .upload-area {
    border: 2px dashed #e5e7eb;
    border-radius: 8px;
    padding: 32px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.3s;
  }

  .upload-area:hover {
    border-color: #dc2626;
  }

  .upload-area p {
    margin: 8px 0 0 0;
    font-size: 13px;
    color: #6b7280;
  }

  .modal-actions {
    display: flex;
    gap: 12px;
    margin-top: 8px;
  }

  .cancel-btn,
  .submit-btn {
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: background-color 0.3s;
  }

  .cancel-btn {
    background-color: #f3f4f6;
    color: #374151;
  }

  .cancel-btn:hover {
    background-color: #e5e7eb;
  }

  .submit-btn {
    background-color: #dc2626;
    color: white;
  }

  .submit-btn:hover {
    background-color: #b91c1c;
  }

  @media (max-width: 640px) {
    .vendor-profile {
      flex-direction: column;
    }

    .insights-grid {
      grid-template-columns: 1fr;
    }

    .listings-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const VendorDashboard = () => {
  const [activeNav, setActiveNav] = useState('listings');
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample vendor data
  const vendorData = {
    name: "Boss Karl's Cart",
    description: "Authentic Filipino street food since 2020",
    location: "Sampaloc, Manila",
    category: "Street Food",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop"
  };

  const listings = [
    { id: 1, name: "Isaw Combo", price: "₱35", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop", views: 234, likes: 45 },
    { id: 2, name: "Kwek-Kwek Special", price: "₱25", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop", views: 189, likes: 38 },
    { id: 3, name: "Barbecue Stick", price: "₱15", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop", views: 312, likes: 67 }
  ];

  const insights = [
    { label: "Profile Views", value: "1,234", change: "+12%", icon: <Eye size={20} /> },
    { label: "Total Likes", value: "456", change: "+8%", icon: <Heart size={20} /> },
    { label: "Listing Views", value: "2,891", change: "+15%", icon: <TrendingUp size={20} /> },
    { label: "Engagement Rate", value: "23%", change: "+3%", icon: <Star size={20} /> }
  ];

  const messages = [
    { id: 1, user: "Maria S.", message: "What time do you open?", time: "10 min ago", unread: true },
    { id: 2, user: "Juan D.", message: "Do you have vegetarian options?", time: "1 hour ago", unread: true },
    { id: 3, user: "Anna R.", message: "Great food! Will visit again.", time: "2 hours ago", unread: false }
  ];

  const renderListings = () => (
    <div className="vendor-content">
      <div className="content-header">
        <h2>My Listings</h2>
        <button className="add-button" onClick={() => setShowAddModal(true)}>
          <Plus size={18} />
          <span>Add New</span>
        </button>
      </div>

      <div className="vendor-card">
        <div className="vendor-profile">
          <div className="vendor-image-container">
            <img src={vendorData.image} alt={vendorData.name} className="vendor-image" />
            <button className="edit-image-btn">
              <Camera size={16} />
            </button>
          </div>
          <div className="vendor-info">
            <h3>{vendorData.name}</h3>
            <p className="vendor-description">{vendorData.description}</p>
            <div className="vendor-meta">
              <span className="location">
                <MapPin size={14} />
                {vendorData.location}
              </span>
              <span className="category">{vendorData.category}</span>
              <span className="rating">
                <Star size={14} fill="#fbbf24" color="#fbbf24" />
                {vendorData.rating}
              </span>
            </div>
          </div>
          <button className="edit-button">Edit</button>
        </div>
      </div>

      <div className="listings-grid">
        {listings.map(item => (
          <div key={item.id} className="listing-card">
            <div className="listing-image-wrapper">
              <img src={item.image} alt={item.name} className="listing-image" />
              <div className="listing-stats">
                <span><Eye size={12} /> {item.views}</span>
                <span><Heart size={12} /> {item.likes}</span>
              </div>
            </div>
            <div className="listing-details">
              <h4>{item.name}</h4>
              <p className="listing-price">{item.price}</p>
              <button className="edit-listing-btn">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderInsights = () => (
    <div className="vendor-content">
      <div className="content-header">
        <h2>Insights</h2>
        <select className="period-select">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      <div className="insights-grid">
        {insights.map((insight, idx) => (
          <div key={idx} className="insight-card">
            <div className="insight-icon">{insight.icon}</div>
            <div className="insight-info">
              <p className="insight-label">{insight.label}</p>
              <h3 className="insight-value">{insight.value}</h3>
              <span className="insight-change positive">{insight.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="chart-placeholder">
        <h3>Engagement Over Time</h3>
        <div className="chart-content">
          <p>Chart visualization would go here</p>
          <p className="chart-note">Track your profile views, likes, and engagement metrics</p>
        </div>
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="vendor-content">
      <div className="content-header">
        <h2>Messages</h2>
      </div>

      <div className="messages-list">
        {messages.map(msg => (
          <div key={msg.id} className={`message-item ${msg.unread ? 'unread' : ''}`}>
            <div className="message-avatar">
              <User size={24} />
            </div>
            <div className="message-content">
              <div className="message-header">
                <h4>{msg.user}</h4>
                <span className="message-time">{msg.time}</span>
              </div>
              <p className="message-text">{msg.message}</p>
            </div>
            {msg.unread && <div className="unread-indicator"></div>}
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="vendor-content">
      <div className="content-header">
        <h2>Profile Settings</h2>
      </div>

      <div className="profile-section">
        <div className="profile-field">
          <label>Business Name</label>
          <input type="text" defaultValue={vendorData.name} />
        </div>
        <div className="profile-field">
          <label>Description</label>
          <textarea rows="3" defaultValue={vendorData.description}></textarea>
        </div>
        <div className="profile-field">
          <label>Location</label>
          <input type="text" defaultValue={vendorData.location} />
        </div>
        <div className="profile-field">
          <label>Category</label>
          <select defaultValue={vendorData.category}>
            <option>Street Food</option>
            <option>Beverages</option>
            <option>Desserts</option>
            <option>Grilled Items</option>
          </select>
        </div>
        <div className="profile-field">
          <label>Operating Hours</label>
          <input type="text" placeholder="e.g., 8:00 AM - 8:00 PM" />
        </div>
        <div className="profile-field">
          <label>Contact Number</label>
          <input type="tel" placeholder="+63 XXX XXX XXXX" />
        </div>
        <button className="save-button">Save Changes</button>
      </div>
    </div>
  );

  return (
    <>
      <style>{styles}</style>
      <div className="vendor-dashboard">
        <header className="vendor-header">
          <h1>StreetBites</h1>
          <span className="vendor-badge">Vendor</span>
        </header>

        <div className="vendor-main">
          {activeNav === 'listings' && renderListings()}
          {activeNav === 'insights' && renderInsights()}
          {activeNav === 'messages' && renderMessages()}
          {activeNav === 'profile' && renderProfile()}
        </div>

        <nav className="vendor-bottom-nav">
          <button
            className={`nav-item ${activeNav === 'listings' ? 'active' : ''}`}
            onClick={() => setActiveNav('listings')}
          >
            <MapPin size={22} />
            <span>My Listings</span>
          </button>
          <button
            className={`nav-item ${activeNav === 'insights' ? 'active' : ''}`}
            onClick={() => setActiveNav('insights')}
          >
            <TrendingUp size={22} />
            <span>Insights</span>
          </button>
          <button
            className={`nav-item ${activeNav === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveNav('messages')}
          >
            <MessageCircle size={22} />
            <span>Messages</span>
            <span className="notification-badge">2</span>
          </button>
          <button
            className={`nav-item ${activeNav === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveNav('profile')}
          >
            <User size={22} />
            <span>Profile</span>
          </button>
        </nav>

        {showAddModal && (
          <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Add New Listing</h3>
              <div className="modal-form">
                <div className="form-field">
                  <label>Item Name</label>
                  <input type="text" placeholder="e.g., Chicken Barbecue" />
                </div>
                <div className="form-field">
                  <label>Price</label>
                  <input type="text" placeholder="₱" />
                </div>
                <div className="form-field">
                  <label>Description</label>
                  <textarea rows="3" placeholder="Describe your item..."></textarea>
                </div>
                <div className="form-field">
                  <label>Upload Photo</label>
                  <div className="upload-area">
                    <Camera size={32} />
                    <p>Click to upload or drag and drop</p>
                  </div>
                </div>
                <div className="modal-actions">
                  <button className="cancel-btn" onClick={() => setShowAddModal(false)}>Cancel</button>
                  <button className="submit-btn">Add Listing</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VendorDashboard;

