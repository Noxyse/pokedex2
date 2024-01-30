import React from 'react';
import { useParams } from "react-router-dom"

const PokemonDetail = () => {
    let { id } = useParams();

    return (
        <div>
            <p>Bonjour</p>
            {id}
        </div>
    );
};

export default PokemonDetail;

//boucle for pour obtenir les infos d'un pokémon spécifique
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// const result = pokemonLists.filter((pokemon) => pokemon.id == id);