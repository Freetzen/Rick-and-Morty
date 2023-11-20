import './Card.css'
import { Link } from 'react-router-dom'

export default function Card(props) {

   const deleteCard = () => {
      props.onClose(props.id)
   }

   return (
      <div className='cardPeque'>
         <img src={props.image} alt='' className='imgRaM'/> 
         <Link to={`/detail/${props.id}`}><h2>{props.name}</h2></Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <button onClick={deleteCard}>X</button>
      </div>
   );

}