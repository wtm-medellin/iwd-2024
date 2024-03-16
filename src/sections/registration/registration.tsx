import './registration.scss'
import Cta from '../../components/cta/cta'
import locationIcon from '../../assets/illustrations/icon-location.svg'
import dateIcon from '../../assets/illustrations/icon-calendar.svg'

export default function Registration() {
  const content = {
    title: '#WTMImpactTheFuture',
  }
  return (
    <section className="registration container">
      <h2 className="registration__title">{content.title}</h2>
      <div className="registration__content">
        <div className="registration__text-container">
          <p>
            En este Día Internacional de la Mujer 2024, te invitamos a una
            celebración llena de inspiración y acción.
            <br />
            <br />
            Reflexiona sobre estas preguntas:
          </p>
          <ul>
            <li>
              •⁠ ⁠¿Qué proyecto te apasiona y tiene el potencial de cambiar el
              mundo?
            </li>
            <li>
              •⁠ ⁠¿Cómo estás utilizando tus talentos y habilidades para crear
              un futuro mejor para todos?
            </li>
          </ul>
          <p>
            <br />
            ¡Juntas, podemos soñar en grande y ser audaces para "Impactar el
            Futuro"!
          </p>
        </div>
        <div className="registration__info-container">
          <div className="registration__info">
            <img className="registration__icon" src={dateIcon} />

            <p>
              Sábado, 13 de Abril 2024
              <br />
              09:00 AM - 5:30 PM
            </p>
          </div>
          <div className="registration__info">
            <img className="registration__icon" src={locationIcon} />
            <p>
              Auditorio Fundadores - Universidad EAFIT
              <br />
              Medellín, Colombia
            </p>
          </div>
          <Cta
            text="Registrarme"
            url="https://gdg.community.dev/events/details/google-gdg-medellin-presents-international-womens-day-2024/"
          />
        </div>
      </div>
    </section>
  )
}
