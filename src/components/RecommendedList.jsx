// src/components/RecommendedList.jsx
import React from 'react';
import './RecommendedList.css';

const recommendedPlaces = [
  { name: "Mang Larry's - Dahlia", distance: '0.7km', rating: 4.1 },
  { name: 'RedTak - Quiapo', distance: '5.3km', rating: 4.7 },
  { name: 'Globe Lumpia - Raon', distance: '5.1km', rating: 4.3 },
];

const RecommendedItem = ({ place }) => (
  <div className="recommended-item">
    <h3>{place.name}</h3>
    <div className="item-details">
      <span>{place.distance}</span>
      <span>⭐ {place.rating}</span>
    </div>
  </div>
);

const RecommendedList = () => {
  return (
    <div className="recommended-section">
      <h2>Recommended</h2>
      <div className="recommended-list">
        {recommendedPlaces.map((place) => (
          <RecommendedItem key={place.name} place={place} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedList;