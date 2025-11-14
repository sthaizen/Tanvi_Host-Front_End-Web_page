import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Hero from './components/Hero'
import Packageslist from './components/Packageslist'
import Platformwks from './components/Platformwks'
import Whychoose from './components/Whychoose'
import Bentogrid from './components/Bentogrid'
import Testimonials from './components/Testimonials'
import Priceplan from './components/Priceplan'
import Teammembers from './components/Teammembers'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Contact from './components/Contact'
import CAT from './components/CAT'
import Footer from './components/Footer'
import ReactLenis from 'lenis/react'


const App = () => {


  return (
    <ReactLenis root className="root-container dark:bg-black relative" style={{ width: '100%' }}>
      <Navbar  />
      <Hero/>
      <Packageslist/>
      <Platformwks/>
      <Whychoose/>
      <Bentogrid/>
      <Testimonials/>
      <Priceplan/>
      <Teammembers/>
      <Contact/>
      <CAT/>
      <Footer/>
    </ReactLenis>
  )
}

export default App