import './index.css'
import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import BookshelvesContext from '../../context/BookshelvesContext'

const Footer = () => (
  <BookshelvesContext.Consumer>
    {value => {
      const {themeMode} = value

      return (
        <div className={`footer-section ${themeMode && 'darkBg'}`}>
          <div className="images-container">
            <div className="row">
              <FaGoogle />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
            <p className="footer-title">Contact us</p>
          </div>
        </div>
      )
    }}
  </BookshelvesContext.Consumer>
)

export default Footer
