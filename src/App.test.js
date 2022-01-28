import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

// const pokemon = {
//   count: 801,
//   page: 1,
//   perPage: 20,
//   sort: {
//     by: '_id',
//     direction: 'asc',
//   },
//   search: {},
//   results: [
//     {
//       _id: '5ff4fb7cd89993a89cc65444',
//       pokemon: 'venusaur-mega',
//       id: 4,
//       species_id: 3,
//       height: 24,
//       weight: 1555,
//       base_experience: 281,
//       type_1: 'grass',
//       type_2: 'poison',
//       attack: 100,
//       defense: 123,
//       hp: 80,
//       special_attack: 122,
//       special_defense: 120,
//       speed: 80,
//       ability_1: 'thick-fat',
//       ability_2: 'NA',
//       ability_hidden: 'NA',
//       color_1: '#78C850',
//       color_2: '#A040A0',
//       color_f: '#81A763',
//       egg_group_1: 'monster',
//       egg_group_2: 'plant',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png',
//       generation_id: 'NA',
//       evolves_from_species_id: 'NA',
//       evolution_chain_id: 'NA',
//       shape_id: 'NA',
//       shape: 'NA',
//       pokebase: 'venusaur',
//       pokedex: 'http://www.pokemon.com/us/pokedex/venusaur',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc65445',
//       pokemon: 'charizard-mega-x',
//       id: 8,
//       species_id: 6,
//       height: 17,
//       weight: 1105,
//       base_experience: 285,
//       type_1: 'fire',
//       type_2: 'dragon',
//       attack: 130,
//       defense: 111,
//       hp: 78,
//       special_attack: 130,
//       special_defense: 85,
//       speed: 100,
//       ability_1: 'tough-claws',
//       ability_2: 'NA',
//       ability_hidden: 'NA',
//       color_1: '#F08030',
//       color_2: '#7038F8',
//       color_f: '#D06E60',
//       egg_group_1: 'monster',
//       egg_group_2: 'dragon',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f2.png',
//       generation_id: 'NA',
//       evolves_from_species_id: 'NA',
//       evolution_chain_id: 'NA',
//       shape_id: 'NA',
//       shape: 'NA',
//       pokebase: 'charizard',
//       pokedex: 'http://www.pokemon.com/us/pokedex/charizard',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc65446',
//       pokemon: 'bulbasaur',
//       id: 1,
//       species_id: 1,
//       height: 7,
//       weight: 69,
//       base_experience: 64,
//       type_1: 'grass',
//       type_2: 'poison',
//       attack: 49,
//       defense: 49,
//       hp: 45,
//       special_attack: 65,
//       special_defense: 65,
//       speed: 45,
//       ability_1: 'overgrow',
//       ability_2: 'NA',
//       ability_hidden: 'chlorophyll',
//       color_1: '#78C850',
//       color_2: '#A040A0',
//       color_f: '#81A763',
//       egg_group_1: 'monster',
//       egg_group_2: 'plant',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
//       generation_id: 1,
//       evolves_from_species_id: 'NA',
//       evolution_chain_id: 1,
//       shape_id: 8,
//       shape: 'quadruped',
//       pokebase: 'bulbasaur',
//       pokedex: 'http://www.pokemon.com/us/pokedex/bulbasaur',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc65447',
//       pokemon: 'charizard',
//       id: 7,
//       species_id: 6,
//       height: 17,
//       weight: 905,
//       base_experience: 240,
//       type_1: 'fire',
//       type_2: 'flying',
//       attack: 84,
//       defense: 78,
//       hp: 78,
//       special_attack: 109,
//       special_defense: 85,
//       speed: 100,
//       ability_1: 'blaze',
//       ability_2: 'NA',
//       ability_hidden: 'solar-power',
//       color_1: '#F08030',
//       color_2: '#A890F0',
//       color_f: '#DE835E',
//       egg_group_1: 'monster',
//       egg_group_2: 'dragon',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
//       generation_id: 1,
//       evolves_from_species_id: '5',
//       evolution_chain_id: 2,
//       shape_id: 6,
//       shape: 'upright',
//       pokebase: 'charizard',
//       pokedex: 'http://www.pokemon.com/us/pokedex/charizard',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc65448',
//       pokemon: 'charizard-mega-y',
//       id: 9,
//       species_id: 6,
//       height: 17,
//       weight: 1005,
//       base_experience: 285,
//       type_1: 'fire',
//       type_2: 'flying',
//       attack: 104,
//       defense: 78,
//       hp: 78,
//       special_attack: 159,
//       special_defense: 115,
//       speed: 100,
//       ability_1: 'drought',
//       ability_2: 'NA',
//       ability_hidden: 'NA',
//       color_1: '#F08030',
//       color_2: '#A890F0',
//       color_f: '#DE835E',
//       egg_group_1: 'monster',
//       egg_group_2: 'dragon',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png',
//       generation_id: 'NA',
//       evolves_from_species_id: 'NA',
//       evolution_chain_id: 'NA',
//       shape_id: 'NA',
//       shape: 'NA',
//       pokebase: 'charizard',
//       pokedex: 'http://www.pokemon.com/us/pokedex/charizard',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc65449',
//       pokemon: 'squirtle',
//       id: 10,
//       species_id: 7,
//       height: 5,
//       weight: 90,
//       base_experience: 63,
//       type_1: 'water',
//       type_2: 'NA',
//       attack: 48,
//       defense: 65,
//       hp: 44,
//       special_attack: 50,
//       special_defense: 64,
//       speed: 43,
//       ability_1: 'torrent',
//       ability_2: 'NA',
//       ability_hidden: 'rain-dish',
//       color_1: '#6890F0',
//       color_2: 'NA',
//       color_f: 'NA',
//       egg_group_1: 'monster',
//       egg_group_2: 'water1',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
//       generation_id: 1,
//       evolves_from_species_id: 'NA',
//       evolution_chain_id: 3,
//       shape_id: 6,
//       shape: 'upright',
//       pokebase: 'squirtle',
//       pokedex: 'http://www.pokemon.com/us/pokedex/squirtle',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc6544a',
//       pokemon: 'wartortle',
//       id: 11,
//       species_id: 8,
//       height: 10,
//       weight: 225,
//       base_experience: 142,
//       type_1: 'water',
//       type_2: 'NA',
//       attack: 63,
//       defense: 80,
//       hp: 59,
//       special_attack: 65,
//       special_defense: 80,
//       speed: 58,
//       ability_1: 'torrent',
//       ability_2: 'NA',
//       ability_hidden: 'rain-dish',
//       color_1: '#6890F0',
//       color_2: 'NA',
//       color_f: 'NA',
//       egg_group_1: 'monster',
//       egg_group_2: 'water1',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
//       generation_id: 1,
//       evolves_from_species_id: '7',
//       evolution_chain_id: 3,
//       shape_id: 6,
//       shape: 'upright',
//       pokebase: 'wartortle',
//       pokedex: 'http://www.pokemon.com/us/pokedex/wartortle',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc6544b',
//       pokemon: 'blastoise',
//       id: 12,
//       species_id: 9,
//       height: 16,
//       weight: 855,
//       base_experience: 239,
//       type_1: 'water',
//       type_2: 'NA',
//       attack: 83,
//       defense: 100,
//       hp: 79,
//       special_attack: 85,
//       special_defense: 105,
//       speed: 78,
//       ability_1: 'torrent',
//       ability_2: 'NA',
//       ability_hidden: 'rain-dish',
//       color_1: '#6890F0',
//       color_2: 'NA',
//       color_f: 'NA',
//       egg_group_1: 'monster',
//       egg_group_2: 'water1',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
//       generation_id: 1,
//       evolves_from_species_id: '8',
//       evolution_chain_id: 3,
//       shape_id: 6,
//       shape: 'upright',
//       pokebase: 'blastoise',
//       pokedex: 'http://www.pokemon.com/us/pokedex/blastoise',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc6544c',
//       pokemon: 'blastoise-mega',
//       id: 13,
//       species_id: 9,
//       height: 16,
//       weight: 1011,
//       base_experience: 284,
//       type_1: 'water',
//       type_2: 'NA',
//       attack: 103,
//       defense: 120,
//       hp: 79,
//       special_attack: 135,
//       special_defense: 115,
//       speed: 78,
//       ability_1: 'mega-launcher',
//       ability_2: 'NA',
//       ability_hidden: 'NA',
//       color_1: '#6890F0',
//       color_2: 'NA',
//       color_f: 'NA',
//       egg_group_1: 'monster',
//       egg_group_2: 'water1',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/009_f2.png',
//       generation_id: 'NA',
//       evolves_from_species_id: 'NA',
//       evolution_chain_id: 'NA',
//       shape_id: 'NA',
//       shape: 'NA',
//       pokebase: 'blastoise',
//       pokedex: 'http://www.pokemon.com/us/pokedex/blastoise',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc6544d',
//       pokemon: 'caterpie',
//       id: 14,
//       species_id: 10,
//       height: 3,
//       weight: 29,
//       base_experience: 39,
//       type_1: 'bug',
//       type_2: 'NA',
//       attack: 30,
//       defense: 35,
//       hp: 45,
//       special_attack: 20,
//       special_defense: 20,
//       speed: 45,
//       ability_1: 'shield-dust',
//       ability_2: 'NA',
//       ability_hidden: 'run-away',
//       color_1: '#A8B820',
//       color_2: 'NA',
//       color_f: 'NA',
//       egg_group_1: 'bug',
//       egg_group_2: 'NA',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
//       generation_id: 1,
//       evolves_from_species_id: 'NA',
//       evolution_chain_id: 4,
//       shape_id: 2,
//       shape: 'squiggle',
//       pokebase: 'caterpie',
//       pokedex: 'http://www.pokemon.com/us/pokedex/caterpie',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc6544e',
//       pokemon: 'metapod',
//       id: 15,
//       species_id: 11,
//       height: 7,
//       weight: 99,
//       base_experience: 72,
//       type_1: 'bug',
//       type_2: 'NA',
//       attack: 20,
//       defense: 55,
//       hp: 50,
//       special_attack: 25,
//       special_defense: 25,
//       speed: 30,
//       ability_1: 'shed-skin',
//       ability_2: 'NA',
//       ability_hidden: 'NA',
//       color_1: '#A8B820',
//       color_2: 'NA',
//       color_f: 'NA',
//       egg_group_1: 'bug',
//       egg_group_2: 'NA',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
//       generation_id: 1,
//       evolves_from_species_id: '10',
//       evolution_chain_id: 4,
//       shape_id: 2,
//       shape: 'squiggle',
//       pokebase: 'metapod',
//       pokedex: 'http://www.pokemon.com/us/pokedex/metapod',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc6544f',
//       pokemon: 'butterfree',
//       id: 16,
//       species_id: 12,
//       height: 11,
//       weight: 320,
//       base_experience: 178,
//       type_1: 'bug',
//       type_2: 'flying',
//       attack: 45,
//       defense: 50,
//       hp: 60,
//       special_attack: 90,
//       special_defense: 80,
//       speed: 70,
//       ability_1: 'compound-eyes',
//       ability_2: 'NA',
//       ability_hidden: 'tinted-lens',
//       color_1: '#A8B820',
//       color_2: '#A890F0',
//       color_f: '#A8AE52',
//       egg_group_1: 'bug',
//       egg_group_2: 'NA',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
//       generation_id: 1,
//       evolves_from_species_id: '11',
//       evolution_chain_id: 4,
//       shape_id: 13,
//       shape: 'bug-wings',
//       pokebase: 'butterfree',
//       pokedex: 'http://www.pokemon.com/us/pokedex/butterfree',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc65450',
//       pokemon: 'weedle',
//       id: 17,
//       species_id: 13,
//       height: 3,
//       weight: 32,
//       base_experience: 39,
//       type_1: 'bug',
//       type_2: 'poison',
//       attack: 35,
//       defense: 30,
//       hp: 40,
//       special_attack: 20,
//       special_defense: 20,
//       speed: 50,
//       ability_1: 'shield-dust',
//       ability_2: 'NA',
//       ability_hidden: 'run-away',
//       color_1: '#A8B820',
//       color_2: '#A040A0',
//       color_f: '#A69A3F',
//       egg_group_1: 'bug',
//       egg_group_2: 'NA',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
//       generation_id: 1,
//       evolves_from_species_id: 'NA',
//       evolution_chain_id: 5,
//       shape_id: 2,
//       shape: 'squiggle',
//       pokebase: 'weedle',
//       pokedex: 'http://www.pokemon.com/us/pokedex/weedle',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc65451',
//       pokemon: 'charmander',
//       id: 5,
//       species_id: 4,
//       height: 6,
//       weight: 85,
//       base_experience: 62,
//       type_1: 'fire',
//       type_2: 'NA',
//       attack: 52,
//       defense: 43,
//       hp: 39,
//       special_attack: 60,
//       special_defense: 50,
//       speed: 65,
//       ability_1: 'blaze',
//       ability_2: 'NA',
//       ability_hidden: 'solar-power',
//       color_1: '#F08030',
//       color_2: 'NA',
//       color_f: 'NA',
//       egg_group_1: 'monster',
//       egg_group_2: 'dragon',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
//       generation_id: 1,
//       evolves_from_species_id: 'NA',
//       evolution_chain_id: 2,
//       shape_id: 6,
//       shape: 'upright',
//       pokebase: 'charmander',
//       pokedex: 'http://www.pokemon.com/us/pokedex/charmander',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc65452',
//       pokemon: 'beedrill',
//       id: 19,
//       species_id: 15,
//       height: 10,
//       weight: 295,
//       base_experience: 178,
//       type_1: 'bug',
//       type_2: 'poison',
//       attack: 90,
//       defense: 40,
//       hp: 65,
//       special_attack: 45,
//       special_defense: 80,
//       speed: 75,
//       ability_1: 'swarm',
//       ability_2: 'NA',
//       ability_hidden: 'sniper',
//       color_1: '#A8B820',
//       color_2: '#A040A0',
//       color_f: '#A69A3F',
//       egg_group_1: 'bug',
//       egg_group_2: 'NA',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
//       generation_id: 1,
//       evolves_from_species_id: '14',
//       evolution_chain_id: 5,
//       shape_id: 13,
//       shape: 'bug-wings',
//       pokebase: 'beedrill',
//       pokedex: 'http://www.pokemon.com/us/pokedex/beedrill',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc65453',
//       pokemon: 'kakuna',
//       id: 18,
//       species_id: 14,
//       height: 6,
//       weight: 100,
//       base_experience: 72,
//       type_1: 'bug',
//       type_2: 'poison',
//       attack: 25,
//       defense: 50,
//       hp: 45,
//       special_attack: 25,
//       special_defense: 25,
//       speed: 35,
//       ability_1: 'shed-skin',
//       ability_2: 'NA',
//       ability_hidden: 'NA',
//       color_1: '#A8B820',
//       color_2: '#A040A0',
//       color_f: '#A69A3F',
//       egg_group_1: 'bug',
//       egg_group_2: 'NA',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
//       generation_id: 1,
//       evolves_from_species_id: '13',
//       evolution_chain_id: 5,
//       shape_id: 2,
//       shape: 'squiggle',
//       pokebase: 'kakuna',
//       pokedex: 'http://www.pokemon.com/us/pokedex/kakuna',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc65454',
//       pokemon: 'pidgeotto',
//       id: 22,
//       species_id: 17,
//       height: 11,
//       weight: 300,
//       base_experience: 122,
//       type_1: 'normal',
//       type_2: 'flying',
//       attack: 60,
//       defense: 55,
//       hp: 63,
//       special_attack: 50,
//       special_defense: 50,
//       speed: 71,
//       ability_1: 'keen-eye',
//       ability_2: 'tangled-feet',
//       ability_hidden: 'big-pecks',
//       color_1: '#A8A878',
//       color_2: '#A890F0',
//       color_f: '#A8A295',
//       egg_group_1: 'flying',
//       egg_group_2: 'NA',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
//       generation_id: 1,
//       evolves_from_species_id: '16',
//       evolution_chain_id: 6,
//       shape_id: 9,
//       shape: 'wings',
//       pokebase: 'pidgeotto',
//       pokedex: 'http://www.pokemon.com/us/pokedex/pidgeotto',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc65455',
//       pokemon: 'beedrill-mega',
//       id: 20,
//       species_id: 15,
//       height: 140,
//       weight: 405,
//       base_experience: 223,
//       type_1: 'bug',
//       type_2: 'poison',
//       attack: 150,
//       defense: 40,
//       hp: 65,
//       special_attack: 15,
//       special_defense: 80,
//       speed: 145,
//       ability_1: 'adaptability',
//       ability_2: 'NA',
//       ability_hidden: 'NA',
//       color_1: '#A8B820',
//       color_2: '#A040A0',
//       color_f: '#A69A3F',
//       egg_group_1: 'bug',
//       egg_group_2: 'NA',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/015_f2.png',
//       generation_id: 'NA',
//       evolves_from_species_id: 'NA',
//       evolution_chain_id: 'NA',
//       shape_id: 'NA',
//       shape: 'NA',
//       pokebase: 'beedrill',
//       pokedex: 'http://www.pokemon.com/us/pokedex/beedrill',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc65456',
//       pokemon: 'pidgeot',
//       id: 23,
//       species_id: 18,
//       height: 15,
//       weight: 395,
//       base_experience: 216,
//       type_1: 'normal',
//       type_2: 'flying',
//       attack: 80,
//       defense: 75,
//       hp: 83,
//       special_attack: 70,
//       special_defense: 70,
//       speed: 101,
//       ability_1: 'keen-eye',
//       ability_2: 'tangled-feet',
//       ability_hidden: 'big-pecks',
//       color_1: '#A8A878',
//       color_2: '#A890F0',
//       color_f: '#A8A295',
//       egg_group_1: 'flying',
//       egg_group_2: 'NA',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
//       generation_id: 1,
//       evolves_from_species_id: '17',
//       evolution_chain_id: 6,
//       shape_id: 9,
//       shape: 'wings',
//       pokebase: 'pidgeot',
//       pokedex: 'http://www.pokemon.com/us/pokedex/pidgeot',
//     },
//     {
//       _id: '5ff4fb7cd89993a89cc65457',
//       pokemon: 'pidgeot-mega',
//       id: 24,
//       species_id: 18,
//       height: 220,
//       weight: 505,
//       base_experience: 261,
//       type_1: 'normal',
//       type_2: 'flying',
//       attack: 80,
//       defense: 80,
//       hp: 83,
//       special_attack: 135,
//       special_defense: 80,
//       speed: 121,
//       ability_1: 'no-guard',
//       ability_2: 'NA',
//       ability_hidden: 'NA',
//       color_1: '#A8A878',
//       color_2: '#A890F0',
//       color_f: '#A8A295',
//       egg_group_1: 'flying',
//       egg_group_2: 'NA',
//       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/018_f2.png',
//       generation_id: 'NA',
//       evolves_from_species_id: 'NA',
//       evolution_chain_id: 'NA',
//       shape_id: 'NA',
//       shape: 'NA',
//       pokebase: 'pidgeot',
//       pokedex: 'http://www.pokemon.com/us/pokedex/pidgeot',
//     },
//   ],
// };

// const server = setupServer(
//   rest.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex`, (req, res, ctx) => {
//     const select = req.url.searchParams.get('select');
//     if (select === '*') {
//       return res(ctx.json(pokemon));
//     }
//     return res(ctx.status(500), ctx.json({ error: 'failed' }));
//   })
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close());

test('pokemon should search by query', async () => {
  // const butterfree = {
  //   count: 1,
  //   page: 1,
  //   perPage: 20,
  //   sort: {
  //     by: '_id',
  //     direction: 'asc',
  //   },
  //   search: {
  //     pokemon: 'butter',
  //   },
  //   results: [
  //     {
  //       _id: '5ff4fb7cd89993a89cc6544f',
  //       pokemon: 'butterfree',
  //       id: 16,
  //       species_id: 12,
  //       height: 11,
  //       weight: 320,
  //       base_experience: 178,
  //       type_1: 'bug',
  //       type_2: 'flying',
  //       attack: 45,
  //       defense: 50,
  //       hp: 60,
  //       special_attack: 90,
  //       special_defense: 80,
  //       speed: 70,
  //       ability_1: 'compound-eyes',
  //       ability_2: 'NA',
  //       ability_hidden: 'tinted-lens',
  //       color_1: '#A8B820',
  //       color_2: '#A890F0',
  //       color_f: '#A8AE52',
  //       egg_group_1: 'bug',
  //       egg_group_2: 'NA',
  //       url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
  //       generation_id: 1,
  //       evolves_from_species_id: '11',
  //       evolution_chain_id: 4,
  //       shape_id: 13,
  //       shape: 'bug-wings',
  //       pokebase: 'butterfree',
  //       pokedex: 'http://www.pokemon.com/us/pokedex/butterfree',
  //     },
  //   ],
  // };

  // server.use(
  //   rest.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex`, (req, res, ctx) => {
  //     const select = req.url.searchParams.get('select');
  //     if (select === '*') {
  //       return res(ctx.json(butterfree));
  //     }
  //     return res(ctx.status(500), ctx.json({ error: 'failed' }));
  //   })
  // );
  render(<App />);
  // loading
  // const loading = await screen.getByText(/loading/i);
  // expect(loading).toBeInTheDocument();
  // search textbox
  const searchBar = await screen.findByRole('textbox');
  // search button
  const pokeName = 'butterfree';
  userEvent.type(searchBar, pokeName);

  // Search butterfree with type then click
  const button = screen.getByRole('button');
  userEvent.click(button);
  // check to see that name on screen matches name in search bar, exact false
  const poke = await screen.findAllByText(pokeName, { exact: false });
  // map through pokemon for correct text content = result of search
  const result = poke.map((item) => item.textContent);
  // create function that will check if searchbar name = result name
  const handleName = (name) => name.toLowerCase().includes(pokeName);
  // use .every to check if name fulfills handleName
  const checkName = result.every(handleName);
  expect(checkName).toBe(true);
});
