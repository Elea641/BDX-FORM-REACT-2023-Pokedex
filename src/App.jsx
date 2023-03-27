import './App.css'
import MyTitle from "./components/MyTitle"
import WeatherIcon from './components/WeatherIcon';
import PokemonCard from './components/PokemonCard';

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  const pokemon = pokemonList[0]
  return (
    <div>
      <PokemonCard pokemonList={pokemonList} pokemon={pokemon}/>
    </div>
  );
}

export default App;