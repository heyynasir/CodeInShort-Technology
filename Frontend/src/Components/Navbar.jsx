import React, { useState } from 'react'
import OverlayMenu from './OverlayMenu'
import { motion } from 'framer-motion';
import logo from '../assets/codeinshort.png'
import { IoMdMenu } from "react-icons/io";


const Navbar = () => {

  const [menuOpen , setMenuOpen] = useState(false);
 

  return (
    <>
      <motion.nav className={`
            fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-2 bg-black/60
            backdrop-blur-2xl border-b border-blue-800/70 shadow-lg shadow-blue-800/20transition-all duration-300`}
              initial={{opacity:0 , y:-20}}
              animate={{opacity:1 , y:0}}
              transition={{duration:1}}
            >
              
            <div className='flex items-center justify-between w-full'>
              <a href='#/' className='flex cursor-pointer items-center space-x-3'>
                  <img className='sm:w-[17vw] w-[90vw] object-contain ' src={logo} alt="" />
                  {/* <h1 className='text-2xl font-semibold sm:block hidden'>Code<span className='text-red-500'>In</span>Short</h1> */}
              </a>

              <div>
                  <button onClick={()=>setMenuOpen(true)} className='text-white sm:ml-0 ml-46 focus:outline-none cursor-pointer'>
                    <IoMdMenu size={40} /></button>
              </div>

              <div>
                  <a href='#contacts'
                  className='bg-gradient-to-r sm:block hidden px-4 py-2 rounded-full font-semibold cursor-pointer from-pink-400 to-blue-600'>
                    Reach Out</a>
              </div>
            </div>

      </motion.nav>
      <OverlayMenu isOpen={menuOpen} onClose={()=>setMenuOpen(false)} />  
    </>
  )
}

export default Navbar