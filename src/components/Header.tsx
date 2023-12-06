import logo from '../assets/logo.svg'
import Navigation from './Navigation'
import './Header.css'

export default function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt='Loopstudios logo' />
      <Navigation />
    </header>
  )
}