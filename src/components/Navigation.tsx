import { useState } from 'react'
import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'
import './Navigation.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleMenuClick(): void {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  return (
    <>
      <button className='menu-btn' onClick={handleMenuClick}>
        <img src={isOpen ? close : hamburger} alt='Menu icon' />
      </button>
      <nav className='header-nav' style={{display: isOpen ? '' : 'none'}}>
        <ul className='header-nav-list'>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Careers</a></li>
          <li><a href='#'>Events</a></li>
          <li><a href='#'>Products</a></li>
          <li><a href='#'>Support</a></li>
        </ul>
      </nav>
    </>
  )
}