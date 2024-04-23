import React from 'react'
import { motion } from 'framer-motion';
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  animate: {
    x: "-220%", // move from right to left
    transition: {
        x: {
            repeat: Infinity, // repeat the animation indefinitely
            duration: 20, // duration of the animation
            ease: "linear" // constant speed
        }
    }
}
};
export const Hero = () => {
  return (
    <div className='ov snap-center'>
      <motion.div variants={sliderVariants}
        initial="initial"
        animate="animate" className=' absolute bottom-0 opacity-10 ' style={{fontSize:"300px" , whiteSpace:'nowrap'}}>
               <motion.h1 className='text-white'> Write Content Creator Lover GG </motion.h1>
            </motion.div>
        <div className="description flex items-center justify-between h-screen relative ">
            <motion.div  variants={textVariants}
          initial="initial"
          animate="animate" className="heroContent space-y-4 ">
                <motion.h2 variants={textVariants} className='text-violet-700 font-mono text-4xl'>ANAS EL HILALI</motion.h2>
                <motion.h1 variants={textVariants} className='text-8xl'>FRONT END DEV</motion.h1>
                <div className="button space-x-6">
                    <button className='border rounded-md p-2'>See the latest work</button>
                    <button className='text-black bg-slate-100 p-2 rounded-md'>Contact Me</button>
                </div>
                <motion.div className=" ">
                  <motion.img  variants={textVariants}
            animate="scrollButton"
            src="./public/public/scroll.png"
            alt="" />
                </motion.div>
            </motion.div>
            <div className="photo h-screen">
            <img src="./public/public/hero.png" alt="" className='flex h-full'/>

            </div>
            
        </div>
        
    </div>
  )
}
export default Hero