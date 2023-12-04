import { useDispatch, useSelector } from 'react-redux'
import './ButtonDelete.css'
import { removeAllFav } from '../../redux/actions'
import { filterCards, orderCards } from '../../redux/actions';

const ButtonDelete = () => {

    const dispatch = useDispatch();

    const myFavorites = useSelector((state) => state.myFavorites.value);
    console.log(myFavorites)

    const handleClean = () => {
      dispatch(removeAllFav());
    };

    const handleOrder = (e) => {
      dispatch(orderCards(e.target.value));
    };

    const handleFilter = (e) => {
      dispatch(filterCards(e.target.value));
    };

  return (
    <div className="divButton">
        <button className="button-nav" data-text="Awesome" onClick={handleClean}>
          <span className="actual-text-nav">&nbsp;UnFav&nbsp;</span>
          <span className="hover-text-nav">
            &nbsp;UnFav&nbsp;
          </span>
        </button>

        <div>
            <select name='order' onChange={handleOrder} className='selectFilter'>
               <option value='A'>Ascendente</option>
               <option value='D'>Descendente</option>
            </select>
            <select name='filter' onChange={handleFilter} className='selectFilter'> 
               <option value='All'>All</option>
               <option value='Male'>Male</option>
               <option value='Female'>Female</option>
               <option value='Genderless'>Genderless</option>
               <option value='unknown'>Unknown</option>
            </select>
         </div>
    </div>
  )
}

export default ButtonDelete