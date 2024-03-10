import communities from '../../assets/data/communities'
import './communities.scss'

export default function Communities() {
  return (
    <section className="communities" id="communities">
      <h2 className="communities__title">Comunidades</h2>
      <ul className="communities__list">
        {communities.map((element, index) => {
          const image = new URL(
            `../../assets/communities/${element.logo}.svg`,
            import.meta.url
          ).href

          return (
            <li key={index}>
              <a href={element.url} target="blank">
                <img src={image} alt={`${element.name} logo`} />
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
