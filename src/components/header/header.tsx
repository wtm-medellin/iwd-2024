import './header.scss'
import logoHero from '../../assets/Hero/logoHero.png'

export default function Header() {
  return (
    <section className="header__container">
      <div className="header_container-img">
        <div className="header_section">
          <img className="header_logo" src={logoHero} />
          <h1>#ImpactTheFuture</h1>
          <h1>Día Internacional</h1>
          <h1>de la Mujer</h1>
          <h2>Postula tu charla.</h2>
          <p>Abril 13, 2024</p>
          <p> Medellín, Colombia</p>
        </div>
      </div>
    </section>
  )
}
