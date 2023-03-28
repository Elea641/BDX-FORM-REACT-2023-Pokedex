import './App.css'
import MyTitle from "./components/MyTitle"
import WeatherIcon from './components/WeatherIcon';
import { useState } from "react";
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  const pokemon = pokemonList[0];
  const [pokemonIndex, setCount] = useState(0);

  return (
    <div>
      <NavBar pokemonIndex={pokemonIndex} setCount={setCount} pokemonList={pokemonList}/>
      <p pokemonIndex={pokemonIndex}>{pokemonIndex}</p>
      <PokemonCard pokemonList={pokemonList} pokemon={pokemon}/>
    </div>
  )
}

export default App;