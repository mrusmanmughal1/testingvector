import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
 
import { RxCross1, RxCross2 } from "react-icons/rx";
import logo from "../assets/logo/vector.png";
import robot from "../assets/logo/robot.svg";
import Login from "./Login";
import { NavLink } from "react-router-dom";
const MobileNav = () => {
  const [navbar, ShowNavbar] = useState(false);
  const [connections, setconnections] = useState(false);

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
          <button
            onClick={() => setconnections(true)}
            className=" Oxanium  rounded px-8 lg:px-12 py-3 bg-orange-200 text-xs md:text-xs font-bold   connect"
          >
            Connect
          </button>
          <div className="rounded-full  mblbtn card  !bg-[#1E1825]">
            <NavLink to="/admin"
              onClick={() => {
                ShowNavbar(!navbar);
              }}
              className="flex   text-lg text-cyan-400"
            >
              {navbar ? <RxCross1 /> : <GiHamburgerMenu />}
            </NavLink>
          </div>
          {connections && (
            <div className="absolute  right-20 w-52    py-4 px-2 border border-cyan-400 rounded-xl z-[99999] top-20 bg-black ">
              <div className="flex px-1 justify-between items-center">
                <p className="text-white ">Connect Wallet</p>
                <p className=" rounded-full  p-[1px] bg-[#00B0C7]">
                  {" "}
                  <RxCross2 className="text-sm" onClick={() => setconnections(false)} />
                </p>
              </div>
              <Login
                // setAccountdata={setAccount}
                setconnections={setconnections}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
