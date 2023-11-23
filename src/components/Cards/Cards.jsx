import './Cards.css'
import Card from '../Card/Card';

export default function Cards({characters, onClose, setCharacters}) {

   const deleteAllChar = () => {
      setCharacters([])
   }

   return <div >
      <div className="divButton">
         <button className="button-nav" data-text="Awesome" onClick={deleteAllChar}>
          <span className="actual-text-nav">&nbsp;Clear&nbsp;</span>
          <span className="hover-text-nav">
            &nbsp;Clear&nbsp;
          </span>
        </button>
        </div>

      <div className='cardP'>
      
      {
         characters.map((character, index) => {
            return <Card
            key = {index}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
         />
         })
      }
   </div>
   </div>
}
