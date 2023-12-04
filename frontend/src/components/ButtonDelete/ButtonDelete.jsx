import { useDispatch, useSelector } from 'react-redux'
import './ButtonDelete.css'
import { filterCards, orderCards } from '../../redux/actions';

const ButtonDelete = () => {

    const dispatch = useDispatch();

    const myFavorites = useSelector(state => state.myFavorites);
    console.log(myFavorites)

    const handleOrder = (e) => {
      dispatch(orderCards(e.target.value));
    };

    const handleFilter = (e) => {
      dispatch(filterCards(e.target.value));
    };

  return (
    <div className="divButton">

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