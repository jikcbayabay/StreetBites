// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all your pages
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SearchResultsPage from './pages/SearchResultsPage'; // Import the new component
import MapsPage from './pages/MapsPage';
// ... (import other pages)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search/:query" element={<SearchResultsPage />} /> {/* New route for search */}
          <Route path="/maps" element={<MapsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;