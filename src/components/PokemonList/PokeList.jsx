import React from 'react';
import './PokeList.css';

export default function PokeList({ poke }) {
  return (
    <>
      <div className="poke-container">
        <ul>
          {poke.map((item) => (
            <div key={item.id} className="poke-card">
              <li className="name">{item.pokemon}</li>
              <li>type: {item.type_1}</li>
              <li>hp: {item.hp}</li>
              <img className="image" src={item.url_image} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
