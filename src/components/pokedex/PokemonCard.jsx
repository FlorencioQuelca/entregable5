import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './pokeCard.css'
import img from '../../assets/divider.png'
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
    <article className={`card-poke border-${pokemon?.types[0].type.name}`} onClick={handleClick}>
      <header className={`card-poke__header bg-${pokemon?.types[0].type.name}`}>
            <div className='card-poke__img' > 
              <img  src={pokemon?.sprites.other['official-artwork'].front_default} alt="img" />
            </div>
      </header>
      <section className='card-poke__body'>
            <h3 className={`card-poke__name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
           <ul className='card-poke__list'>
            {
                pokemon?.types.map(type =>(
                  <li className='card-poke__type' key={type.slot} >{type.type.name}</li>
                ))
            }
            </ul>
            <p className='card-poke__type-label'>Type</p>
      </section>
          <div className='linea_divider'>
             <img src={img} alt="line" />
          </div>
      
             <ul className='card-poke__stats-container'>
                {
                  pokemon?.stats.map(stat =>(
                    <li className='card-poke__stat' key={stat.stat.name}>
                     <span className='card-poke__stat-label'>
                     {stat.stat.name}
                      </span>
                      <span className={`card-poke__stat-number letter-${pokemon?.types[0].type.name}`}>
                      {stat.base_stat}
                        </span>
                      </li>
                  ))
                }
             </ul>
  
    </article>
  )
}

export default PokemonCard