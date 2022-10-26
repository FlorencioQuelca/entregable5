import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import InputSearch from '../components/pokedex/InputSearch'
import PokemonCard from '../components/pokedex/PokemonCard'
import SelectedByType from '../components/pokedex/SelectedByType'
import Pagination from './Pagination'
import './styles/pokedex.css'
const Pokedex = () => {
 const userName=useSelector(state =>state.userName)
 const [pokemons, setPokemons] = useState()
const [typeSelected, setTypeSelected] = useState('All Pokemons')
 useEffect(() => {
  if(typeSelected!=='All Pokemons'){
    
    axios.get(typeSelected).then(res=>{
      console.log(res.data)
      const result= res.data.pokemon.map(e=>e.pokemon)
      setPokemons(result)
    }).catch(e=>console.log(e))
  }else{

    const url='https://pokeapi.co/api/v2/pokemon?limit=200&offset=0'
   // const url='https://pokeapi.co/api/v2/type/'
    axios.get(url).then(res=>setPokemons(res.data.results)).catch(e =>console.log(e))
  }

 }, [typeSelected])
 

  //paginacion
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(8)
  const initialPoke=(page-1)*pokePerPage
  const finalPoke=page*pokePerPage
  return (
    <article>
      <header className='pokedex__header'>
        <h2>Pokedex</h2>
        <p>Welcome <span>{userName}</span>, here you can find your favorite pokemon</p>
      </header>
      <aside>
             <InputSearch/>
             <SelectedByType
                 setTypeSelected={setTypeSelected}
               />
           <Pagination  
           page={page}
           pagesLength={pokemons &&  Math.ceil(pokemons.length/pokePerPage)}
           setPage={setPage}
           />
      </aside>
      <main className='pokedex__main'>
           <div className='pokemons__list'>
           {
             pokemons?.slice(initialPoke,finalPoke).map(pokemon =>(
               <PokemonCard  key={pokemon.url} url={pokemon.url} />
               )) 
              }
          </div>
     </main>
    </article>
  )
}

export default Pokedex