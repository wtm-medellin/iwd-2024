import './App.css'
import Header from './sections/header/header'
import About from './sections/about/about'
import Speakers from './sections/speakers/speakers'
import Communities from './sections/communities/communities'
import Agenda from './sections/agenda/agenda'
import Sponsors from './sections/sponsors/sponsors'
import Footer from './sections/footer/footer'
import Navigation from './sections/navigation/navigation'
import Registration from './sections/registration/registration'

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Registration />
      <About />
      <Speakers />
      <Agenda />
      <Sponsors />
      <Communities />
      <Footer />
    </>
  )
}

export default App
