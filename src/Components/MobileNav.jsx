import React, { useState } from "react";
import Logo from "./Logo";
import { BiCross } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCross } from "react-icons/cg";
import { FaCross } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/logo/vector.png";
import robot from "../assets/logo/robot.svg";
const MobileNav = () => {
  const [navbar, ShowNavbar] = useState(false);
  return (
    <div className=" block md:hidden">
      <div className="flex justify-between items-center px-4">
        <div className="relative  mt-10">
             <img
               src={robot}
               alt=""
               className="  absolute -top-8 md:-top-10 z-20 Veritical_wave  w-14  left- md:w-[100px] "
             />
             <img src={logo} alt="" className="logo  z-10 w-14 md:w-[120px]" />
           </div>
        <div className="flex items-center gap-4 ">
        <button className="   rounded px-8 lg:px-12 py-3 bg-orange-200 text-xs md:text-xs font-bold   connect">
              Connect
            </button>
          <div className="rounded-full  mblbtn card  !bg-[#1E1825]">
          <button
            onClick={() => ShowNavbar(!navbar)}
            className="flex   text-lg text-cyan-400"
          >
            {navbar ? <RxCross1 /> : <GiHamburgerMenu />}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
