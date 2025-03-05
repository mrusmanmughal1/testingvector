import React from "react";
import main from "../assets/Aboutmain/1.svg";

import bg from "../assets/Aboutmain/2.png";
import one from "../assets/about/4.png";
import to from "../assets/About/2.png";
import three from "../assets/About/3.png";
import fore from "../assets/About/1.png";
import five from "../assets/About/5.png";
import r from "../assets/AboutMain/r.png"
import b from "../assets/AboutMain/bot.png"


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
      <div className=" space-y-7 text-md  text-[15px]  lg:text-3xl w-[85%] my-4  lg:w-[70%] text-center ">
        <p className="md:leading-[3rem] Lato" >
          Victer hub is 100%  decenterlized platform which can not be controled by any person it is a automatic system which automatically controled by the blockchain and the blockchain chain is a chain of blocks and the block can not be broken so its clearly defined that it can't be hacked by any person you you have full security on your funds and wallets
        </p>


      </div>
      <div className="flex  gap-0    lg:gap-0   w-[90%]   items-center md:items-end pb-0 pt-10  md:py-20">
        <div className="w-[50%] md:w-[40%] relative md:p-10 ">
          <div className="absolute  left-5 top-2 block md:hidden">
            <img src={b} alt="" className="bg-slate-950/50 rounded-lg" />

          </div>
          <div className="block md:hidden" >
            <img src={r} alt="" className="  " />

          </div>

          <img src={bg} alt="" className="  hidden md:block absolute -z-10 md:-left-4  w-[145px] md:w-auto  h-[147px] md:h-auto" />

          <img
            src={main}
            alt=""
            className="  relative hidden md:block  md:top-10 w-[144px]  h-[169px] md:h-auto vector  bg-slate-950/50 md:w-auto  rounded-lg md:rounded-3xl  z-40 "
          />
          <div className="radient-effect hidden md:block "></div>
        </div>
        <div className="w-[50%] md:w-[60%] relative flex flex-col justify-end">
          <div className="radient-effect  hidden md:block right-0 top-20"></div>

          <p className="text-cyan-400 text-[7px] md:text-3xl pb-2 md:pb-10 mb-1 Lato">
            We are provide you a best financial freedom in all type of <br /> activity for earning
          </p>
          <div className="grid gap-2 lg:gap-6  grid-cols-3  items-center">
            {arr.map((val, i) => {
              return (
                <div
                  key={i}
                  id="box"
                  className="flex  w-[54px] h-[48px]  md:h-[230px] md:w-[260px] bg-slate-950 vector  aboutbox   justify-center rounded-md md:rounded-xl   gap-1 md:gap-4 flex-col items-center     p-2
                
                "
                >
                  <img src={val.icons} alt="" className="w-3 lg:w-16 " />
                  <p className=" text-[5px] md:text-sm lg:text-xl text-center py-1 md:py-6 md:px-3">
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
