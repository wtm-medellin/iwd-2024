import './footer.scss'
import footerDecor from '../../assets/illustrations/squares-vector.svg'

export default function Footer() {
  const socialLinks = [
    {
      name: 'instagram',
      link: 'https://www.instagram.com/wtmmed',
    },
    {
      name: 'x',
      link: 'https://twitter.com/WTMmed',
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__decor">
        <img src={footerDecor} className="footer__decor-image" />
      </div>
      <div className="footer__content">
        <p>WTM Medellin 2024</p>
        <div className="footer__social">
          <ul>
            {socialLinks.map((social) => {
              const image = new URL(
                `../../assets/social/${social.name}.svg`,
                import.meta.url
              ).href

              return (
                <li className="footer__social-item">
                  <a href={social.link} target="blank">
                    <img className="footer__social-logo" src={image} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
