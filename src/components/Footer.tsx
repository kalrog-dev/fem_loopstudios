import logo from '../assets/logo.svg'
import socialIcons from '../social-icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <img className='footer-logo' src={logo} alt='Loopstudios logo' />
      <nav className='footer-nav'>
        <ul className='footer-nav-list'>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Careers</a></li>
          <li><a href='#'>Events</a></li>
          <li><a href='#'>Products</a></li>
          <li><a href='#'>Support</a></li>
        </ul>
      </nav>
      <ul className='footer-socials-list'>
        {socialIcons.map((icon, index) => {
          return (
            <li key={index}>
              <a href="#">
                <img src={icon.src} alt={icon.desc} />
              </a>
            </li>
          )
        })}
      </ul>
      <p className="footer-copy">&#169; 2021 Loopstudios. All rights reserved.</p>
    </footer>
  )
}