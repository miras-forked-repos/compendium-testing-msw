import React, { useEffect } from 'react';
import { useState } from 'react';
import UserControl from '../components/Controls/UserControl';
import { fetchPokemon } from '../services/pokemon';
import PokeList from '../components/PokemonList/PokeList';
import './Pokemon.css';
import { useHover } from 'react-recipes';

export default function Pokemon() {
  const [poke, setPoke] = useState([]);
  const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoverRef, isHovered] = useHover();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon(query);
      setPoke(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [query, loading]);

  return (
    <div>
      <h1>Pokedex</h1>
      <div ref={hoverRef}>
        {isHovered ? '🤩 ' : '😗'}
        <UserControl setLoading={setLoading} query={query} setQuery={setQuery} />
      </div>
      <PokeList poke={poke} />
    </div>
  );
}
