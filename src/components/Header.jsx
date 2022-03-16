import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectIdentity, selectIsConnected } from '../utils/selectors'
import * as userActions from '../features/user'

import logo from '../assets/argentBankLogo.png'

/**
 * header component
 * @component
 */
function Header() {
  const isConnected = useSelector(selectIsConnected)
  const firstName = useSelector(selectIdentity('firstName'))

  const dispatch = useDispatch()

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

        {isConnected ? (
          <div>
            <Link to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link>
            <Link
              to="/"
              className="main-nav-item"
              onClick={() => dispatch(userActions.signout())}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
