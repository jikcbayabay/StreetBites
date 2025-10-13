import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SearchResultsPage = () => {
  const { query } = useParams(); // Get the search query from the URL

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ 
        backgroundColor: '#dc2626', 
        padding: '16px', 
        color: 'white', 
        display: 'flex', 
        alignItems: 'center'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
          <span style={{ fontSize: '24px' }}>&#8592;</span> {/* Back arrow */}
        </Link>
        <h1 style={{ fontSize: '24px', margin: 0 }}>{query}</h1>
      </div>

      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: 'white', 
        borderRadius: '8px' 
      }}>
        <p>This is the search results page for "{query}".</p>
        <p>Here you would display a list of vendors matching the search term.</p>
        <p>
                  </p>
      </div>
    </div>
  );
};

export default SearchResultsPage;