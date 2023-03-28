
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
        <button onClick={handleClickNext}>Next</button>
        {props.pokemonIndex > 0 ? 
            <button onClick={handleClickBack}>Back</button> : <span></span>
        }
        </nav>
        )
    }
    
    export default NavBar;
