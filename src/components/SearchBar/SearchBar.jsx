import { useState } from 'react';
import './SearchBar.css'

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('')

   const handleChange = (e) => {

      let valueInput = e.target.value

      setId(valueInput)
      
   }
   
   const handleSearch = () => {
      onSearch(id)
      setId('')
   }

   return (
      <div>
         <input type='text' value={id} onChange={handleChange} placeholder='Ingrese un ID' className='inputSearch'/>
         <button type='submit' onClick={handleSearch} className='buttonSearch'>Agregar</button>
      </div>
   )
}
