import './navigation.scss'
import WTMLogo from '../../assets/img/WTMLogo.svg'
import MenuLogo from '../../assets/img/menu.svg'
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

  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src={WTMLogo} alt="WTM Logo" />
      </div>
      <div
        className={`navigation__toggle ${isOpen ? "is-active" : ""}`}
        onClick={toggleMenu}
      >
        <img className="hamburger-icon" src={MenuLogo} alt="Menu icon" />
      </div>

      <ul className={`navigation__list ${isOpen ? "is-open" : ""}`}>
        <li className="navigation__item">
          <Link to="/about" onClick={scrollToSection("#about")}>
            About
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/" onClick={scrollToSection("#speakers")}>
            Speakers
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/" onClick={scrollToSection("#sponsors")}>
            Sponsors
          </Link>
        </li>
      </ul>
    </nav>
  )
}
