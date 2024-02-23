import './communities.scss'

export default function Communities() {
  const communities = [
    'geek-girls',
    'pioneras',
    'digital-diaspora',
    'tech-community',
    'pyladies',
    'gdg',
  ]

  return (
    <section className="communities" id="communities">
      <h2 className="communities__title">Comunidades</h2>
      <ul className="communities__list">
        {communities.map((element) => {
          const image = new URL(
            `../../assets/communities/${element}.svg`,
            import.meta.url
          ).href

          return (
            <li>
              <img src={image} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
