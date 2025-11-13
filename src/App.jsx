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


const App = () => {

  const [theme, setTheme] = useState('light')
  return (
    <div className='dark:bg-black relative overflow-x-hidden '>
      <Navbar theme={theme} setTheme={setTheme} />
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
    </div>
  )
}

export default App