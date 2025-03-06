import React from "react";
import logo from "../assets/logo.png";
import crupto from "../assets/hero/1.png";
import crupto2 from "../assets/hero/2.png";
import { motion } from "framer-motion";
const VectorExchange = () => {
  return (
    <div className="border relative border-cyan-400 rounded-xl min-h-screen overflow-hidden  py-14 p-10">
      <div className=" hidden md:block green-radient top-80 left-0"></div>

      <div className="flex justify-between items-center  ">
        <div className="">
          <div className="title_font text-[50px] md:text-[122.62px]   !text-cyan-500">COMING SOON!</div>
          <p className="text-cyan-500 Oxanium text-xl md:text-4xl mt-8">Stay Tune with us!</p>
        </div>
        <div className="hidden md:block">
          <img src={logo} alt="" className="w-32 logo" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between  py-10">
        <div className="title_font text-3xl md:!text-7xl  w-full ">
          All Good Things <br /> Come To Those Who <br /> Wait...
        </div>
        <div className="  relative   w-full">
          <motion.img
            src={crupto}
            alt="Animated"
            className="max-w-[200px] sm:max-w-[300px]    h-auto absolute -bottom-32 -left-32 "
            animate={
              window.innerWidth < 768
                ? {
                    y: [-200, 250, -300, -200], // Moves from right top to left bottom, then left top, then back to right top
                    x: [300, -400, -500, 300],
                  }
                : {
                    y: [-200, 100, -150, -200], // Moves from right top to left bottom, then left top, then back to right top
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
            className="max-w-[200px] sm:max-w-[300px]   h-auto absolute -top-10 right-0"
            animate={
              window.innerWidth < 768
                ? {
                    y: [0, 200, 300, 0], // Moves from top to bottom and then left and back to top
                    x: [0, 0, -700, 0],
                  }
                : {
                    y: [0, 180, 200, 0], // Moves from top to bottom and then left and back to top
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
        <div className=" hidden md:block green-radient bottom-0 right-0"></div>
      </div>
    </div>
  );
};

export default VectorExchange;
