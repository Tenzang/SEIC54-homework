import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonSearch = () => {
    // The useStates
    const [name, setName] = useState(''); // Initial State
    const [Find, setFind] = useState('pikachu'); // Initial State
    const [Img, setImg] = useState(''); // Initial State
    const [Type, setType] = useState(''); // Initial State

    // This component will be done after render, performed after the DOM updates
    useEffect(() => {
        async function getData() {
            // Return the resolved value from a promise
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
            console.log(res);
            // Sets the Image and type based on the data that is passed into the search bar
            setImg(res.data.sprites.front_default);
            setType(res.data.types[0].type.name);
        }
        getData();
    }, [Find]);

    const Typename = (event) => {
        // Sets the type for the pokemon searched
        setName(event.target.value);
    }

    const Search = () => {
        // Searches for the pokemon
        if (name !== '') setFind(name);
        setName('');
    }

    return (
        <div>
            <img src={ `${ Img }` } alt ="" />
            <div className='name'>{ Find.toUpperCase() }</div>
            <div className='type'>{ Type }</div>
            <input type='text' onChange={ Typename } value={ name } />
            <button onClick={ Search }>Search</button>
        </div>
    );
}

export default PokemonSearch;