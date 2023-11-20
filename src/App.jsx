import { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import axios from 'axios';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import { Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Form from './components/Form/Form.jsx';


function App() {
   
   const [characters, setCharacters] = useState([])

   const navigate = useNavigate() // Poder redirigir

   const location = useLocation() // Me devuelve el pathName, donde estoy parado.

   const [acces, setAcces] = useState(false)

   const EMAIL = 'federuizgei@gmail.com'
   const PASSWORD = 'Fede123'

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAcces(true)
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   const onSearch = (id) => {
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
   }

   return (

      <div className='App'>
            {
               location.pathname !== '/' && <NavBar onSearch={onSearch}/> //Si se cumple los primero, muestra el Nav
            }
            <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form/>}/>

            </Routes>
      </div>
   );

}

export default App;