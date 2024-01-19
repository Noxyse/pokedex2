import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClickableImage from './ClickableImage';

const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json');
                const jsonData = await response.json();
                console.log(jsonData);
                setPokemonData(jsonData.slice(0, 151));
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(pokemonData);
    return (
        <div>
            <h1>Pokedex</h1>
            <div className="pokemon-list">
                {pokemonData.map(pokemon => (
                    <Link to={`pokemon/${pokemon.id}`}>{pokemon.name.french}</Link>
                ))}
            </div>
        </div>
    );
};

export default Pokedex;
