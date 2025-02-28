import React from "react";
import main from "../assets/Aboutmain/1.png";

import bg from "../assets/Aboutmain/2.png";
import one from "../assets/Aboutmain/Feature Icons (1).png";
import to from "../assets/Aboutmain/Feature Icons (2).png";
import three from "../assets/Aboutmain/Feature Icons (3).png";
import fore from "../assets/Aboutmain/Feature Icons (4).png";
import five from "../assets/Aboutmain/Feature Icons (5).png";
import six from "../assets/Aboutmain/Feature Icons.png";
import { FaSearch } from "react-icons/fa";

const AboutUs = () => {
  const arr = [
    { icons: six, text: "High quality 3D generated art" },
    { icons: one, text: "Wholesome community" },
    { icons: to, text: "Metaverse Integration" },
    { icons: three, text: "Utility token" },
    { icons: fore, text: "Royalities to be finalized" },
    { icons: five, text: "Private marketplace" },
  ];
  return (
    <div className="flex justify-center items-center   flex-col text-white">
      <div className="title_font  mb-10">About Us</div>
      <div className=" space-y-7 text-xl lg:text-2xl w-[90%]  lg:w-[70%] text-center ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          excepturi porro beatae dolorum quae fuga odio culpa ullam assumenda
          error.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          excepturi porro beatae dolorum quae fuga odio culpa ullam assumenda
          error.
        </p>
      </div>
      <div className="flex  gap-6  md:gap-32 lg:gap-20   w-[95%]  items-center md:items-end pb-0 pt-10  md:py-20">
        <div className="w-[30%] md:w-[40%] relative  ">
          <img src={bg} alt="" className="  w-full md:w-[550px] " />
          <img
            src={main}
            alt=""
            className="absolute w-[135px]   md:w-[480px] left-2 md:left-5 top-4 z-40 "
          />
          <div className="radient-effect hidden md:block "></div>
        </div>
        <div className="w-[70%] md:w-[60%] relative flex flex-col justify-end">
          <div className="radient-effect  hidden md:block right-0 top-20"></div>

          <p className="text-cyan-400 text-[6px] md:text-2xl pb-2 md:pb-10">
            Lorem ipsum dolor sit amet.
          </p>
          <div className="grid gap-2 lg:gap-8 grid-cols-3">
            {arr.map((val, i) => {
              return (
                <div
                  key={i}
                  id="box"
                  className="flex details-slot vector    justify-center rounded-md md:rounded-xl featured_card gap-2 md:gap-4 flex-col items-center lg:p-7 lg:py-14   p-2
                
                "
                >
                  <img src={val.icons} alt="" className="w-4 lg:w-12 " />
                  <p className=" text-[5px] md:text-sm lg:text-md text-center">
                    {val.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="w-[90%]  lg:w-[80%] mx-auto bg-neutral-800   vector   p-10 mt-10 rounded-xl   flex justify-center flex-col items-center gap-4">
        <p className="text-2xl lg:text-5xl font-semibold text-center Oxanium">
          Ready for next <br /> Victor?
        </p>
        <div className="flex w-full lg:w-1/3 items-center border p-1 rounded-md border-cyan-300/40">
          <input
            type="text"
            name=""
            id=""
            className="w-full p-3 text-xs"
            placeholder="Search a user profile by adding its ID"
          />
          <button className=" rounded-lg  p-4 text-black bg-cyan-300">
            <FaSearch />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
