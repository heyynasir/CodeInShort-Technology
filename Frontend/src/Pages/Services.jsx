import React from 'react'
import { motion } from 'framer-motion'
import web from '../assets/web.png'
import appdev from '../assets/appdev.png'
import dm from '../assets/dm.png'
import bm from '../assets/bm.png'
import software from '../assets/software.png'
import teaching from '../assets/teaching.jpg'
import seo from '../assets/seo.png'
import ui from '../assets/ui.png'


const Services = () => {

    const services = [
        {name:"Web Devlopment" , image:web},
        {name:"App Devlopment" , image:appdev},
        {name:"Digital Marketing" , image:dm},
        {name:"Software Devlopment" , image:software},
        {name:"Teaching" , image:teaching},
        {name:"Business Management" , image:bm},
        {name:"SEO & Content Writing" , image:seo},
        {name:"UI/UX Designing" , image:ui},
    ]


  return (
    <div id='services' className='w-full dark:bg-[#000024] bg-zinc-300 text-white min-h-screen'>
        <motion.h1 
            initial={{opacity:0 , scale:0}}
            whileInView={{opacity:1 , scale:1}}
            transition={{duration:0.5}}
        className='sm:text-[4rem] text-[3rem] dark:text-white text-black font-semibold text-center pt-20'>Services</motion.h1>

        <div className='min-h-[70vh] flex sm:flex-row flex-col flex-wrap justify-evenly items-center'>
            {
                services.map((item , index)=>(
                    <motion.div key={index} 
                    className='sm:w-[20vw] w-[70vw] gap-2 relative flex flex-col items-center justify-center hover:scale-110 duration-500
                     cursor-pointer sm:h-[12vw] h-[45vw] sm:mt-0 mt-5 bg-zinc-600 rounded-xl shadow-lg backdrop-blur-2xl shadow-blue-500/50'
                        initial={{opacity:0 , scale:0}}
                        whileInView={{opacity:1 , scale:1}}
                        transition={{duration:0.5 , delay:index*0.1 , ease:"linear"}}
                     >
                        <img className='w-[40%] rounded-lg' src={item.image} alt="" />
                        <p className='font-semibold'>{item.name}</p>
                    </motion.div>
                ))
            }
        </div>
    </div>
  )
}

export default Services