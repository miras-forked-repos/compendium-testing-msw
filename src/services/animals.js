export async function fetchRandomAnimals(query) {
  const params = new URLSearchParams();
  params.set('character', query);
  const response = await fetch(
    `https://bobsburgers-api.herokuapp.com/characters/${params.toString()}`
  );
  const data = await response.json();
  return data;
}
