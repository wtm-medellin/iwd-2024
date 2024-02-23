import './speakers.scss'

const SECTION = {
  TITLE: 'Speakers',
  DESCRIPTION: 'Envía tu propuesta de charla antes del',
  DATE: '27 de Febrero',
  CFP_BUTTON_TEXT: 'Call For Speakers',
}

export default function Speakers() {
  return (
    <section className="speakers">
      <div className="speakers__title-container">
        <h2 className="speakers__title">{SECTION.TITLE}</h2>
        <div className="speakers__icon"></div>
      </div>
      <div className="speakers__container">
        <p className="speakers__description">
          {SECTION.DESCRIPTION}{' '}
          <span className="speakers__cfp-date">{SECTION.DATE}</span>
        </p>
        <a
          className="speakers__cfp-button anchor__link"
          href="https://sessionize.com/iwd-medellin-2024/"
          target="_blank"
        >
          {SECTION.CFP_BUTTON_TEXT}
        </a>
      </div>
    </section>
  )
}
