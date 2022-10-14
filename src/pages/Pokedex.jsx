import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from '../components/pokedex/PokemonCard'

const Pokedex = () => {
 const userName=useSelector(state =>state.userName)
 const [pokemons, setPokemons] = useState()
 useEffect(() => {
   const url='https://pokeapi.co/api/v2/pokemon/'
   axios.get(url).then(res=>setPokemons(res.data)).catch(e =>console.log(e))
 }, [])
  console.log(pokemons)
  return (
    <article className='pokedex__card'>
        <h2>Pokedex</h2>
        <p>Welcome <span>{userName}</span>, here you can find your favorite pokemon</p>
    </article>
  )
}

export default Pokedex