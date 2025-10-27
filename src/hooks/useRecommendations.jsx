// useRecommendations.jsx
import { useState, useEffect } from 'react';
import { RecommendationEngine } from '../services/recommendationService';

/**
 * React hook for getting AI-powered recommendations
 * @param {string|null} userId - Current user's ID
 * @param {number} maxResults - Maximum number of recommendations to return
 */
export function useRecommendations(userId, maxResults = 10) {
  const [recommendations, setRecommendations] = useState([]);
  const [trending, setTrending] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecommendations = async () => {
    if (!userId) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const engine = new RecommendationEngine(userId);

      // Fetch all recommendation types in parallel
      const [recs, trend, sellers] = await Promise.all([
        engine.getRecommendations(maxResults),
        engine.getTrendingVendors(5),
        engine.getBestSellers(10)
      ]);

      setRecommendations(recs);
      setTrending(trend);
      setBestSellers(sellers);
    } catch (err) {
      console.error('Error fetching recommendations:', err);
      setError('Failed to load recommendations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, [userId, maxResults]);

  return {
    recommendations,
    trending,
    bestSellers,
    loading,
    error,
    refresh: fetchRecommendations
  };
}

// Example usage component
export function RecommendationsScreen({ userId }) {
  const { recommendations, trending, bestSellers, loading, error } = 
    useRecommendations(userId);

  if (loading) {
    return <div className="p-4">Loading recommendations...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 space-y-6">
      {/* Personalized Recommendations */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map(vendor => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </section>

      {/* Trending Vendors */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🔥 Trending Now</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {trending.map(vendor => (
            <VendorCard key={vendor.id} vendor={vendor} compact />
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section>
        <h2 className="text-2xl font-bold mb-4">⭐ Best Sellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bestSellers.map((item, idx) => (
            <MenuItemCard key={idx} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

// Vendor Card Component
function VendorCard({ vendor, compact = false }) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer ${
        compact ? 'min-w-[250px]' : ''
      }`}
    >
      <img
        src={vendor.imageURL}
        alt={vendor.businessName}
        className={`w-full object-cover ${compact ? 'h-32' : 'h-48'}`}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{vendor.businessName}</h3>
        <p className="text-sm text-gray-600">{vendor.category}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-semibold">{vendor.rating}</span>
            <span className="text-xs text-gray-500">
              ({vendor.reviewCount || 0})
            </span>
          </div>
          <span className="text-sm font-semibold">{vendor.priceRange}</span>
        </div>
        <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
          <span>📍</span>
          <span>{vendor.distance.toFixed(1)} km away</span>
        </div>
      </div>
    </div>
  );
}

// Menu Item Card Component
function MenuItemCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-32 object-cover"
      />
      <div className="p-3">
        <h4 className="font-semibold text-sm line-clamp-2">{item.name}</h4>
        <p className="text-xs text-gray-600 mt-1">{item.category}</p>
        <p className="font-bold text-sm mt-2">₱{item.price}</p>
        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mt-2">
          ⭐ Best Seller
        </span>
      </div>
    </div>
  );
}