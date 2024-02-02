import './participate.scss'

export default function Participate() {
  return (
    <section className="participate">
      <div>
        <h2>¡Haz parte del evento!</h2>
        <p>Puedes participar en el evento de diferentes maneras:</p>
        <ul className="participate__list">
          <li>
            <b>Comparte:</b> Postula tu charla a través del{' '}
            <a href="https://sessionize.com/iwd-medellin-2024/" target="_blank">
              Call For Speakers
            </a>
          </li>
          <li>
            <b>Aprende:</b> Asiste al evento el 6 de Abril, las inscripciones
            abrirán pronto
          </li>
          <li>
            <b>Patrocina:</b> Gana visibilidad para tu empresa y apoya a mas
            mujeres a construir su carrera en tecnología, contáctanos en
            wtm@pionerasdev.co
          </li>
          <li>
            <b>Difunde:</b> Comparte el evento en redes sociales para que mas
            mujeres se unan #WTMMedellin #IWD24
          </li>
        </ul>
      </div>
    </section>
  )
}
