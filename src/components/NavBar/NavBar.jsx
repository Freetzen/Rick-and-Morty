import './NavBar.css'
import SearchBar from "../SearchBar/SearchBar"
import LogoRaM from '../../../public/images/Logo-RaM.png'
import { Link } from 'react-router-dom'

const NavBar = ({onSearch}) => {
  return (
    <div className='NavBar'>
        <img src={LogoRaM} alt='LogoRaM' className='logoNavBar'/>
        <Link to='/about'><button>About</button></Link>
        <Link to='/home'><button>Home</button></Link>
        <SearchBar onSearch={onSearch}/>
    </div>
  )
}

//(characterID) => window.alert(characterID)

export default NavBar