import React from 'react';
import './AnimalList.css';

export default function AnimalList({ animal }) {
  return (
    <div>
      <div className="animal-container">
        {animal.map((item) => (
          <div className="animal-card" key={item.id}></div>
        ))}
      </div>
    </div>
  );
}
