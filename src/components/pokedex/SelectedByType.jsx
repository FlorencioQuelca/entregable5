import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectedByType = ({setTypeSelected}) => {
    const [types, setTypes] = useState()
useEffect(() => {
     const URL='https://pokeapi.co/api/v2/type'
     axios.get(URL)
     .then(res=>{
       setTypes(res.data.results)
     })
     .catch(err=>console.log(err))
 
  }, [])
 const handleChange=(e)=>{
    setTypeSelected(e.target.value)
 }
  
  return (
    <select className='Select'  onChange={handleChange}> 
                 <option value="All Pokemons">All Pokemons</option>
                {
                  types?.map(type=>(
                    <option value={type.url} key={type.url}> {type.name}</option>
                  ))
                }
    </select>
  )
}

export default SelectedByType