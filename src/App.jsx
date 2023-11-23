import { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import axios from 'axios';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';


function App() {
   
   const dispatch = useDispatch()
   
   const [characters, setCharacters] = useState([])
   
   const location = useLocation() // Me devuelve el pathName, donde estoy parado.
   
   const navigate = useNavigate() // Poder redirigir

   const [access, setAccess] = useState(false)

   const EMAIL = 'henry@pruebas.com'
   const PASSWORD = 'Rick123'

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true)
         navigate('/home')
      }
   }

   const logOut = () => {
      setAccess(false)
   }

   useEffect(() => {
      !access && navigate('/');
      //!access && navigate('/home');
   }, [access]);


   const onSearch = (id) => {

      const characterId = characters.filter(char => 
         char.id === parseInt(id)
         )
      if(characterId.length){
         return 
      }
      axios(`https://rickandmortyapi.com/api/character/${id}?`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((characters) => [...characters, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
      navigate('/home')
   }
   

   const onClose = (id) => {
      setCharacters(characters.filter((character) => {
         return character.id !== parseInt(id)
      }))
      dispatch(removeFav(id))
   }

   return (

      <div className='App'>
            {
               location.pathname !== '/' && <NavBar onSearch={onSearch} logOut={logOut} /> //Si se cumple los primero, muestra el Nav
            }
            <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} setCharacters={setCharacters}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='/favorites' element={<Favorites onClose={onClose} />}/>
            <Route path='/' element={<Form login={login} access={access} />}/>
            </Routes>
      </div>
   );

}

export default App