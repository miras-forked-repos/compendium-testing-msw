import React, { useEffect } from 'react';
import { useState } from 'react';
import { fetchAnimals } from '../services/animals';
import AnimalList from '../components/AnimalList';

export default function Animal() {
  const [animal, setAnimal] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAnimals();
      setAnimal(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <AnimalList animal={animal} />
    </div>
  );
}
