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
         className="input"
         placeholder="Ingrese un ID"
       ></input>
       <button className="button-search" data-text="Awesome" type='submit' onClick={handleSearch}>
          <span className="actual-text-search">&nbsp;Agregar&nbsp;</span>
          <span aria-hidden="true" className="hover-text-search">
            &nbsp;Agregar&nbsp;
          </span>
        </button>
       <button className="button-search" data-text="Awesome" type='submit' onClick={logOut}>
          <span className="actual-text-search">&nbsp;Logout&nbsp;</span>
          <span aria-hidden="true" className="hover-text-search">
            &nbsp;Logout&nbsp;
          </span>
        </button>
     </div>
   );
}
