import './index.css'
import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

const Footer = () => (
  <div className="footer-section">
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

export default Footer
