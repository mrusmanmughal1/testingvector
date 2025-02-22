import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
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
            className="    
             
             bg-teal-900  rounded-full   p-14 py-5 
          
           
          "
          >
            <ul className="uppercase flex gap-8 text-white  ">
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
              <li>
                <NavLink to="/"> About</NavLink>
              </li>
              <li>
                <NavLink to="/"> FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/"> RoadMAp</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex gap-4 items-center  relative ">
            <button
              onClick={() => setconnections(!connections)}
              className="  cursor-pointer  rounded px-12 py-3 bg-orange-200 text-xs font-semibold   connect"
            >
              {account ? "account" : "Connect"}
            </button>
            <div className="rounded-full  w-10 h-10  overflow-hidden">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            {connections && (
              <div className="absolute   w-72 right-12 py-4 px-2 border border-cyan-400 rounded-xl top-12 bg-black/10 ">
                <div className="flex px-1 justify-between items-center">
                  <p className="text-white ">Connect Wallet</p>
                  <p className=" rounded-full  p-[1px] bg-[#00B0C7]">
                    {" "}
                    <RxCross2 className="text-sm" />
                  </p>
                </div>
                <Login
                  setAccountdata={setAccount}
                  setconnections={setconnections}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
