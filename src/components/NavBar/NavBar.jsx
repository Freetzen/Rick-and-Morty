import './NavBar.css'
import SearchBar from "../SearchBar/SearchBar"
import LogoRaM from '../../../public/images/Logo-RaM.png'
import { Link } from 'react-router-dom'

const NavBar = ({onSearch, logOut}) => {

  const random = () => {

    var min = 1;
    var max = 826;

    let x = Math.floor(Math.random() * (max - min + 1) + min);

    onSearch(x)
  };
  
  return (
    <div className='NavBar'>
        <img src={LogoRaM} alt='LogoRaM' className='logoNavBar'/>
        <Link to='/about'><button className="button-nav" data-text="Awesome">
          <span className="actual-text-nav">&nbsp;About&nbsp;</span>
          <span className="hover-text-nav">
            &nbsp;About&nbsp;
          </span>
        </button></Link>
        <Link to='/favorites'><button className="button-nav" data-text="Awesome">
          <span className="actual-text-nav">&nbsp;Fav&nbsp;</span>
          <span className="hover-text-nav">
            &nbsp;Fav&nbsp;
          </span>
        </button></Link>
        <Link to='/home'><button className="button-nav" data-text="Awesome">
          <span className="actual-text-nav">&nbsp;Home&nbsp;</span>
          <span className="hover-text-nav">
            &nbsp;Home&nbsp;
          </span>
        </button></Link>
        <button className="button-nav" data-text="Awesome" onClick={random}>
          <span className="actual-text-nav">&nbsp;Random&nbsp;</span>
          <span className="hover-text-nav">
            &nbsp;Random&nbsp;
          </span>
        </button>
        <SearchBar onSearch={onSearch} logOut={logOut}/>
    </div>
  )
}

//(characterID) => window.alert(characterID)

export default NavBar