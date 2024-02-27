import './navigation.scss'
import WTMLogo from '../../assets/old/img/WTMLogo.svg'
import MenuLogo from '../../assets/old/img/menu.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  function scrollToSection(elementId: string) {
    setTimeout(() => {
      const section = document.querySelector(elementId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 0)
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
    {
      text: 'Equipo',
      url: '/equipo',
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
        {navItems.map((element, index) => {
          return (
            <li className="navigation__item" key={index}>
              <Link
                to={element.url}
                onClick={
                  element.id ? () => scrollToSection(element.id) : undefined
                }
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
