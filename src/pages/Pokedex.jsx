import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../components/pokedex/PokemonCard'
import './styles/pokedex.css'
const Pokedex = () => {
 const userName=useSelector(state =>state.userName)
 const [pokemons, setPokemons] = useState()
 useEffect(() => {
   const url='https://pokeapi.co/api/v2/pokemon?limit=200&offset=0'
  // const url='https://pokeapi.co/api/v2/type/'
   axios.get(url).then(res=>setPokemons(res.data)).catch(e =>console.log(e))
 }, [])
  //console.log(pokemons)
  return (
    <article>
      <header className='pokedex__header'>
        <h2>Pokedex</h2>
        <p>Welcome <span>{userName}</span>, here you can find your favorite pokemon</p>
      </header>
      <main className='pokedex__main'>
           <div className='pokemons__list'>
           {
             pokemons?.results.map(pokemon =>(
               <PokemonCard  key={pokemon.url} url={pokemon.url} />
               )) 
              }
          </div>
     </main>
    </article>
  )
}

export default Pokedex