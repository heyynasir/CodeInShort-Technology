import React from 'react'
import woman from '../assets/woman.png'
import money from '../assets/money.png'
import support from '../assets/support.png'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='w-full bg-black min-h-screen flex sm:flex-row flex-col sm:pt-[7vw]' id='about'>

      <motion.div className="left sm:w-[50vw] w-full flex items-center p-4 justify-center h-[80vh] sm:h-full">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
        // viewport={{ once: true }} 
          className=' sm:h-[70vh] sm:w-[60%] w-[80%]  border-2 border-purple-500 rounded-2xl border-blur-2xl   overflow-hidden
          bg-black/60 backdrop-blur-xl shadow-lg shadow-purple-800/20 transition-all duration-300'>
              <img className='sm:ml-10 ml-2' src={woman} alt="" />
          </motion.div>
      </motion.div>

      <div className="right sm:w-[50vw] h-full">

            <motion.button 
                 initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className='bg-zinc-200 p-3 rounded-full sm:mt-2  mt-[7rem sm:ml-0 ml-20 shadow-lg'>

              <p className='font-bold sm:text-xl bg-gradient-to-r from-cyan-700 to-purple-700 
                bg-clip-text text-transparent'
                >About Our Company</p>
            </motion.button>

            <div className='mt-5 space-y-2'>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <h1 className='sm:text-6xl text-3xl  sm:ml-0 ml-14 font-bold'>Choose <span className='text-purple-500'>The Best</span> IT 
                    <br /> Service Company</h1>
                    <p className='sm:w-[70%] w-[80%] sm:ml-0 ml-8 mt-2 sm:text-[0.8rem] text-[0.7rem] leading-5'>
                        We are a dynamic IT company focused on innovation and excellence in technology solutions. 
                        Our team transforms ideas into scalable, secure, and high-performance digital products. 
                        We believe in quality, transparency, and continuous improvement in everything we do.
                        By understanding client needs deeply, we deliver solutions that create real business value. 
                        Trusted for our reliability and commitment, we strive to build long-term partnerships and a smarter digital future.
                    </p>

                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                    className='mt-10'>
                    <hr className='sm:w-[60%] sm:ml-0 ml-3 w-[90%] mt-4' />

                    <div className='flex w-full sm:ml-0 ml-8 gap-6 mt-4 mb-4'>
                        <div className='sm:w-[14vw] w-[35vw] flex justify-center items-center h-[12vh] bg-zinc-400 rounded-lg'>
                          <img className='sm:w-20 w-10' src={money} alt="" />
                          <h1 className='text-black sm:mt-3 mt-1 font-semibold leading-4  sm:text-xl'>
                            Money Back Garranty</h1>
                        </div>
                        <div className='sm:w-[14vw] w-[35vw] flex justify-center items-center h-[12vh] bg-zinc-400 rounded-lg'>
                              <img className='sm:w-20 w-12' src={support} alt="" />
                              <h1 className='text-black mt-1 font-semibold leading-4 sm:text-xl'>Technical Support</h1>
                        </div>
                        </div>
                      <hr className='sm:w-[60%] sm:ml-0 ml-3 w-[90%] mt-4' />
                </motion.div>
            </div>
            
      </div>

    </div>
  )
}

export default About