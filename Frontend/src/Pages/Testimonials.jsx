import React, { useEffect } from 'react'
import suresh from '../assets/suresh.jpg'
import nasir from '../assets/nasir.jpg'
import testi3 from '../assets/testi3.jpg'
import testi4 from '../assets/testi4.jpg'
import { motion, useAnimation } from 'framer-motion'

const Testimonials = () => {

  const controls = useAnimation();
  useEffect(()=>{
    controls.start({
      x:["0%" , "-50%"],
      transition:{
        duration:25,
        ease:"linear",
        repeat:Infinity
      }
    })
  },[])

  const testimonials = [
    {
      text: "Amazing service! The team delivered our project on time with excellent quality. Truly professional and supportive throughout the process.",
      image: suresh,
      name: "Suresh Vakude",
      role: "Founder of CodeinShort",
    },
    {
      text: "One of the best IT companies to work with. They understood our requirements perfectly and executed everything smoothly.",
      image: nasir,
      name: "Nasir Gavandi",
      role: "Co-Founder of CodeinShort",
    },
    {
      text: "Highly recommended! Their technical expertise and problem-solving approach really helped our business grow.",
      image: testi3,
      name: "Zaigam Akhtar",
      role: "CEO The Rhymes",
    },
    {
      text: "Very skilled developers with great communication. Our website performance and UI improved a lot after working with them.",
      image: testi4,
      name: "Babu Swamy",
      role: "CEO Food Restorant",
    },
  ]

  return (
    <div id="testimonials" className="w-full h-screen overflow-hidden dark:bg-[#000024] bg-zinc-300 dark:text-white text-black">
      
      <motion.div 
        initial={{opacity:0 , y:-40}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.6}}
      >
            <p className="sm:mt-[8vw] sm:pt-0 pt-32 text-blue-600 tracking-[0.5rem] text-center text-lg font-semibold">
            TESTIMONIALS
          </p>

          <h1 className="text-center sm:text-[2rem] text-[1.6rem] font-semibold sm:leading-8 leading-7 sm:mt-4 mt-6">
            Take a Look at What Our Amazing <br /> Clients Have Said
          </h1>

      </motion.div>
      {/* MARQUEE */}
      <motion.div
        className="mt-12 flex flex-nowrap gap-10 w-max"
        animate={controls}
      >
        {
        [...testimonials, ...testimonials].map((item, index) => (
          <div key={index} className="shrink-0"
           
          >
            
            {/* CARD */}
            <div className="sm:w-[25vw] w-[70vw] h-[28vh] sm:h-[15vw] relative">
              <div className="w-full h-full p-4 dark:bg-zinc-300 bg-zinc-500 shadow-xl rounded-t-3xl rounded-bl-3xl">
                <p className="text-black text-sm"
                      //          onMouseEnter={()=>controls.stop()}
                      //         onMouseLeave={()=>controls.start({
                      //           x:["0%","-50%"],
                      //           transition:{
                      //             duration:25,
                      //             repeat:Infinity,
                      //             ease:"linear"
                      //           }
                      // })}
                >
                  {item.text}
                </p>
              </div>

              {/* IMAGE */}
              <div className="sm:w-[10vw] w-[25vw] h-[25vw] sm:h-[10vw] absolute sm:bottom-[-5vw] bottom-[-12vw] 
                      sm:left-[6vw] left-[20vw] rounded-full border-2 border-blue-500 border-dashed">
                <img
                  className="rounded-full w-full  h-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </div>
            </div>

            {/* NAME */}
            <div className="sm:mt-[6vw] mt-[14vw] sm:mr-12 mr-6 text-center">
              <h1 className="text-lg font-semibold">
                {item.name}
              </h1>
              <p className="dark:text-zinc-300 font-semibold text-[0.8rem]">
                {item.role}
              </p>
            </div>

          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Testimonials
