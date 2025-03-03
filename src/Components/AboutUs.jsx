import React from "react";
import main from "../assets/Aboutmain/1.png";

import bg from "../assets/Aboutmain/2.png";
import one from "../assets/about/4.png";
import to from "../assets/About/2.png";
import three from "../assets/About/3.png";
import fore from "../assets/About/1.png";
import five from "../assets/About/5.png";

const AboutUs = () => {
  const arr = [
    { icons: one, text: "Gaming on Victor Hub" },
    { icons: to, text: "⁠Trading on Victor Exchange" },
    { icons: three, text: "Purchasing Victor Coin" },
    { icons: fore, text: "Building a Team" },
    { icons: five, text: "⁠Investing in Victor Hub Slots" },
  ];
  return (
    <section id="about" className="flex justify-center items-center    flex-col text-white">
      <div className="title_font  mb-10">About Us</div>
      <div className=" space-y-7 text-md lg:text-2xl w-[90%]  lg:w-[70%] text-center ">
        <p>
          Victer hub is 100%  decenterlized platform which can not be controled by any person it is a automatic system which automatically controled by the blockchain and the blockchain chain is a chain of blocks and the block can not be broken so its clearly defined that it can't be hacked by any person you you have full security on your funds and wallets
        </p>


      </div>
      <div className="flex  gap-6  md:gap-32 lg:gap-20   w-[95%] md:w-[90%]  items-center md:items-end pb-0 pt-10  md:py-20">
        <div className="w-[50%] md:w-[40%] relative  ">
          <img src={bg} alt="" className="  w-full md:w-[650px] " />
          <img
            src={main}
            alt=""
            className="absolute w-[135px]   md:w-[450px] left-2 md:left-5 top-4 z-40 "
          />
          <div className="radient-effect hidden md:block "></div>
        </div>
        <div className="w-[70%] md:w-[60%] relative flex flex-col justify-end">
          <div className="radient-effect  hidden md:block right-0 top-20"></div>

          <p className="text-cyan-400 text-[8px] md:text-2xl pb-2 md:pb-10">
            We are provide you a best financial freedom in all type of <br /> activity for earning
          </p>
          <div className="grid gap-2 lg:gap-8 grid-cols-3 ">
            {arr.map((val, i) => {
              return (
                <div
                  key={i}
                  id="box"
                  className="flex  bg-slate-950 vector  aboutbox   justify-center rounded-md md:rounded-xl   gap-2 md:gap-4 flex-col items-center  md:p-5 md:py-14   p-2
                
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

    </section>
  );
};

export default AboutUs;
