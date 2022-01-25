import React from 'react';

export default function UserControl({ number, setNumber, searchAnimal }) {
  return (
    <div>
      <select
        className="number"
        placeholder="Search for Animal"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      >
        <option>Choose # displayed animals</option>
        <option value="1">1</option>
      </select>
    </div>
  );
}
