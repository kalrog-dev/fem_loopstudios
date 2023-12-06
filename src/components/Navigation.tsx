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
      <nav style={{display: isOpen ? '' : 'none'}}>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </nav>
    </>
  )
}