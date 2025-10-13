import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SearchResults.css';

const SearchResultsPage = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        // ➡️ Replace with your actual API endpoint.
        // You would pass the 'query' variable to your backend to get relevant results.
        const response = await fetch(`/api/search?query=${query}`);
        if (!response.ok) {
          throw new Error('Failed to fetch search results');
        }
        const data = await response.json();
        setResults(data);
      } catch (err) {
        console.error('Error fetching search results:', err);
        setError('Failed to load search results. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [query]); // Re-run the effect whenever the search query changes

  return (
    <div className="search-results-page">
      <header className="search-header">
        <button onClick={() => navigate(-1)} className="back-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <h1 className="search-title">{query}</h1>
      </header>

      <main className="search-content">
        {loading && <p className="loading-message">Loading results for "{query}"...</p>}
        {error && <p className="error-message">{error}</p>}

        {!loading && !error && results.length === 0 && (
          <p className="no-results-message">No results found for "{query}".</p>
        )}

        {!loading && !error && results.length > 0 && (
          <div className="results-list">
            {results.map((result) => (
              <div key={result.id} className="result-card">
                <img src={result.image} alt={result.name} className="result-image" />
                <div className="result-details">
                  <h2 className="result-name">{result.name}</h2>
                  <div className="result-meta">
                    <span className="result-distance">{result.distance}</span>
                    <span className="result-rating">
                      <svg viewBox="0 0 24 24" className="star-icon">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      {result.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchResultsPage;