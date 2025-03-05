import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import { RxCross2 } from "react-icons/rx";
import user from "../assets/User.svg";
const Header = ({ activeLink, handleLinkClick }) => {
  const [connections, setconnections] = useState(false);
  const [account, setAccount] = useState(null);
  useEffect(() => {
    handleLinkClick("main"); // This will highlight the 'Home' link when the page loads
  }, [handleLinkClick]);
  
  return (
    <section id="/" className="hidden md:block">
      {/* ends  */}




      <div className="w-[90%] mx-auto flex items-center   Oxanium">
        <div className="w-full">
          <Logo />
        </div>
        <div className="w-full  z-10 card ">
          <div
            className="bg-teal-950  rounded-full  flex justify-center  p-14 py-5 "
          >
            <ul className="uppercase flex gap-8 text-white font-thin  Oxanium">
              <li>
                <a
                  href="#main"
                  onClick={() => handleLinkClick("main")}
                  className={`p-2 ${activeLink === "main" ? "text-cyan-500 font-semibold " : ""
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
                  className={`p-2 ${activeLink === "about" ? "text-cyan-500 font-semibold" : ""
                    }`}
                >
                  {" "}
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleLinkClick("faq")}
                  className={`p-2 ${activeLink === "faq" ? "text-cyan-500 font-semibold" : ""
                    }`}
                  href="#faq"
                >
                  {" "}
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className={`p-2 ${activeLink === "roadmap"
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
          <div className="flex gap-4 items-center   relative   ">
            <appkit-button  label="Connect" size="sm"
            
            className="cursor-pointer  rounded     font-semibold   py-2  connect" />

            {/* <button
              onClick={() => setconnections(!connections)}
              className="  cursor-pointer  rounded px-12 py-3   text-xs font-semibold   connect"
            >
              {account ? "account" : "Connect"}
            </button> */}
            <div className="rounded-full  w-14 h-14  overflow-hidden">
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
    </section>
  );
};

export default Header;
