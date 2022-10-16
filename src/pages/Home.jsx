import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'
import pokedex from '../assets/pokedex.png'
const Home = () => {

  return (
    <article className='pokedex__main'>
   
         <div className='pokedex__img'>
            <img  src={pokedex} alt="pokedex" />
         </div>
       <h2 className='pokedex__title' > ¡Hi trainer!</h2>
       <p className='pokedex__subtitle'> Give me, your to see the pokedex</p>
       <FormHome />
    
    </article>
  )
}

export default Home