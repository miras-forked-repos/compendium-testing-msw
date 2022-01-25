export async function fetchAnimals() {
  //   const params = new URLSearchParams();
  //   params.set('fish', query);
  const response = await fetch(`https://zoo-animal-api.herokuapp.com/animals/rand/10`);
  const data = await response.json();
  console.log(data);
  return data;
}
