import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import { RxCross2 } from "react-icons/rx";
import user from "../assets/user.png";
const Header = ({ activeLink, handleLinkClick }) => {
  const [connections, setconnections] = useState(false);
  const [account, setAccount] = useState(null);

  return (
    <div className="hidden md:block">
      {/* ends  */}

 


      <div className="w-[90%] mx-auto flex items-center   Oxanium">
        <div className="w-full">
          <Logo />
        </div>
        <div className="w-full  z-10 card ">
          <div
            className="bg-teal-950  rounded-full  flex justify-center  p-14 py-5 "
          >
            <ul className="uppercase flex gap-8 text-white  ">
              <li>
                <a
                  href="#main"
                  onClick={() => handleLinkClick("main")}
                  className={`p-2 ${
                    activeLink === "main" ? "text-cyan-500 font-semibold " : ""
                  }`}
                >
                  {" "}
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleLinkClick("about")}
                  href="#about"
                  className={`p-2 ${
                    activeLink === "about" ? "text-cyan-500 font-semibold" : ""
                  }`}
                >
                  {" "}
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleLinkClick("faq")}
                  className={`p-2 ${
                    activeLink === "faq" ? "text-cyan-500 font-semibold" : ""
                  }`}
                  href="#faq"
                >
                  {" "}
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className={`p-2 ${
                    activeLink === "roadmap"
                      ? "text-cyan-500 font-semibold"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("roadmap")}
                  href="#roadmap"
                >
                  {" "}
                  RoadMAp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex gap-4 items-center   relative head ">
            <appkit-button className="cursor-pointer  rounded    text-xs font-semibold hover:connect   connect" />

            {/* <button
              onClick={() => setconnections(!connections)}
              className="  cursor-pointer  rounded px-12 py-3   text-xs font-semibold   connect"
            >
              {account ? "account" : "Connect"}
            </button> */}
            <div className="rounded-full  w-10 h-10  overflow-hidden">
              <NavLink to="admin/dashboard">
                <img
                  src={user}
                  alt="user image"
                  className="w-full h-full object-contain"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
