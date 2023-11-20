import './NavBar.css'
import SearchBar from "../SearchBar/SearchBar"
import LogoRaM from '../../../public/images/Logo-RaM.png'
import { Link } from 'react-router-dom'

const NavBar = ({onSearch, logOut}) => {


  
  return (
    <div className='NavBar'>
        <img src={LogoRaM} alt='LogoRaM' className='logoNavBar'/>
        <Link to='/about'><button class="button-nav" data-text="Awesome">
          <span class="actual-text-nav">&nbsp;About&nbsp;</span>
          <span aria-hidden="true" class="hover-text-nav">
            &nbsp;About&nbsp;
          </span>
        </button></Link>
        <Link to='/home'><button class="button-nav" data-text="Awesome">
          <span class="actual-text-nav">&nbsp;Home&nbsp;</span>
          <span aria-hidden="true" class="hover-text-nav">
            &nbsp;Home&nbsp;
          </span>
        </button></Link>
        <SearchBar onSearch={onSearch} logOut={logOut}/>
    </div>
  )
}

//(characterID) => window.alert(characterID)

export default NavBar