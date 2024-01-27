import { Buscar } from './Icons';
import React from 'react';
import "../../Styles/buscar.css";

function Buscador({ busqueda, setBusqueda, buscarPokemon }) {
  
  return (
    <>
      <h3 className='titulo'>More than 800 pokemon, choose your favorite</h3>
      <form className='container-buscar' onSubmit={buscarPokemon}>
        <input type="text" placeholder='' className='input-buscar'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)} />
        <button className='btn-buscar' type='submit'>
          <Buscar />
          Search pokemons
        </button>
      </form>
    </>
  )
}

export default Buscador;