import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Services from './components/Services' 
import Footer from './components/Footer'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Services />
      <Footer />
    </div>
  )
}

export default App
