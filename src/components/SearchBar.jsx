// src/components/SearchBar.jsx
import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <h2>Looking for a place?</h2>
      <div className="search-bar">
        <input type="text" placeholder="🔍 Search" />
        <button>→</button>
      </div>
    </div>
  );
};

export default SearchBar;