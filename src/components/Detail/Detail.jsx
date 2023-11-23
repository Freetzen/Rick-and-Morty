import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './Detail.css'

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
    <div className="detailContainer">
      {console.log(character)}
      <div className="cardDetail">
        <div>
          <img src={character.image} alt={character.id} className="imgDetail" />
        </div>

        <div>
          <h2 className="infoDetail">
            <span className="Detail">Nombre: </span>
            {character.name}
          </h2>

          <p className="infoDetail">
            <span className="Detail">Estado: </span> {character.status}
          </p>

          <p className="infoDetail">
            <span className="Detail">Especie: </span>
            {character.species}
          </p>

          <p className="infoDetail">
            <span className="Detail">Género: </span>
            {character.gender}
          </p>

          <p className="infoDetail">
            <span className="Detail">Creado: </span>
            {character.created}
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default Detail