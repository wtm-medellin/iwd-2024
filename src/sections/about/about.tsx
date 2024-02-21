import './about.scss'
import lightBuld from '../../assets/old/img/about-decor.svg'

export default function About() {
  const aboutText =
    "El Día Internacional de la Mujer, que se celebra anualmente en marzo, es un momento reconocido mundialmente para celebrar los logros de las mujeres y crear conciencia sobre las cuestiones que afectan la igualdad de género. Este Día Internacional de la Mujer, no solo honramos las contribuciones tecnológicas de las mujeres; Estamos dando forma activamente a lo que viene a continuación. Únete a el tema de este año, 'Impactar el futuro', con una variedad de eventos que invitan a la reflexión, todos diseñados para inspirarte y desafiarte."
  return (
    <section className="about">
      <div>
        <img src={lightBuld} />
      </div>
      <div className="about__text-container">
        <h2 className="about__title">Sobre el evento</h2>
        <p className="about__text">{aboutText}</p>
        <a
          href="https://developers.google.com/womentechmakers/initiatives/iwd"
          target="_blank"
        >
          Mas información
        </a>
      </div>
    </section>
  )
}
