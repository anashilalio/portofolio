import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallaxx = ({ type }) => {
  const ref = useRef();
  const {scrollYProgress } = useScroll({
    target:ref,
    offset:["start start" , "end start"]
  })
  const yText = useTransform(scrollYProgress, [0, 1], ["100%", "500%"]);
  const yPlanet = useTransform(scrollYProgress , [0 , 1] , ["0%" , "30%"])

  return (
    <div
      className="parallax relative overflow-hidden snap-center">
        <motion.h1 style={{ y: yText }} ref={ref}  className="text text-center text-6xl pt-20" > What we can do ?</motion.h1>

        
        <motion.img src="./public/public/planets.png" style={{ y: yPlanet }} className=" " alt="" />

        <img src="./public/public/mountains.png" alt="" className="absolute bottom-1 z-10"/>
        <motion.img style={{ x: yPlanet }} src="./public/public/stars.png" alt="" className="absolute bottom-1"/>

        
    </div>
  );
};

export default Parallaxx;