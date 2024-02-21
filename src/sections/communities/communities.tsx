import './communities.scss'
import titleDecoration from '../../assets/old/img/sponsors-decor.svg'

export default function Communities() {
  const communities = [
    'digital-diaspora',
    'geek-girls',
    'pioneras',
    'pyladies',
    'tech-community',
  ]

  return (
    <section className="communities">
      <div className="communities__title communities__section">
        <div>
          <h2>Aliados</h2>
          <p>
            Gracias a las empresas y organizaciones que hacen posible este
            evento.
          </p>
        </div>
        <div className="communities__decor">
          <img src={titleDecoration} />
        </div>
      </div>
      <div className="communities__section">
        <h3 className="communities__section-title">Comunidades</h3>
        <ul className="communities__list">
          {communities.map((element) => {
            const image = new URL(
              `../../assets/communities/${element}.svg`,
              import.meta.url
            ).href

            return (
              <li className="communities__item">
                <img src={image} />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="communities__section">
        <h3 className="communities__section-title">Patrocinadores</h3>
        <p>
          ¿Tu empresa está interesada en patrocinar? Escríbenos para ser parte
          del evento a wtm@pionerasdev.co{' '}
        </p>
      </div>
    </section>
  )
}
