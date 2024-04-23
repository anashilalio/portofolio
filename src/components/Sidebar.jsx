import { motion } from "framer-motion";
import { useState } from "react";
import React  from 'react'

export const Sidebar = () => {
    const [active , setActive] = useState(true);
    
  return (
    <motion.div className={active ? 'fixed top-0 left-0  w-40 h-screen z-30'
:"fixed bg-white top-0 left-0 w-40 h-screen z-30"}
        animate={{clipPath:active? "circle(25px at 20% 5%)": "circle(100% at 50% 50%)" }}
         // animate rotation
         
        transition={{type: "spring",
        stiffness: 20}}
        >
        <motion.div onClick={()=>(setActive(prev=>!prev))}
        className={
            active ?
            ' relative  bg-white w-10 h-10 ml-4 mt-2 rounded-full pt-2 cursor-pointer':
            "relative   w-10 h-10 ml-4 mt-2 rounded-full pt-2 cursor-pointer"

        }
       
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
        >
            {
                active?
                (<>
                <div className='bg-black w-4 h-1  m-auto'></div>
                <div className='bg-black w-4 h-1 mt-1 m-auto'></div>
                
                <div className='bg-black w-4 h-1 mt-1 m-auto'></div></>):
                 <>
                  <div className='bg-black w-8 h-1   m-auto -rotate-45 mt-2 ' ></div>
                  <div className='bg-black w-8 h-1  m-auto rotate-45 -mt-1 '></div>

                 </>

            }
                

        </motion.div>
    </motion.div>
    
  )
}
export default Sidebar