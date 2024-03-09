import SectionTitle from '../../components/sectionTitle/sectionTitle'
import Cta from '../../components/cta/cta'
import './sponsors.scss'

export default function Sponsors() {
  const sponsors = [
    'google',
    'nodo',
    'eafit',
    'gorillalogic',
    'sonatype',
    'comfama',
    'intellias',
    'github',
    'dcaballero',
    'notion',
    'bdg',
    'nix',
  ]
  return (
    <section className="sponsors" id="sponsors">
      <div className="sponsors__container">
        <div className="sponsors__title-container">
          <SectionTitle
            text="Patrocinadores"
            direction="right"
            style="blue"
            assetName="badge-vector"
          />
        </div>
        <ul className="sponsors__list">
          {sponsors.map((element, index) => {
            const image = new URL(
              `../../assets/logos-sponsors/${element}.png`,
              import.meta.url
            ).href

            return (
              <li key={index}>
                <img src={image} alt={{ element } + 'logo'} />
              </li>
            )
          })}
        </ul>

        <div className="sponsors__content">
          <div className="sponsors__text">
            <p>
              Gana visibilidad para tu empresa y apoya a más mujeres a construir
              su carrera en tecnología.
            </p>
            <br />
            <p>
              Escríbenos a{' '}
              <a href="mailto:wtm@pionerasdev.co" className="sponsors__email">
                wtm@pionerasdev.co
              </a>
            </p>
          </div>
          <div className="sponsors__cta">
            <Cta text="Contáctanos" url="mailto:wtm@pionerasdev.co" />
          </div>
        </div>
      </div>
    </section>
  )
}
