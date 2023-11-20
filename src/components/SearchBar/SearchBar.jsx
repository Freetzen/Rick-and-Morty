import { useState } from 'react';
import './SearchBar.css'

export default function SearchBar({onSearch, logOut}) {

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
      

       <input
         type="text"
         name="text"
         value={id}
         onChange={handleChange}
         class="input"
         placeholder="Ingrese un ID"
       ></input>
       <button class="button-search" data-text="Awesome" type='submit' onClick={handleSearch}>
          <span class="actual-text-search">&nbsp;Agregar&nbsp;</span>
          <span aria-hidden="true" class="hover-text-search">
            &nbsp;Agregar&nbsp;
          </span>
        </button>
       <button class="button-search" data-text="Awesome" type='submit' onClick={logOut}>
          <span class="actual-text-search">&nbsp;Logout&nbsp;</span>
          <span aria-hidden="true" class="hover-text-search">
            &nbsp;Logout&nbsp;
          </span>
        </button>
     </div>
   );
}
