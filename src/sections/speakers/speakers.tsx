import './speakers.scss'

const SECTION = {
  TITLE: 'Speakers',
  DESCRIPTION: 'Pronto conocerás nuestros speakers y charlas propuestas.',
  CFP_BUTTON_TEXT: 'Call For Speakers',
}

export default function Speakers() {
  return (
    <section className="speakers" id="speakers">
      <div className="speakers__title-container">
        <h2 className="speakers__title">{SECTION.TITLE}</h2>
        <div className="speakers__icon"></div>
      </div>
      <div className="speakers__container">
        <p className="speakers__description">
          {SECTION.DESCRIPTION}{' '}
        </p>
      </div>
    </section>
  )
}
