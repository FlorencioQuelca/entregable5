import React from 'react'
import { Link } from 'react-router-dom'
import './pokemonError.css'
const Pokemon404 = () => {
  return (
       <section  className='error'>
           <h1 className='error__name'>Pokemon Not Found  </h1>
           <Link  className='error_link' to ='/pokedex'> Return to Page pokedex</Link>
       </section>
  )
}

export default Pokemon404