// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecommendedList from '../components/RecommendedList';
import BottomNav from '../components/BottomNav';
import './HomePage.css';

// You can create these two simple components here or in separate files
const CategoryList = () => (
  <div className="category-list">
    {/* Add your categories here */}
  </div>
);

const TagCloud = () => (
  <div className="tag-cloud">
    {/* Add your tags here */}
  </div>
);


const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <Header />
        <SearchBar />
      </div>

      <main className="main-content">
        <CategoryList />
        <TagCloud />
        <RecommendedList />
      </main>

      <BottomNav />
    </div>
  );
};

export default HomePage;