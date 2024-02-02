import './sponsors.scss'
import titleDecoration from '../../assets/img/sponsors-decor.svg'

export default function Sponsors() {
  const communities = ['digitalDiaspora', 'geekGirls', 'pioneras', 'pyladies']

  return (
    <section className="sponsors">
      <div className="sponsors__title sponsors__section">
        <div>
          <h2>Aliados</h2>
          <p>
            Gracias a las empresas y organizaciones que hacen posible este
            evento.
          </p>
        </div>
        <div className="sponsors__decor">
          <img src={titleDecoration} />
        </div>
      </div>
      <div className="sponsors__section">
        <h3 className="sponsors__section-title">Comunidades</h3>
        <ul className="sponsors__list">
          {communities.map((element) => {
            const image = new URL(
              `../../assets/communities/${element}.png`,
              import.meta.url
            ).href

            return (
              <li className="sponsors__item">
                <img src={image} />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="sponsors__section">
        <h3 className="sponsors__section-title">Patrocinadores</h3>
        <p>
          ¿Tu empresa está interesada en patrocinar? Escríbenos para ser parte
          del evento a wtm@pionerasdev.co{' '}
        </p>
      </div>
    </section>
  )
}
