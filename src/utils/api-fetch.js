export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("searchPokemon data:", data);
    return data;
  } catch (err) {
    console.error("searchPokemon error:", err);
  }
};

export const getPokemons = async () => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("getPokemons data:", data);
    return data;
  } catch (err) {
    console.error("getPokemons error:", err);
  }
};

// export const getPokemons = async (limit = 10, offset = 0) => {
//   try {
//     let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
