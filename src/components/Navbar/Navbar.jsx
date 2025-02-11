import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className='nav'>
      <div className="nav__div">
        <div className="nav__div-greeting">Welcome back, Admin</div>
        <div className="nav__div-options">
          <span className='search-icon'><FontAwesomeIcon icon={faSearch}/></span>
          <span className='search-icon-bell'><FontAwesomeIcon icon={ faBell }/></span>
          <div className="profile">
            <span className='profile-img'></span>
            <span className='profile-name'>adminuser</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar