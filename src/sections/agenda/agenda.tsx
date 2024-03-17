import SectionTitle from '../../components/sectionTitle/sectionTitle'
import './agenda.scss'

export default function Agenda() {
  const agendaInfo = [
    {
      from: '9:00 AM',
      to: '9:30 AM',
      topicMain: 'Recepción y Networking en la plaza del Auditorio Fundadores',
      topicSecondary: '',
      stage: 'main',
      color: 'green',
    },
    {
      from: '9:30 AM',
      to: '10:00 AM',
      topicMain: 'Bienvenidas al IWD 2024',
      topicSecondary: '',
      stage: 'main',
      color: 'blue',
    },
    {
      from: '10:10 AM',
      to: '10:40 AM',
      topicMain:
        'La Sostenibilidad Digital: La clave para impactar el futuro y ayudar al planeta - Catalina Zapata',
      topicSecondary: '',
      stage: 'main',
      color: 'green',
    },
    {
      from: '10:50 AM',
      to: '11:20 AM',
      topicMain: 'Hello World: Rust - Lili Valencia',
      topicSecondary: '',
      stage: 'main',
      color: 'blue',
    },
    {
      from: '11:30 AM',
      to: '12:00 M',
      topicMain:
        'El dragón que le teníaFoto grupal, Almuerzo y Networking miedo a volar - Violeta Betancur',
      topicSecondary: '',
      stage: 'main',
      color: 'green',
    },
    {
      from: '12:00 M',
      to: '1:00 PM',
      topicMain: 'Foto grupal, Almuerzo y Networking',
      topicSecondary: '',
      stage: 'main',
      color: 'red',
    },
    {
      from: '1:00 PM',
      to: '1:45 PM',
      topicMain:
        'Desafíos éticos en la Inteligencia Artificial y el sesgo de género - Mariana Rodríguez',
      topicSecondary: '',
      stage: 'main',
      color: 'blue',
    },
    {
      from: '2:00 PM',
      to: '2:45 PM',
      topicMain: 'Panel de mujeres: Impactando el futuro',
      topicSecondary: '',
      stage: 'main',
      color: 'green',
    },
    {
      from: '3:00 PM',
      to: '3:30 PM',
      topicMain:
        'Transformando la colaboración y organización digital con IA: Casos de uso sobre la IA en Notion para equipos de trabajo - Roxana Rodríguez',
      topicSecondary:
        'Mentorías para empleabilidad, hoja de ruta profesional y Mock Interviews',
      stage: 'main',
      color: 'blue',
    },

    {
      from: '3:30 PM',
      to: '4:45 PM',
      topicMain: '',
      topicSecondary:
        'Mentorías para empleabilidad, hoja de ruta profesional y Mock Interviews',
      stage: 'main',
      color: 'green',
    },
    {
      from: '5:00 PM',
      to: '5:30 PM',
      topicMain: 'Rifas y cierre',
      topicSecondary: '',
      stage: 'main',
      color: 'blue',
    },
    {
      from: '5:30 PM',
      to: '6:00 PM',
      topicMain: 'Networking',
      topicSecondary: '',
      stage: 'main',
      color: 'red',
    },
  ]

  return (
    <section className="agenda">
      <div className="agenda__title-container">
        <SectionTitle
          text="Agenda"
          direction="right"
          style="green"
          assetName="agenda-vector"
        />
      </div>
      <div className="agenda__container">
        <h2 className="agenda__sub-header">
          #WTMImpactTheFuture Sábado, 13 de Abril 2024 - 10:00 AM - 5:00 PM
        </h2>

        <div className="agenda__schedule">
          <div className="agenda__schedule__row">
            <div className="agenda__schedule__row__hours agenda__schedule__row__cell  agenda__schedule__row__cell--red"></div>
            <div className=" agenda__schedule__row__cell agenda__schedule__row__cell--red agenda__schedule__row__topic-main">
              Auditorio Fundadores
            </div>
            <div className="agenda__schedule__row__cell agenda__schedule__row__cell--red agenda__schedule__row__topic-secondary">
              Laboratorio Bloque 18, piso 2
            </div>
          </div>
          {agendaInfo.map((row) => {
            return (
              <div className={`agenda__schedule__row `}>
                <div
                  className={`agenda__schedule__row__cell agenda__schedule__row__cell--${row.color} agenda__schedule__row__hours`}
                >
                  <span className="agenda__schedule__row__hours-number">
                    {row.from}
                  </span>{' '}
                  <span className="agenda__schedule__row__hours-dash">-</span>{' '}
                  <span className="agenda__schedule__row__hours-number">
                    {row.to}
                  </span>
                </div>
                <div
                  className={`agenda__schedule__row__cell agenda__schedule__row__cell--${row.color} agenda__schedule__row__topic-main`}
                >
                  {row.topicMain}
                </div>
                <div
                  className={`agenda__schedule__row__cell agenda__schedule__row__cell--${row.color} agenda__schedule__row__topic-secondary`}
                >
                  {row.topicSecondary}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
