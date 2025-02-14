import './Sidebar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faTh, faPlus, faTags } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  return (
    <aside className='aside'>
      <div className="logo">
        <span ><FontAwesomeIcon className='logo-icon' icon={faAt}/></span>
        <span className='logo-name'>Your company</span>
      </div>
      <ul className='navbar-side'>
        <li>
          <Link className='navbar-link' to="/products"><FontAwesomeIcon className='icons' icon={faTh}/>All Products</Link>
        </li>
        <li>
          <Link className='navbar-link' to="/addproduct"><FontAwesomeIcon className='icons' icon={faPlus}/>Add product</Link>
        </li>
        <li>
          <Link className='navbar-link' to="/categories"><FontAwesomeIcon className='icons' icon={faTags}/>Categories</Link>
        </li>
        <li>
          <Link className='navbar-link' to="/about">About</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar