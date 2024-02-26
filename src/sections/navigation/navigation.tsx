import './navigation.scss'
import WTMLogo from '../../assets/old/img/WTMLogo.svg'
import MenuLogo from '../../assets/old/img/menu.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection =
    (sectionId: string) => (event: { preventDefault: () => void }) => {
      event.preventDefault()
      const section = document.querySelector(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    {
      text: 'Registro',
      url: 'https://gdg.community.dev/events/details/google-gdg-medellin-presents-international-womens-day-2024/',
    },
    {
      text: 'Sobre el evento',
      url: '/',
      id: '#about',
    },
    {
      text: 'Speakers',
      url: '/',
      id: '#speakers',
    },
    {
      text: 'Comunidades',
      url: '/',
      id: '#communities',
    },
    {
      text: 'Patrocinadores',
      url: '/',
      id: '#sponsors',
    },
  ]

  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src={WTMLogo} alt="WTM Logo" />
      </div>
      <div
        className={`navigation__toggle ${isOpen ? 'is-active' : ''}`}
        onClick={toggleMenu}
      >
        <img className="hamburger-icon" src={MenuLogo} alt="Menu icon" />
      </div>

      <ul className={`navigation__list ${isOpen ? 'is-open' : ''}`}>
        {navItems.map((element) => {
          return (
            <li className="navigation__item">
              <Link
                to={element.url}
                onClick={element.id ? scrollToSection(element.id) : undefined}
              >
                {element.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
