import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

const PokemonDetail = () => {
    const [pokemonDetails, setPokemonDetails] = useState({});
    let { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json');
                const jsonData = await response.json();
                const result = jsonData.filter((pokemon) => pokemon.id == id);
                setPokemonDetails(result[0]);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <p>Bonjour</p>
            {Object.entries(pokemonDetails.name).map((name) => {
                <p>Coucou</p>
            })}
        </div>
    );
};

export default PokemonDetail;

//boucle for pour obtenir les infos d'un pokémon spécifique
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// const result = pokemonLists.filter((pokemon) => pokemon.id == id);