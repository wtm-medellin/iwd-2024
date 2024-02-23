import './cta.scss'

type ctaProps = {
  text: string
  url: string
}

export default function Cta(props: ctaProps) {
  return (
    <a className="cta" href={props.url} target="blank">
      {props.text}
    </a>
  )
}
