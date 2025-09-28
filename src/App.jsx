import { useState } from 'react'
import './App.css'
import About from './components/about'
import ContactMe from './components/contactme'
import Footer from './components/footer'
import Header from './components/header'
import HeroSection from './components/hero'
import Portfolio from './components/portfolio'
import Services from './components/services'
import GoUp from './components/services/go-up'
import MobileNav from './components/services/mobilenav'

export default function App() {
const[mobileisclicked,setmobileisclicked]=useState(false);
function toggleMobileNav(){
  setmobileisclicked(!mobileisclicked)
}
return(<>
  <div className="container mx-auto px-[80px] mt-[30px] max-w-7xl">
    <Header handlemobile={toggleMobileNav}/>
    <MobileNav mobileisclicked={mobileisclicked}/>
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