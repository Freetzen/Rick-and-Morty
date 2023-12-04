import "./Card.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {

  const dispatch = useDispatch()

  const [isFav, setIsFav] = useState(false)

  const deleteCard = () => {
    props.onClose(props.id);
  };
  
  const handleFavorite = () => {
    if(isFav){
      setIsFav(false)
      dispatch(removeFav(props.id))
    }else{
      setIsFav(true)
      dispatch(addFav(props)) //props, es el objeto entero de la carta. 
    }
  };

  const myFavorites = useSelector((state) => state.myFavorites)
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  
  
  return (
    <div className="cardPeque">
      <div className="card" key={props.id}>
        <Link to={`/detail/${props.id}`}>
          <img src={props.image} alt={props.id} className="imgRaM" />
        </Link>
        <h2 className="infoRaM">
          <span className="desc">Nombre: </span>
          {props.name.toUpperCase()}
        </h2>

        <p className="infoRaM">
          <span className="desc">Estado: </span> {props.status}
        </p>

        <p className="infoRaM">
          <span className="desc">Especie: </span>
          {props.species}
        </p>

        <p className="infoRaM">
          <span className="desc">Género: </span>
          {props.gender}
        </p>

        <p className="infoRaM">
          <span className="desc">Origen: </span>
          {props.origin}
        </p>

      {isFav ? (
      <button className="buttonLike" onClick={handleFavorite}>❤️</button>
      ) : (
      <button className="buttonLike" onClick={handleFavorite}>🤍</button>
      )}

        <button className="button-delete" onClick={deleteCard}>
          <span className="actual-text-delete">&nbsp;Delete&nbsp;</span>
          <span aria-hidden="true" className="hover-text-delete">
            &nbsp;Delete&nbsp;
          </span>
        </button>
      </div>
    </div>
  );
}
