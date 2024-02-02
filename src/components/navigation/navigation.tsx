import './navigation.scss'
import WTMLogo from '../../assets/img/wtm-logo.svg'

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src={WTMLogo} />
      </div>
      <ul className="navigation__list">
        <li className="navigation__item">About</li>
        <li className="navigation__item">Speakers</li>
        <li className="navigation__item">Sponsors</li>
        <li className="navigation__item">Equipo</li>
      </ul>
    </nav>
  )
}
