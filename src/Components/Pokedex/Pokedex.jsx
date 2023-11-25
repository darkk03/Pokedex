import React from "react";

const Pokedex = (props) => {
  console.log(props);
  const { pokemons } = props;
  return (
    <div>
      <div className="pokedex-grid">
        {pokemons && pokemons.map((pokemon, idx) => {
            return (
                <div key={pokemon.name}>
                    #{idx + 1}: {pokemon.name}
                </div>
            );
        })}
      </div>
    </div>
  );
};

export default Pokedex;

