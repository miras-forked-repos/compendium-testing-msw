import React from 'react';

export default function AnimalList({ animal }) {
  return (
    <div>
      <div className="animal-container">
        {animal.map((item) => (
          <div className="animal-card" key={item.id}>
            <span>{item.name}</span>
            <span></span>
          </div>
        ))}
      </div>
    </div>
  );
}
