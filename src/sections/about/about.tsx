import './about.scss'

export default function About() {
  return (
    <section className="about">
      <div className="about__text-container">
        <h2 className="about__title">
          Sobre el <span className="about__evento">Evento</span>
        </h2>
        <p className="about__text">
          El Día Internacional de la Mujer, que se celebra anualmente en marzo,
          es un momento reconocido mundialmente para celebrar los logros de las
          mujeres y crear conciencia sobre las cuestiones que afectan la
          igualdad de género. Este Día Internacional de la Mujer, no solo
          honramos las contribuciones tecnológicas de las mujeres, estamos dando
          forma activamente a lo que viene a continuación. Únete al tema de este
          año, <span className="about__slogan">'Impactar el futuro'</span>, con
          una variedad de eventos que invitan a la reflexión, todos diseñados
          para inspirarte y desafiarte.
        </p>
        <a
          href="https://developers.google.com/womentechmakers?hl=es-419"
          className="about__link"
          target="_blank"
        >
          womentechmakers.com
        </a>
      </div>
    </section>
  )
}
