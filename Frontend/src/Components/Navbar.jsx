import React, { useState } from 'react'
import OverlayMenu from './OverlayMenu'
import { motion } from 'framer-motion';
import logo from '../assets/codeinshort.png'
import { IoMdMenu } from "react-icons/io";
import DarkMode from './DarkMode';


const Navbar = () => {

  const [menuOpen , setMenuOpen] = useState(false);
 

  return (
    <>
      <motion.nav className={`
            fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-2 bg-zinc-400 dark:bg-black/60
            backdrop-blur-2xl dark:border-b  dark:border-blue-800/70 shadow-lg shadow-blue-800/20transition-all duration-300`}
              initial={{opacity:0 , y:-20}}
              animate={{opacity:1 , y:0}}
              transition={{duration:1}}
            >
              
            <div className='flex items-center justify-between w-full'>
              <a href='#/' className='flex cursor-pointer items-center space-x-3'>
                  <img className='sm:w-[17vw] w-[90vw] object-contain ' src={logo} alt="" />
                  {/* <h1 className='text-2xl font-semibold sm:block hidden'>Code<span className='text-red-500'>In</span>Short</h1> */}
              </a>

              <div className=' space-x-4 text-black dark:text-white font-semibold sm:block hidden'>
                    <a className='hover:text-white dark:hover:text-pink-500 duration-300' href='#/'>Home</a>
                    <a className='hover:text-white dark:hover:text-pink-500 duration-300' href="#about">About</a>
                    <a className='hover:text-white dark:hover:text-pink-500 duration-300' href='#skills'>Skills</a>
                    <a className='hover:text-white dark:hover:text-pink-500 duration-300' href='#services'>Services</a>
                    <a className='hover:text-white dark:hover:text-pink-500 duration-300' href='#testimonials'>Testimonials</a>
                    <a className='hover:text-white dark:hover:text-pink-500 duration-300' href='#contacts'>Contact Us</a>
              </div>

            {/* for Mobile Design */}
              <div className='block sm:hidden'>
                  <button onClick={()=>setMenuOpen(true)} 
                  className='text-white sm:ml-0 ml-46 focus:outline-none cursor-pointer '>
                    <IoMdMenu size={40} /></button>
              </div>

              <div className=' space-x-4 sm:block hidden '>
                  <a href='#contacts'
                  className='bg-gradient-to-r  px-4 py-2 rounded-full font-semibold cursor-pointer from-pink-400 to-blue-600'>
                    Reach Out</a>
                    <DarkMode />
              </div>
            </div>

      </motion.nav>
      <OverlayMenu isOpen={menuOpen} onClose={()=>setMenuOpen(false)} />  
    </>
  )
}

export default Navbar