import './App.css'
import MyTitle from "./components/MyTitle"
import WeatherIcon from './components/WeatherIcon';
import { useState, useEffect } from "react";
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

    const [pokemonIndexList, setPokemonIndexList] = useState(0);

    useEffect(
      () => {
        alert("hello pokemon trainer :)");
      }, 
      []
      )
  return (
    <div>
      <NavBar pokemonIndexList={pokemonIndexList} setPokemonIndexList={setPokemonIndexList} pokemonList={pokemonList}/>
      <PokemonCard pokemon={pokemonList[pokemonIndexList]}/>
    </div>
  )
}

export default App;