import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <div>
        <Link to="/" className="link-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
      </div>
      <ul className="header-category-items">
        <Link to="/" className="link-item">
          <li className="category-item home-item">Home</li>
        </Link>
        <Link to="/" className="nav-link-sm">
          <AiFillHome className="small-header-icons" />
        </Link>
        <li>
          {' '}
          <Link to="/jobs" className="link-item">
            <li className="category-item">Jobs</li>
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="nav-link-sm">
            <BsFillBriefcaseFill className="small-header-icons" />
          </Link>
        </li>
        <li className="logout-btn-list-item-small">
          <button
            type="button"
            className="logout-button-sm"
            onClick={onClickLogout}
          >
            <FiLogOut className="logout-icon-sm" />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
