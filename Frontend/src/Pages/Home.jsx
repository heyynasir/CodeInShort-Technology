import React from 'react'
import Hero from '../Components/Hero'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Services from './Services'
import Work from './Work'


const Home = () => {
  return (
    <>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default Home