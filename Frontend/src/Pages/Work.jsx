import React, { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, animate } from 'framer-motion'

const Work = () => {

  const ref = useRef(null)
  const isInView = useInView(ref) // ❌ once hata diya

  const exp = useMotionValue(0)
  const proj = useMotionValue(0)
  const client = useMotionValue(0)

  const [expVal, setExpVal] = useState(0)
  const [projVal, setProjVal] = useState(0)
  const [clientVal, setClientVal] = useState(0)

  useEffect(() => {

    if (isInView) {

      exp.set(0)
      proj.set(0)
      client.set(0)

      animate(exp, 3, {
        duration: 2,
        ease: "linear",
        onUpdate: v => setExpVal(Math.round(v))
      })

      animate(proj, 25, {
        duration: 2,
        ease: "linear",
        onUpdate: v => setProjVal(Math.round(v))
      })

      animate(client, 30, {
        duration: 2,
        ease: "linear",
        onUpdate: v => setClientVal(Math.round(v))
      })
    }

  }, [isInView])

  return (
    <div ref={ref} className='w-full p-5 min-h-[50vh]'>
      <h1 className='text-5xl font-semibold sm:mt-10 mt-16 text-center'>Work</h1>

      <div className='flex sm:flex-row flex-col w-full h-full justify-evenly sm:space-y-0 space-y-6 items-center mt-10'>

        <div className='sm:w-[20vw] w-[70vw] rounded-lg shadow-lg backdrop:blur-2xl shadow-gray-500 hover:scale-105 duration-300
          flex justify-center items-center gap-3 h-[20vh] bg-zinc-800'>
          <p className='text-6xl font-bold'>{expVal}+</p>
          <p className='font-semibold'>Years of <br /> Experience</p>
        </div>

        <div className='sm:w-[20vw] w-[70vw] rounded-lg shadow-lg backdrop:blur-2xl shadow-gray-500 hover:scale-105 duration-300
          flex justify-center items-center gap-3 h-[20vh] bg-zinc-800'>
          <p className='text-6xl font-bold'>{projVal}</p>
          <p className='font-semibold'>Project<br /> Completed</p>
        </div>

        <div className='sm:w-[20vw] w-[70vw] rounded-lg shadow-lg backdrop:blur-2xl shadow-gray-500 hover:scale-105 duration-300
          flex justify-center items-center gap-3 h-[20vh] bg-zinc-800'>
          <p className='text-6xl font-bold'>{clientVal}</p>
          <p className='font-semibold'>Happy <br /> Clients</p>
        </div>

      </div>
    </div>
  )
}

export default Work
