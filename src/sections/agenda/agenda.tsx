import SectionTitle from '../../components/sectionTitle/sectionTitle'
import './agenda.scss'

export default function Agenda() {
  const agendaInfo = [
    {
      block: '09:00',
      talks: [
        {
          topicMain: {
            from: '9:00',
            to: '9:30',
            title:
              'Recepción y Networking en la plaza del Auditorio Fundadores',
            color: 'blue',
            speaker: null,
          },
          topicSecondary: null,
        },
        {
          topicMain: {
            from: '9:30',
            to: '10:00',
            title: 'Bienvenidas al IWD 2024',
            color: 'red',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '10:00',
      talks: [
        {
          topicMain: {
            from: '10:10',
            to: '10:40',
            speaker: 'Catalina Zapata',
            title:
              'La Sostenibilidad Digital: La clave para impactar el futuro y ayudar al planeta',
            color: 'green',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '11:00',
      talks: [
        {
          topicMain: {
            from: '10:50',
            to: '11:20 AM',
            title: 'Hello World: Rust',
            speaker: 'Lili Valencia',
            color: 'blue',
          },
          topicSecondary: null,
        },
        {
          topicMain: {
            from: '11:30',
            to: '12:00',
            title: 'El dragón que le tenía miedo a volar',
            speaker: 'Violeta Betancur',
            color: 'green',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '12:00',
      talks: [
        {
          topicMain: {
            from: '12:00',
            to: '13:00',
            title: 'Foto grupal, Almuerzo y Networking',
            color: 'red',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '13:00',
      talks: [
        {
          topicMain: {
            from: '13:15',
            to: '13:45',
            title:
              'Desafíos éticos en la Inteligencia Artificial y el sesgo de género',
            color: 'blue',
            speaker: 'Mariana Rodríguez',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '14:00',
      talks: [
        {
          topicMain: {
            from: '14:00',
            to: '14:45',
            title: 'Panel de mujeres: Impactando el futuro',
            color: 'green',
            speaker: 'Elizabeth Suescún, Rebeca Gómez, Kelly Muñoz',
          },
          topicSecondary: null,
        },
      ],
    },
    {
      block: '15:00',
      talks: [
        {
          topicMain: {
            from: '15:00',
            to: '16:45',
            title:
              'Workshop: Transformando la colaboración y organización digital con IA: Casos de uso sobre la IA en Notion para equipos de trabajo',
            speaker: 'Roxana Rodríguez',
            color: 'red',
          },
          topicSecondary: {
            title:
              'Mentorías para empleabilidad, hoja de ruta profesional y Mock Interviews',
            from: '15:30',
            to: '16:45',
            color: 'blue',
          },
        },
      ],
    },
    {
      block: '17:00',
      talks: [
        {
          topicMain: {
            from: '17:00',
            to: '17:30',
            title: 'Rifas y cierre',
            color: 'blue',
          },
          topicSecondary: null,
        },
        {
          topicMain: {
            from: '17:30',
            to: '18:00',
            title: 'Networking',
            color: 'green',
          },
          topicSecondary: null,
        },
      ],
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
          #WTMImpactTheFuture Sábado, 13 de Abril 2024 - 09:00 AM - 06:00 PM
        </h2>

        <div className="agenda__schedule">
          <div className="agenda__schedule__row__cell-header">
            <div className="agenda__schedule__row__cell">Hora</div>
            <div className=" agenda__schedule__row__cell">
              Auditorio Fundadores
            </div>
            <div className="agenda__schedule__row__cell">
              Laboratorio Bloque 18 - Piso 2
            </div>
          </div>
          {agendaInfo.map(({ block, talks }) => {
            return (
              <div key={block} className={`agenda__schedule__row `}>
                <div
                  className={`agenda__schedule__row__cell agenda__schedule__row__hours`}
                >
                  {block}
                </div>
                <div>
                  {talks.map(({ topicMain, topicSecondary }) => {
                    return (
                      <div
                        key={topicMain.title}
                        className="agenda__schedule__row__cell-group"
                      >
                        <div
                          className={`agenda__schedule__row__cell agenda__schedule__row__cell--${topicMain.color} agenda__schedule__row__topic-main`}
                        >
                          <div>
                            <span className="agenda__schedule__row__hours-number">
                              {topicMain.from} - {topicMain.to}
                            </span>

                            {topicMain.title}
                            {topicMain.speaker && (
                              <span className="agenda__schedule__row__cell-speaker">
                                - {topicMain.speaker}
                              </span>
                            )}
                          </div>
                        </div>
                        <div
                          className={`agenda__schedule__row__cell agenda__schedule__row__topic-secondary 
                          ${topicSecondary?.color ? `agenda__schedule__row__cell--${topicSecondary.color}` : 'agenda__schedule__row__cell--empty'}`}
                        >
                          {topicSecondary && (
                            <>
                              <span className="agenda__schedule__row__hours-number">
                                {topicSecondary.from} - {topicSecondary.to}
                              </span>
                              {topicSecondary.title}
                            </>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
