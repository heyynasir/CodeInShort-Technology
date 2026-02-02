import React from 'react'
import codeinshort from '../assets/codeinshort.png'
import map from '../assets/map.jpg'

const Footer = () => {

  const about = ["Planning" , "Research" , "Consulting" , "Analysis"]
  const services = ["Web Design" , "App Devlopment" , "Branding" , "Marketing"]

  return (
    <div className='w--full min-h-[40vh] dark:bg-[#000024] bg-zinc-300 dark:text-white text-black'>
        <hr className='text-zinc-600' />

        <div className='h-full w-full flex sm:flex-row flex-col '>
            <div className="left sm:w-[30vw] h-full  p-10 ">
                <img className='w-[80%]' src={codeinshort} alt="" />
                <hr className='mt-10' />
                <p className='mt-4'>We build innovative IT solutions that help businesses grow,
                   scale, and succeed in the digital world.</p>

            </div>

            <div className="center sm:w-[40vw] w-full sm:ml-0 ml-32 flex sm:flex-row flex-col justify-between pt-10 h-full sm:mt-6">
                <div>
                    <h1 className='text-[2rem] font-semibold'>About</h1>
                    {
                      about.map((item,index)=>(
                          <ul key={index} className='dark:text-zinc-400 list-disc '>
                              <li className='cursor-pointer ml-4 mt-1 text-sm hover:text-red-500 duration-300'> <a>{item}</a></li>
                          </ul>
                      ))
                    }
                </div>
               
                <div>
                    <h1 className='text-[2rem] font-semibold'>Services</h1>
                    {
                      services.map((item,index)=>(
                          <ul key={index} className='dark:text-zinc-400 list-disc'>
                              <li className='cursor-pointer ml-4 mt-1 text-sm hover:text-red-500 duration-300'> <a>{item}</a></li>
                          </ul>
                      ))
                    }
                </div>
                 <div>
                    <h1 className='text-[2rem] font-semibold'>Branches</h1>
                          <ul className='dark:text-zinc-400  list-disc'>
                              <li className='cursor-pointer ml-4 mt-1 text-sm hover:text-red-500 duration-300'>Nipani</li>
                              <li className='cursor-pointer ml-4 mt-1 text-sm hover:text-red-500 duration-300'>Pune</li>
                          </ul>
                </div>
                <div>
                    <h1 className='text-[2rem] font-semibold'>Contacts</h1>
                      <h3 className='dark:text-zinc-400 mt-1 text-sm'>Call : 99999999</h3>
                      <h3 className='dark:text-zinc-400 mt-1 text-sm'>Email : <br /> <a href="">codeinshort@gmail</a></h3>
                </div>

            </div>
            <div className="right flex items-center sm:mt-16 mt-10 sm:mb-0 mb-10 justify-center sm:w-[30vw] h-full">
              <img className='sm:w-[15vw] w-[50vw] cursor-pointer rounded-lg' src={map} alt="" />
            </div>
        </div>
                <hr className=' text-gray-500' />
        <div className='h-[10vh] sm:w-full w-[90vw] flex justify-center items-center bg-zinc-400 dark:bg-[#1101445d]'>
                <p className='sm:text-[0.8rem] sm:ml-0 ml-16 text-[0.7rem] '>Copyright. 2025-2026 Designed by <span className='text-blue-600 font-semibold'>
                    CodeinShort Technologies.</span> All rights reserved</p>
        </div>

    </div>
  )
}

export default Footer