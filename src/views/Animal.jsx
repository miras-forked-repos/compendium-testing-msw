import React, { useEffect } from 'react';
import { useState } from 'react';
import AnimalList from '../components/AnimalList/AnimalList';
import UserControl from '../components/Controls/UserControl';
import { fetchAnimal, fetchRandomAnimals } from '../services/animals';

export default function Animal() {
  const [animal, setAnimal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchAnimal, setSearchAnimal] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRandomAnimals(query);
      setAnimal(data);
      setLoading(false);
    };
    fetchData();
  }, [query]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchAnimal();
  //     setSearchAnimal(data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <UserControl searchAnimal={searchAnimal} />
      <AnimalList animal={animal} />
    </div>
  );
}
