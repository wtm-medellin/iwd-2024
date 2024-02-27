import Navigation from '../sections/navigation/navigation'
import Footer from '../sections/footer/footer'
import team from '../assets/data/team'
import './team.scss'

export default function Team() {
  return (
    <>
      <Navigation />
      <section className="team">
        <ul className="team__list">
          {team.map((element, index) => {
            const image = new URL(
              `../assets/team-pictures/${element.picture}`,
              import.meta.url
            ).href

            return (
              <li className="team__element" key={index}>
                <div className="team__picture-container">
                  <img className="team__picture" src={image} />
                </div>
                <h2 className="team__name">{element.name}</h2>
                <p className="team__bio">{element.description}</p>
                <div>
                  {element.social.map((social, index) => {
                    const socialLogo = new URL(
                      `../assets/social/${social.name}.svg`,
                      import.meta.url
                    ).href

                    return (
                      <a href={social.url} target="blank" key={index}>
                        <img src={socialLogo} className="team__social-logo" />
                      </a>
                    )
                  })}
                </div>
              </li>
            )
          })}
        </ul>
      </section>
      <Footer />
    </>
  )
}
