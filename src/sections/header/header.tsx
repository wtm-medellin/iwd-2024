import './header.scss'
import wtmLogo from '../../assets/wtm-logo-bw.svg'
import Cta from '../../components/cta/cta'

export default function Header() {
  return (
    <section className="header">
      <img className="header__logo" src={wtmLogo} />
      <div className="header__text-container">
        <h1 className="header__title">
          #ImpactTheFuture
          <br /> Día Internacional de la Mujer
        </h1>
        <h2 className="header__subtitle">Únete.</h2>
        <p className="header__details">
          Abril 13, 2024
          <br /> Medellín, Colombia
        </p>
        <Cta
          text="Descarga aquí tu foto de LinkedIn"
          url="https://drive.google.com/drive/folders/1KozYKjNKr19VN42dF2RrxoxvbKPlZXjh"
        />
      </div>
    </section>
  )
}
