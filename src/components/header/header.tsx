import './header.scss'
import headerImage from '../../assets/img/header-img.svg'
import WTMLogo from '../../assets/img/wtm-logo-black.png'

export default function Header() {
  return (
    <header className="header__container">
      <div className="header__text header__section">
        <h1 className="header__title">Impact the Future</h1>
        <h2 className="header__subtitle">Día internacional de la mujer 2024</h2>
        <p className="header__date">Abril 06, 2024</p>
        <p className="header__location">
          Auditorio fundadores, Universidad EAFIT
        </p>
        <div className="header__btn-container">
          <a
            href="https://sessionize.com/iwd-medellin-2024/"
            target="_blank"
            rel="noreferrer"
            className="header__btn"
          >
            Envía tu propuesta de charla
          </a>
        </div>
      </div>
      <div className="header__image header__section">
        <img src={headerImage} aria-hidden />
      </div>
      <div className="header__wtmlogo">
        <img src={WTMLogo} alt="Women Tech Makers Logo" />
      </div>
    </header>
  )
}
