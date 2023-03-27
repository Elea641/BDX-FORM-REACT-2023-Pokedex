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

/*function PokemonCard() {
    const pokemon = pokemonList[0];
    return <figure>{pokemon.imgSrc === true ?
        <img src={pokemon.imgSrc} alt={pokemon.name} /> :
         <p>???</p>
         } 
        <figcaption>{pokemon.name}</figcaption>
    </figure>
    }*/

    function PokemonCard() {
        const pokemon = pokemonList[0];
        return <figure if (pokemon.imgSrc === true) {
            <img src={pokemon.imgSrc} alt={pokemon.name} />
        } else {
             <p>???</p>
             } >
            <figcaption>{pokemon.name}</figcaption>
        </figure>
        }


export default PokemonCard;