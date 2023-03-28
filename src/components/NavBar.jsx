
function NavBar(props) {
    console.log(props)
    const handleClickNext = () => {
        props.setCount(props.pokemonIndex + 1)
    };
    
    const handleClickBack = () => {
        props.setCount(props.pokemonIndex - 1)
    }
    
    return (
        <nav>
        {
            props.pokemonIndex < props.pokemonList.length - 1 && <button onClick={handleClickNext} >Suivant</button>
        }
        {
            props.pokemonIndex > 0 && <button onClick={handleClickBack} >Précedent</button>
        }
        </nav>
        )
    }
    
    export default NavBar;