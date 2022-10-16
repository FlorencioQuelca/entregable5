import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './pokeCard.css'


const PokemonCard = ({url}) => {
    const [pokemon, setPokemon] = useState()
    const navigate = useNavigate()
    useEffect(() => {
         axios.get(url)
         .then(res=>setPokemon(res.data))
         .catch(e=>console.log(e))
    }, [])
    const handleClick =()=>{
          navigate(`/pokedex/${pokemon.id}`);
    }
  return (
    <article className='pokeCard' onClick={handleClick}>
      <header>

            <div>
              <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="img" />
            </div>
      </header>
      <section>
            <h3>{pokemon?.name}</h3>
           <ul className='pokeCard__list'>
            {
                pokemon?.types.map(type =>(
                  <li key={type.slot} >{type.type.name}</li>
                ))
            }
            </ul>
            <p className='card_type'>type</p>
      </section>
      <section>
             <ul>
                {
                  pokemon?.stats.map(stat =>(
                    <li  key={stat.stat.name}>
                     <span>
                     {stat.stat.name}
                      </span>
                      <span>
                      {stat.base_stat}
                        </span>
                      </li>
                  ))
                }
             </ul>
      </section>
    </article>
  )
}

export default PokemonCard