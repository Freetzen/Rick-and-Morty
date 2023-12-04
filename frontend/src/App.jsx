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

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   const logOut = () => {
      setAccess(false)
   }

   useEffect(() => {
      !access && navigate('/');
      //!access && navigate('/home');
   }, [access]);


   const onSearch = async (id) => {
      try {
        const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        const data = response.data;
  
        if (data.name) {
          if (!characters.some((character) => character.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data])
          } else {
            alert('Este personaje ya está en la lista.')
          }
        } 
        navigate('/home')
      } catch (error) {
        alert("No se encontró un personaje con ese ID")
      }

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