import React from 'react';
import './PokeList.css';

export default function PokeList({ poke }) {
  return (
    <div>
      <div className="poke-container">
        {poke.results.map((item) => (
          <div key={item.id} className="poke-card">
            <span>{item.pokemon}</span>
            <img className="image" src={item.url} />
          </div>
        ))}
      </div>
    </div>
  );
}
