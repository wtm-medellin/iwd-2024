import SectionTitle from '../../components/sectionTitle/sectionTitle'
import Cta from '../../components/cta/cta'
import sponsors from '../../assets/data/sponsors.tsx'
import './sponsors.scss'

export default function Sponsors() {
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
          {sponsors.map(
            (
              element: { name: string; logo: string; url: string },
              index: number
            ) => {
              const image = new URL(
                `../../assets/logos-sponsors/${element.logo}.png`,
                import.meta.url
              ).href

              return (
                <li key={index}>
                  <a href={element.url} target="blank">
                    <img src={image} alt={`${element.name} logo`} />
                  </a>
                </li>
              )
            }
          )}
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
