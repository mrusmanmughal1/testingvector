import React from "react";
import crupto from "../assets/hero/1.png";
import crupto2 from "../assets/hero/2.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section  className=" px-4 md:px-0 md:w-[90%] mx-auto overflow-hidden md:overflow-visible pt-32 pb-20 flex">
      <div className="w-full lg:w-[75%]">
        <p className=" capitalize   title_font mb-2">
          Victor hub is only one <br/>solution for your <br/> financial needs
        </p>
        <p className="text-white text-base Lato lg:text-xl py-4 w-full md:w-[65%] capitalize  ">
        The blockchain based decentralized platform which can be convert your dreams in to reality just open your slots and earn the highest earning every second
        </p>
        
      </div>
      <div className="  relative  w-2 lg:w-[40%]">
        <div className=" hidden md:block green-radient bottom-0 right-0"></div>

        {/* <motion.img
          src={crupto}
          alt="Animated"
          className="max-w-[150px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto absolute -bottom-32 -left-32 "
          animate={
            window.innerWidth < 768
              ? {
                x: [-100, 100, -100, -100],  
                y: [0, -40, -100, 0],
                }
              : {
                  y: [-200, 250, -300, -200], 
                  x: [300, -400, -500, 300],
                }
          }
          transition={{
            duration: window.innerWidth < 768 ? 14 : 18,  
            repeat: Infinity,  
            ease: "easeInOut", 
          }}
        />

        <motion.img
          src={crupto2}
          alt="Animated"
          className="max-w-[150px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto absolute -top-10 right-0"
          animate={
            window.innerWidth < 768
              ? {
                y: [0, 0, 200, 0],    
                x: [0, -300, -300, 0]  
              }
              
              : {
                  y: [0, 300, 300, 0], 
                  x: [0, 0, -700, 0],
                }
          }
          transition={{
            duration: window.innerWidth < 768 ? 16 : 14,  
            repeat: Infinity, 
            ease: "easeInOut",  
          }}
        /> */}
      </div>
    </section>
  );
};

export default Hero;
