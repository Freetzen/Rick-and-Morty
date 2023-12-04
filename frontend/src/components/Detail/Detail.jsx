import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import './Detail.css'

const Detail = () => {

    const [character, setCharacter] = useState({})

    const {id} = useParams() // {id: 23}

    useEffect(() => {
      const effect = async () => {
        try {
          const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
          const data = response.data;
          console.log(data)
          if (data.name) {
            setCharacter(data);
          }
        } catch (error) {
          window.alert("No hay personajes con ese ID");
        }
      }
      
      effect()
      return setCharacter({});
      
    }, [id]);


  return (
    <div className="detailContainer">
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

          <p className="infoDetail">
            <span className="Detail">ID: </span>
            {character.id}
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default Detail