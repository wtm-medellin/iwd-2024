import './App.css'
import Header from './sections/header/header'
import About from './sections/about/about'
import Speakers from './sections/speakers/speakers'
import Communities from './sections/communities/communities'
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
      <Sponsors />
      <Communities />
      <Footer />
    </>
  )
}

export default App
