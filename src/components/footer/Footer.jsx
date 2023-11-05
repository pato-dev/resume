import { Link } from 'react-router-dom';
import Logo from '../img/my_pic.jpg';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='container footer__container'>
        <article>
          <Link to="/" className="logo footer__logo" >
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>Committed to making your Business get to wider Customers...</p>
        </article>
        <div className='footer__socials-cont'>
          <article>
            <h4>Permalinks</h4>
            <Link to="/">Home</Link>
            <Link to="portfolio">Portfolio</Link>
            <Link to="*">About</Link>
          </article>

          <article>
            <h4>Get In Touch</h4>
            <Link to="/contact">Contact Us</Link>
          </article>
          <div className="footer__socials">
            <h4>Socials</h4>
            <div className="social">
              <a href="https://www.linkedin.com/in/udeh-patrick-onyinyechukwu-489202125/" target="_blank" rel='noreferrer noopener'><FaLinkedin /></a>
            </div>
            <div className="social">
              <a href="https://instagram.com/upatrick59/" target="_blank" rel='noreferrer noopener'><AiFillInstagram /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <small>Created by Patrick Udeh &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  )
}

export default Footer