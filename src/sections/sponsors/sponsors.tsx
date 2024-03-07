import SectionTitle from '../../components/sectionTitle/sectionTitle'
import Cta from '../../components/cta/cta'
import gorillalogo from '../../assets/logos-sponsors/GorillaLogic/GL_Horizontal_Black_Tag2.png'
import sonatype from '../../assets/logos-sponsors/Sonatype/Sonatype_logo_full_color.svg'
import notion from '../../assets/logos-sponsors/Notion/notion-seeklogo.svg'
import nodoeafit from '../../assets/logos-sponsors/NodoEafit/logo_nodoeafit.png'
import nix from '../../assets/logos-sponsors/N-ix/N-iX_orange-back-1.png'
import intellias from '../../assets/logos-sponsors/Intellias/IntelliasLogo.png'
import google from '../../assets/logos-sponsors/Google/google-logo-png-transparent-background-large-new.png'
import gap from '../../assets/logos-sponsors/GAP/GAP-LOGO.png'
import dcaballero from '../../assets/logos-sponsors/DCaballero/Logo-dcaballero.png'
import comfama from '../../assets/logos-sponsors/ComfamaEmpleo/Logo_Comfama_Magenta.png'
import bdginstitute from '../../assets/logos-sponsors/BDGInstitute/logo-bdg-institute.png'



import './sponsors.scss'

export default function Sponsors() {
  return (<>
    <section className="sponsors" id="sponsors">
      <div className="sponsors__container">
        <SectionTitle
          text="Patrocinadores"
          direction="right"
          style="blue"
          assetName="badge-vector"
        />
        <div className='floating-sponsors'>
          <img src={google} alt="logo Google" />
          <img src={nodoeafit} alt="logo Nodo Eafit" />
          <img src={gorillalogo} alt="logo Gorilla Logic" />
          <img src={sonatype} alt="logo Sonatype" />
          <img src={comfama} alt="logo Comfama" />
          <img src={intellias} alt="logo Intellias" />
          <img src={gap} alt="logo Growth Acceleration Partner" />
          <img src={dcaballero} alt="logo DCaballero" />
          <img src={bdginstitute} alt="logo BDG Institute" />
          <img src={notion} alt="logo Notion" />
          <img src={nix} alt="logo Nix" />
        </div>

        <div className="sponsors__content">
          <div className="sponsors__text">
            <p>
              Gana visibilidad para tu empresa y apoya a más mujeres a construir
              su carrera en tecnología.
            </p>
            <br />
            <p>
              Escríbenos a{' '}
              <a href="mailto:wtm@pionerasdev.co" className="sponsors__email">
                wtm@pionerasdev.co
              </a>
            </p>
          </div>
          <div className="sponsors__cta">
            <Cta text="Contáctanos" url="mailto:wtm@pionerasdev.co" />
          </div>
        </div>
      </div>
    </section>
  </>)
}
