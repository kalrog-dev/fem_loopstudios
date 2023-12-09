import { useState, MouseEvent } from 'react'
import useMediaQuery from "../hooks/useMediaQuery"
import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'
import './Navigation.css'

export default function Navigation() {
  const isLargeScreen: boolean = useMediaQuery('(min-width: 768px)')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // Close mobile navigation if the viewport width is large and the navigation is open.
  if (isLargeScreen && isOpen) {
    setIsOpen(false)
  }

  // Open or close mobile navigation in response to the menu button click.
  function handleMenuClick(): void {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  // Use event delegation to listen for mobile navigation link clicks.
  function handleNavClick(event: MouseEvent<HTMLElement>): void {
    const target = event.target as HTMLElement;

    // If the mobile navigation is open and a link has been clicked, close the navigation.
    if (isOpen && target.tagName === 'A') {
      setIsOpen(false);
    }
  }

  return (
    <>
      <button className='menu-btn' onClick={handleMenuClick}>
        <img src={isOpen ? close : hamburger} alt='Menu icon' />
      </button>
      <nav className={isOpen ? 'nav-open header-nav' : 'header-nav'} onClick={(event) => handleNavClick(event)}>
        <ul className='header-nav-list'>
          <li><a href='#about'>About</a></li>
          <li><a href='#footer'>Careers</a></li>
          <li><a href='#creations'>Events</a></li>
          <li><a href='#creations'>Products</a></li>
          <li><a href='#footer'>Support</a></li>
        </ul>
      </nav>
    </>
  )
}