import './navigation.scss'
import WTMLogo from '../../assets/img/wtm-logo.svg'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    return (event: React.MouseEvent) => {
      event.preventDefault()
      const section = document.querySelector(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src={WTMLogo} />
      </div>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/about" onClick={scrollToSection('#about')}>
            About
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/" onClick={scrollToSection('#speakers')}>
            Speakers
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/" onClick={scrollToSection('#sponsors')}>
            Sponsors
          </Link>
        </li>
        {/* <li className="navigation__item">
          <Link to="/" onClick={scrollToSection('#team')}>Equipo</Link>
        </li> */}
      </ul>
    </nav>
  )
}
