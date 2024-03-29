import SectionTitle from '../../components/sectionTitle/sectionTitle'
import Cta from '../../components/cta/cta'
import supporters from '../../assets/data/supporters.tsx'
import './supporters.scss'

export default function Supporters() {
  return (
    <section className="supporters" id="supporters">
      <div className="supporters__container">
        <div className="supporters__title-container">
          <SectionTitle
            text="Patrocinadores"
            direction="right"
            style="blue"
            assetName="badge-vector"
          />
        </div>
        <ul className="supporters__list">
          {supporters.map(
            (
              element: { name: string; logo: string; url: string },
              index: number
            ) => {
              const image = new URL(
                `../../assets/logos-supporters/${element.logo}.png`,
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

        <div className="supporters__content">
          <div className="supporters__text">
            <p>
              Gana visibilidad para tu empresa y apoya a más mujeres a construir
              su carrera en tecnología.
            </p>
            <br />
            <p>
              Escríbenos a{' '}
              <a href="mailto:wtm@pionerasdev.co" className="supporters__email">
                wtm@pionerasdev.co
              </a>
            </p>
          </div>
          <div className="supporters__cta">
            <Cta text="Contáctanos" url="mailto:wtm@pionerasdev.co" />
          </div>
        </div>
      </div>
    </section>
  )
}
