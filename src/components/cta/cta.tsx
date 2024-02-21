import './cta.scss'

type ctaProps = {
  text: string
  url: string
}

export default function Cta(props: ctaProps) {
  return (
    <a className="cta" href={props.url}>
      {props.text}
    </a>
  )
}
