import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/pokemonId.css'
import ball from '../assets/ball.png'
import line from '../assets/line.png'
const PokedexById = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState()
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(e => console.log(e))
  }, [])
  console.log(pokemon);
  return (
    <article className='detail'>
     <div className='container__principal'>
      <div className='detail__section1'>
                <div className='section1__rect'>
                        <div className='section1__img'>
                          <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                        </div>

                </div>
        <div className="container-section1">
          <p className='container__name'>#{pokemon?.id}</p>
          <div className='section1__name'>
                  <div className='section1__line'>
                    <img src={line} alt="line" />
                  </div>
               <h2 >{pokemon?.name.toUpperCase()}</h2>
                  <div className='section1__line' >
                    <img src={line} alt="line" />
                  </div>
          </div>
          <div className='section1__detail'>
                <div className='section1__characterist'>
                  <span>Height</span>
                  <span>{pokemon?.height}</span>
                </div>
                <div className='section1__characterist'>
                  <span>Weight</span>
                  <span>{pokemon?.weight}</span>
                </div>
          </div>
          <div className='section1__ta'>
                  <div className="section1__types">
                    <span>TYPE</span>
                    <div className='ta__types'>
                    {
                      pokemon?.types.map(type => (
                              <span key={type.slot}> {type.type.name}</span>
                      ))
                    }
                    </div>
                  </div>
                  <div className="section1__hability">
                        <span>ABILITIES</span>
                        <div className='ta__hability'>
                        {
                          pokemon?.abilities.map(abilitie => (
                              <span key={abilitie.slot}> {abilitie.ability.name}</span>
                          ))
                        }
                        </div>
                </div>

          </div>
          <div className="section1_stat-container">
              <div className="section__stat">
                  <h3 className='section1__title'>Stat</h3>
                  <div className='detail__lineandball'>
                      <div className='detail__line1'>
                        <img src={line} alt="line" />
                      </div>
                      <div className='detail__ball1'>
                        <img src={ball} alt="ball" />
                      </div>
                  </div>
              </div>
            <div className='detail__stat'>
              {
                pokemon?.stats.map(stat => (
                  <div key={stat.stat.name} className='stat__container'>
                    <div className='stat__text'>
                      <span>{stat.stat.name}:</span>
                      <span>{stat.base_stat}/150</span>
                    </div>
                    <div className='stat__bar'>

                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      
      <div className='detail__section2'>
            <div className="detail__seccion">
              <h3 className='detail__title'>Movements</h3>
                      <div className='detail__imglineball'>
                                <div className='detail__line'>
                                  <img src={line} alt="line" />
                                </div>
                                <div className='detail__ball'>
                                  <img src={ball} alt="ball" />
                                </div>
                      </div>
            </div>
        <div className='detail__movements'>
          {
            pokemon?.moves.map(move => (
              <span key={move.move.name} className='detail__span'>
                {move.move.name}
              </span>
            ))
          }
        </div>

      </div>
    </div>
    </article>
  )
}

export default PokedexById