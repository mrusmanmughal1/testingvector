import React from "react";
import crupto from "../assets/hero/1.png";
import crupto2 from "../assets/hero/2.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section id="main" className=" px-4 md:px-0 md:w-[90%] mx-auto overflow-hidden md:overflow-visible py-20 flex">
      <div className="w-full lg:w-[60%]">
        <p className="   title_font mb-2">
          Victor hub is only one <br/>solution for your <br/> financial needs
        </p>
        <p className="text-white text-base lg:text-xl py-4 w-full md:w-[60%]  ">
          The blockchain based decenterlized platform which can be   convert your
          dreams in to reality just open your slots and   earn the highest
          earning every second
        </p>
        
      </div>
      <div className="  relative  w-2 lg:w-[40%]">
        <div className=" hidden md:block green-radient bottom-0 right-0"></div>

        <motion.img
          src={crupto}
          alt="Animated"
          className="max-w-[200px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto absolute -bottom-32 -left-32 "
          animate={
            window.innerWidth < 768
              ? {
                  y: [-200, 250, -300, -200], // Moves from right top to left bottom, then left top, then back to right top
                  x: [300, -400, -500, 300],
                }
              : {
                  y: [-200, 250, -300, -200], // Moves from right top to left bottom, then left top, then back to right top
                  x: [300, -400, -500, 300],
                }
          }
          transition={{
            duration: window.innerWidth < 768 ? 16 : 18, // Total duration for one loop
            repeat: Infinity, // Infinite loop
            ease: "easeInOut", // Smooth transition
          }}
        />

        <motion.img
          src={crupto2}
          alt="Animated"
          className="max-w-[200px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] h-auto absolute -top-10 right-0"
          animate={
            window.innerWidth < 768
              ? {
                  y: [0, 300, 300, 0], // Moves from top to bottom and then left and back to top
                  x: [0, 0, -700, 0],
                }
              : {
                  y: [0, 300, 300, 0], // Moves from top to bottom and then left and back to top
                  x: [0, 0, -700, 0],
                }
          }
          transition={{
            duration: window.innerWidth < 768 ? 12 : 14, // Total duration for one loop
            repeat: Infinity, // Infinite loop
            ease: "easeInOut", // Smooth transition
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
