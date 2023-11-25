import React, { useState, useEffect } from "react";
import { getPokemons } from "../../utils/api-fetch";
import Pokedex from "../../Components/Pokedex/Pokedex";

const PokemonsReducer = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await getPokemons();
        setPokemons(data.results);
      } catch (err) {
        console.error("Error fetching pokemons:", err);
      }
    };

    fetchPokemons();
  }, []);

  return <Pokedex pokemons={pokemons} />;
};

export default PokemonsReducer;
