import React from 'react'
import FormHome from '../components/home/FormHome'

const Home = () => {

  return (
    <article className='pokedex'>
       <h1 className='pokedex__title' > pokedex</h1>
       <h2 className='pokedex__subtitle' > hi trainer</h2>
       <p className='pokedex__title'> GIve me your to see the pokedez</p>
       <FormHome />
       

    </article>
  )
}

export default Home