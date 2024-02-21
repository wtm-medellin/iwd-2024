import './speakers.scss'
import speakersImage from '../../assets/old/img/speakers-image.png'

export default function Speakers() {
  return (
    <section className="speakers">
      <span className="speakers__decor" />
      <div>
        <img src={speakersImage} />
        <p>¿Tu?</p>
      </div>
      <div className="speakers__container">
        <h2>Speakers</h2>
        <p>
          El Call For Speakers está abierto, envía tu propuesta de charla antes
          del 27 de Febrero
        </p>
      </div>
    </section>
  )
}
