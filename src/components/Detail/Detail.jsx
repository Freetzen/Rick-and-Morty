import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Card from "../Card/Card"

const Detail = () => {

    const [character, setCharacter] = useState({})

    const {id} = useParams() // {id: 23}

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}?`).then(
           ({ data }) => {
              if (data.name) {
               console.log(data)
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  )
}

export default Detail