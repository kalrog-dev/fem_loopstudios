import { useState } from 'react'
import useMediaQuery from "../hooks/useMediaQuery"
import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'
import './Navigation.css'

export default function Navigation() {
  const isLargeScreen = useMediaQuery('(min-width: 768px)')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // Close mobile navigation if the viewport width is large
  if (isLargeScreen && isOpen) {
    setIsOpen(false)
  }

  function handleMenuClick(): void {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  return (
    <>
      <button className='menu-btn' onClick={handleMenuClick}>
        <img src={isOpen ? close : hamburger} alt='Menu icon' />
      </button>
      <nav className={isOpen ? 'nav-open header-nav' : 'header-nav'}>
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