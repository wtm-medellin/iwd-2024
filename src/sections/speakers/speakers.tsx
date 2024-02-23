import './speakers.scss'
import Cta from '../../components/cta/cta'

const SECTION = {
  TITLE: 'Speakers',
  DESCRIPTION: 'Envía tu propuesta de charla antes del',
  DATE: '27 de Febrero',
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
          <span className="speakers__cfp-date">{SECTION.DATE}</span>
        </p>
        <Cta
          text={SECTION.CFP_BUTTON_TEXT}
          url="https://sessionize.com/iwd-medellin-2024/"
        />
      </div>
    </section>
  )
}
