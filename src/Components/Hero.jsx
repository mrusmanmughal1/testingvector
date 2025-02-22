import React from "react";
import crupto from "../assets/hero/1.png";
import crupto2 from "../assets/hero/2.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="w-[90%] mx-auto py-20 flex">
      <div className="w-full lg:w-[60%]">
        <p className="   title_font mb-2">
          All In One Solution For your Crypto Needs Vector Hub
        </p>
        <p className="text-white text-base lg:text-xl py-4 lg:py-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
          possimus <br /> ut error quod quo distinctio ratione vel et incidunt
          quisquam!
        </p>
        {/* <div className="flex gap-4 lg:gap-8 items-center mt-4 Oxanium">
          <button className=" px-12 py-3 text-sm lg:text-base connect   border-white/5 border rounded-md text-white">
            Resgiter
          </button>
          <button className="btn-secondary text-sm lg:text-base  px-12 py-3    rounded-md text-white">
            Login
          </button>
        </div> */}
      </div>
      <div className="  relative  w-2 lg:w-[40%]">
        <div className="green-radient bottom-0 right-0"></div>

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
            window.innerWidth < 768 ?{
            y: [0, 300, 300, 0], // Moves from top to bottom and then left and back to top
            x: [0, 0, -700, 0],
          }:
        
        {
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
    </div>
  );
};

export default Hero;
