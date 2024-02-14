import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./PokemonDetail.css"

const PokemonDetail = () => {
    const [pokemonDetails, setPokemonDetails] = useState({});
    let { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json');
                const jsonData = await response.json();
                const result = jsonData.filter((pokemon) => pokemon.id === parseInt(id));
                setPokemonDetails(result[0]);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        };

        fetchData();
    }, [id]);
    return (
        <div>
            <p>Bonjour</p>
            {pokemonDetails.id && ( /* lors du premier rendu du component, il n'a pas le temps d'aller chercher les données avec le fetch
                                        donc on va faire un affichage conditionnel avec && (https://react.dev/learn/conditional-rendering#logical-and-operator-)
                                        Pour faire simple : si pokemonDetails.id existe, alors affiche ce que je te donne entre parenthèse */
                <div>
                    <h1>{pokemonDetails.id}</h1>
                    <img src={pokemonDetails.image.hires} alt={pokemonDetails.name.french} />
                    <p>Nom : {pokemonDetails.name.french}</p>
                    <ul>Type :
                        {pokemonDetails.type.map((type, index) => <li key={index} >{type}</li>)} {/* les types sont un array, donc on map dessus sans oublier la key */}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PokemonDetail;

//boucle for pour obtenir les infos d'un pokémon spécifique
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// const result = pokemonLists.filter((pokemon) => pokemon.id == id);