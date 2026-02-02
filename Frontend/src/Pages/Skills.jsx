import React from "react";
import { motion } from "framer-motion";
import react from '../assets/react.png'
import js from '../assets/js2.png'
import node from '../assets/node3.png'
import mongodb from '../assets/mongodb.png'
import java from '../assets/java.png'
import tailwind from '../assets/tailwind.png'
import mysql from '../assets/mysql.png'
import net from '../assets/net.png'

const Skills = () => {
  return (
    <div id="skills" className="w-full dark:bg-[#000024] bg-zinc-300 dark:text-white text-black min-h-screen">
      <div className="mt-[-4vh] flex flex-col items-center gap-12">
        <h1 className="sm:text-4xl text-3xl sm:ml-0 ml-8 sm:pt-26 pt-0 font-bold">
          <span className="sm:text-5xl text-4xl  text-blue-600">T</span>echnologies 
          <span className="sm:text-5xl text-4xl"> W</span>e <span className="sm:text-5xl text-4xl"> 
             A</span>re <span className="sm:text-5xl text-4xl text-blue-600">U</span>sed.
        </h1>

        <div className="flex sm:flex-row flex-col sm:justify-evenly  items-center w-full">

          {/* ================= LEFT CIRCLE ================= */}
          <motion.div 
              initial={{opacity:0 , y:60}}
              whileInView={{opacity:1 , y:0}}
              transition={{duration:1 , delay:0.4}}
              className="sm:w-[25vw] w-[50vw] h-[50vw]  sm:h-[25vw] relative border-2 dark:border-white rounded-full">

            {/* ROTATING WRAPPER */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* BALL 1 */}
             <div className=" sm:w-[8vw] w-[20vw] h-[20vw] sm:h-[8vw] flex justify-center items-center overflow-hidden rounded-full
                              absolute bg-black backdrop-blur-3xl border border-blue-600 shadow-xl shadow-cyan-500/30
                              sm:top-[-4vw] top-[-8vw] sm:left-[8vw] left-[15vw]"
                >
                  <img
                    className="w-[65%] h-[65%] object-contain"
                    src={react}
                    alt="react"
                  />
                </div>

              

              {/* BALL 2 */}
              <div
                className=" sm:w-[8vw] w-[20vw] h-[20vw] sm:h-[8vw] flex justify-center items-center overflow-hidden rounded-full
                              absolute bg-black backdrop-blur-3xl border border-yellow-400 shadow-xl shadow-yellow-500/30
                              sm:top-[9vw] top-[14vw] sm:left-[-3.5vw] left-[-8vw]">
                  <img className="rounded-full "
                    src={js} alt="" />
                </div>
              

              {/* BALL 3 */}
              <div
                className="  sm:w-[8vw] w-[20vw] h-[20vw] sm:h-[8vw] flex justify-center items-center overflow-hidden rounded-full
                              absolute bg-black backdrop-blur-3xl border border-green-400 shadow-xl shadow-green-500/30
                              sm:bottom-[-3.5vw] bottom-[-9vw] sm:left-[9vw] left-[15vw]"
                >
                  <img className="rounded-full "
                    src={node} alt="" />
              </div>

              {/* BALL 4 */}
              <div
                className=" sm:w-[8vw] w-[20vw] h-[20vw] sm:h-[8vw] flex justify-center items-center overflow-hidden rounded-full
                              absolute bg-black backdrop-blur-3xl border border-green-400 shadow-xl shadow-green-500/30
                              sm:bottom-[9vw] bottom-[15vw] sm:left-[20vw] left-[38vw]"
               >
                  <img className="rounded-full w-full"
                    src={mongodb} alt="" />
              </div>

             
            </motion.div>
          </motion.div>

          {/* ================= RIGHT CIRCLE ================= */}
         
         <motion.div 
              initial={{opacity:0 , y:60}}
              whileInView={{opacity:1 , y:0}}
              transition={{duration:1 , delay:0.4}}
          className="sm:w-[25vw] w-[50vw] h-[50vw]  sm:h-[25vw] sm:mt-0 mt-20 relative border-2 dark:border-white rounded-full">

            {/* ROTATING WRAPPER */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* BALL 1 */}
             <div className="sm:w-[8vw] w-[20vw] h-[20vw] sm:h-[8vw] flex justify-center items-center overflow-hidden rounded-full
                              absolute bg-black backdrop-blur-3xl border border-blue-600 shadow-xl shadow-cyan-500/30
                              sm:top-[-4vw] top-[-8vw] sm:left-[8vw] left-[14vw]"
                >
                  <img
                    className="w-[65%] h-[65%] object-contain"
                    src={tailwind}
                    alt="tailwind"
                  />
                </div>

              

              {/* BALL 2 */}
              <div
                className="sm:w-[8vw] bg-black w-[20vw] h-[20vw] sm:h-[8vw] flex justify-center items-center overflow-hidden rounded-full
                              absolute backdrop-blur-3xl border border-yellow-400 shadow-xl shadow-yellow-500/30
                              sm:top-[9vw] top-[14vw] sm:left-[-3.5vw] left-[-7vw]"
                  >
                  <img className="rounded-full "
                    src={mysql} alt="" />
                </div>
              

              {/* BALL 3 */}
              <div
                className="sm:w-[8vw] bg-black w-[20vw] h-[20vw] sm:h-[8vw] flex justify-center items-center overflow-hidden rounded-full
                              absolute  backdrop-blur-3xl border border-red-500 shadow-xl shadow-red-500/30
                              sm:bottom-[-3.5vw] bottom-[-7vw] sm:left-[9vw] left-[14vw]"
                >
                  <img className="rounded-full "
                    src={java} alt="" />
              </div>

              {/* BALL 4 */}
              <div
                className="sm:w-[8vw] w-[20vw] h-[20vw] sm:h-[8vw] flex justify-center items-center overflow-hidden rounded-full
                              absolute bg-black backdrop-blur-3xl border border-purple-600 shadow-xl shadow-purple-500/30
                              sm:bottom-[9vw] bottom-[14vw] sm:left-[20vw] left-[40vw]"
               >
                  <img className="rounded-full w-full"
                    src={net} alt="" />
              </div>

             
            </motion.div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
