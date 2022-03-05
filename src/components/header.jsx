import { Link } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'

//TODO replace link to user/:id by true id
//TODO onclick on signout
//TODO adapt nav content for each page specificity
function Header() {
  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link to="user/:id" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Tony
          </Link>
          <Link to="/" className="main-nav-item">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
