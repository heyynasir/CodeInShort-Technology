import { AnimatePresence , motion } from 'framer-motion'
import React from 'react'
import { FiX } from "react-icons/fi";
import DarkMode from './DarkMode';


const OverlayMenu = ({isOpen , onClose}) => {
  
  const isMobile = typeof window !== "undefined" && window.innerWidth<1024;
  const origin = isMobile ? "95% 8%" : "50% 8%"
  return (
    <div >
        <AnimatePresence>
            {
              isOpen && (
                <motion.div 
                    className="fixed inset-0 flex items-center justify-center z-50" 
                    initial = {{clipPath : `circle(0% at ${origin})`}}  
                    animate = {{clipPath : `circle(150% at ${origin})`}}  
                    exit = {{clipPath : `circle(0% at ${origin})`}} 
                    transition={{duration : 0.7 , ease:[0.4 , 0,0.2,1]}} 
                    style={{backgroundColor:"rgba(0,0,0,0.95)"}}
                  >

                    <button onClick={onClose} className='fixed top-6 right-6 text-white'>
                        <FiX size={40} />
                    </button>

                    <div  onClick={onClose}
                                initial = {{opacity:0 , y:20}}
                                animate={{opacity:1 , y:0}}
                                transition={{delay:0.3 }}
                                className='flex flex-col text-4xl gap-5 font-semibold items-center'>
                        {/* <motion.div 
                                
                            > */}
                                <a href='#/'>Home</a>
                                <a href="#about">About</a>
                                <a href='#skills'>Skills</a>
                                <a href='#services'>Services</a>
                                <a href='#testimonials'>Testimonials</a>
                                <a href='#contacts'>Contact Us</a>
                                <DarkMode />
                                
                            {/* </motion.div> */}
                    </div>
                </motion.div>
              )
            }
        </AnimatePresence>
    </div>
  )
}

export default OverlayMenu