import './index.css'
import {Link, withRouter} from 'react-router-dom'
import {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import Cookies from 'js-cookie'

const Header = props => {
  const [menuOpen, setMenuOpen] = useState(false)
  const onClickLogoutBtn = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const {home, bookShelvesList} = props
  const activeTab = home ? 'active-tab' : ''
  const activeBookShelves = bookShelvesList ? 'active-tab' : ''

  return (
    <header className="responsiveNavbar">
      <nav className="navbar">
        <Link className="link" to="/">
          <img
            className="home-logo"
            alt="website logo"
            src="https://res.cloudinary.com/dy1lfg1dp/image/upload/v1678353759/Group_7731_s6q7kr.png"
          />
        </Link>
        <div className="nav-ul-items">
          <ul className="nav-links">
            <Link className={`link ${activeTab}`} to="/">
              <li className="list">Home</li>
            </Link>
            <Link className={`link ${activeBookShelves}`} to="/shelf">
              <li className="list">Bookshelves</li>
            </Link>
          </ul>
          <button
            className="logout-btn"
            type="button"
            onClick={onClickLogoutBtn}
          >
            Logout
          </button>
        </div>
        <div className="mobileNav">
          {menuOpen ? (
            <AiOutlineClose onClick={() => setMenuOpen(!menuOpen)} />
          ) : (
            <GiHamburgerMenu onClick={() => setMenuOpen(!menuOpen)} />
          )}
        </div>
      </nav>
      {menuOpen && (
        <div className="mobileNav">
          <ul className="nav-links">
            <Link className={`link ${activeTab}`} to="/">
              <li className="list">Home</li>
            </Link>
            <Link className={`link ${activeBookShelves}`} to="/shelf">
              <li className="list">Bookshelves</li>
            </Link>
          </ul>
          <button
            className="logout-btn"
            type="button"
            onClick={onClickLogoutBtn}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  )
}

export default withRouter(Header)
