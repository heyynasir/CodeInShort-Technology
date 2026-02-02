import React from 'react'
import team from '../assets/team3.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div id='/' className='w-full dark:bg-[#000024] bg-zinc-300 dark:text-white text-black min-h-screen sm:h-screen'>
        <div className='w-full h-full flex sm:flex-row flex-col items-center p-6'>

            <div className="left sm:w-[55vw] sm:h-[80vh]  sm:p-12 flex flex-col justify-center ">
                <div className='sm:ml-22 ml-8 '>
                        <motion.p className='text-cyan-600 font-semibold  mt-26 sm:mt-8'
                            initial={{opacity:0 , y:20}}
                            animate={{opacity:1 , y:0}}
                            transition={{delay:0.4 , duration:0.8}}
                        >
                            WELCOME TO CODE<span className='text-red-600'>IN</span>SHORT
                        </motion.p>
                        <motion.h1 className='sm:text-[3rem] text-[2rem] leading-10 mt-2 sm:leading-14 font-bold'
                            initial={{opacity:0 , y:30}}
                            animate={{opacity:1 , y:0}}
                            transition={{delay:0.8 , duration:0.8}}
                        >We Solve Business Problems <br /> With Technology.</motion.h1>
                        
                        <motion.p className='mt-3 sm:text-mediam text-sm'
                            initial={{opacity:0 , y:20}}
                            animate={{opacity:1 , y:0}}
                            transition={{delay:1 , duration:0.8}}
                        >
                        Our Perfomance is Your Success. <br /> Our Passion is Innovation. <br /> Our Expertise is Unmatched.
                        <br /> We get you more.
                        </motion.p>

                        <motion.div className='z-999'
                             initial={{opacity:0 , y:50}}
                            animate={{opacity:1 , y:0}}
                            transition={{delay:1.2 , duration:0.8}}
                        >
                            <button className='px-6 mt-4 py-2.5 bg-cyan-600'><a href="#contacts">Get Started</a></button>
                            <button className='px-6 mt-4 py-2 ml-6 border-2'><a href="#contacts">Services</a></button>
                        </motion.div>
                        
                </div>
            </div>
            {/* -----------Right-------------- */}
            <div className="left sm:w-[45vw]  sm:h-[80vh] mb-26">
                <motion.img
                            initial={{opacity:0 , y:20}}
                            animate={{opacity:1 , y:0}}
                            transition={{delay:1.6 , duration:0.8}}
                className='sm:mt-0 mt-10 w-full' src={team} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Hero