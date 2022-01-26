import React, { useEffect } from 'react';
import { useState } from 'react';
import UserControl from '../components/Controls/UserControl';
import { fetchPokemon } from '../services/pokemon';
import PokeList from '../components/PokemonList/PokeList';

export default function Pokemon() {
  const [poke, setPoke] = useState([]);
  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon(query);
      setPoke(data);
      setLoading(false);
    };
    fetchData();
  }, [query]);

  if (loading) {
    return <h2>Loading</h2>;
  }

  function filterPokemon() {
    let filteredPokemon = poke.filter((item) => {
      return item.name.toLowerCase().includes(query) && (item.pokemon === poke || poke === 'All');
    });
    if (sort === true) {
      return filteredPokemon.sort((a, b) => {
        return a.length > b.length ? 1 : -1;
      });
    } else {
      return filteredPokemon;
    }
  }

  return (
    <div>
      <UserControl
        setLoading={setLoading}
        query={query}
        setQuery={setQuery}
        filterPokemon={filterPokemon}
      />
      <PokeList poke={poke} />
    </div>
  );
}
