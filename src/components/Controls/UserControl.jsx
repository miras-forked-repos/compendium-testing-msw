import React from 'react';

export default function UserControl({ query, setQuery, setLoading }) {
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search Pokemon"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button className="search-button" onClick={() => setLoading(true)}>
        Search
      </button>
    </div>
  );
}
