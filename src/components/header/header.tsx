import './header.scss'
import logoHero from '../../assets/Hero/logoHero.png'

export default function Header() {
  return (
    <section className="header__container">
      <div className="mi-seccion"></div>
      <div className="container-img">
        <img className="logo" src={logoHero} />
        <h1>#ImpactTheFuture Día Internacional de la Mujer</h1>
        <h2>Postula tu charla.</h2>
        <p>Abril 13, 2024 Medellín, Colombia</p>
      </div>

      {/* <div className="header__text header__section">
        <h1 className="header__title">Impact the Future</h1>
        <h2 className="header__subtitle">Día internacional de la mujer 2024</h2>
        <p className="header__date">Abril 13, 2024</p>
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
        
      </div> */}
    </section>
  )
}
