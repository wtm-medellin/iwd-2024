import './speakers.scss'
import SectionTitle from '../../components/sectionTitle/sectionTitle'

const SECTION = {
  TITLE: 'Speakers',
  DESCRIPTION: 'Pronto conocerás nuestros speakers y charlas propuestas.',
}

export default function Speakers() {
  return (
    <section className="speakers" id="speakers">
      <div className="speakers__title-container">
        <SectionTitle
          text={SECTION.TITLE}
          direction="left"
          style="pink"
          assetName="mic-vector"
        />
      </div>
      <div className="speakers__container">
        <p className="speakers__description">{SECTION.DESCRIPTION} </p>
      </div>
    </section>
  )
}
