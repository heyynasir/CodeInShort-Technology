import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'
import Testimonials from './Pages/Testimonials'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import ParticlesBackground from './Components/ParticlesBackground'
import CustomeCusor from './Components/CustomeCusor'
import IntroAnimation from './Components/IntroAnimation'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  const [introDone, setIntroDone] = useState(false);

  return (
    <>
    {!introDone && <IntroAnimation onFinish={()=>setIntroDone(true)} />}

    {introDone && (
        <div className='relative gradient text-white w-full overflow-hidden'>
           <CustomeCusor />
              <ParticlesBackground />
              <Navbar />
          <Routes>                   
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/testimonials' element={<Testimonials />} />
              <Route path='/contact' element={<Contact />} />        
          </Routes>
           {/* <Footer /> */}
      </div>
    )}
      

    </>
  )
}

export default App