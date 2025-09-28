import './App.css'
import About from './components/about'
import ContactMe from './components/contactme'
import Footer from './components/footer'
import Header from './components/header'
import HeroSection from './components/hero'
import Portfolio from './components/portfolio'
import Services from './components/services'
import GoUp from './components/services/go-up'

export default function App() {

return(<>
  <div className="container mx-auto px-[80px] mt-[30px] max-w-7xl">
    <Header/>
    <GoUp/>
    <HeroSection/>
    <Services/>
    <About/>
    <Portfolio/>
    <ContactMe/>
  </div>
    <Footer/>
  </>
)

}