import React, { useState } from "react";
import vector from "../assets/logo.png";
import { AiFillAppstore, AiOutlineAppstoreAdd, AiOutlineDollar, AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { NavLink } from "react-router-dom";
import user from "../assets/user.png";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { ImBoxAdd } from "react-icons/im";
import { FaBitcoin, FaCoins } from "react-icons/fa";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { GrGamepad } from "react-icons/gr";
import { BiMapPin } from "react-icons/bi";
import { RiHandCoinFill } from "react-icons/ri";
const Sidebar = ({ setnav, setarrow, arrow }) => {
  return (
    <div className="">
      <div className="hidden md:block">
        <div className="relative border-[#01B0C7]/70 border-b p-2 flex flex-col justify-center w-full items-center">
          <img src={vector} alt="" className="w-20 relative  " />

          <span className={`${arrow ? "rotate-180 text-sm   " : "text-xl"}   absolute bottom-0 -right-3  bg-cyan-400 logo  p-[6px] rounded-full`} onClick={() => setarrow(!arrow)}>
            {" "}
            <MdOutlineKeyboardDoubleArrowLeft />
          </span>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex m-2">
          <button
            onClick={() => setnav(false)}
            className=" text-xl  bg-cyan-400 rounded-full"
          >
            <RxCross2 />
          </button>
        </div>
        <div className="flex items-center gap-2  w-[80%] px-5 mx-auto  rounded-md p-2 border border-cyan-400">
          <div className="flex items-center gap-5 w-full">
            <div className="h-8 w-8">
              <img src={user} />
            </div>
            <div className="text-sm text-white w-full">
              <p>Wade Warren</p>
              <div className="flex items-center w-full  gap-4 justify-between">
                <p className="text-[9px]">Upline ID #2311231</p>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-4">
        <nav className="space-y-2">
          <SidebarItem
            icon={<AiFillAppstore size={20} />}
            text="Dashboard"
            link="dashboard"
            arrow={arrow}
          />
          <SidebarItem
            icon={<ImBoxAdd size={20} />}
            link="level-income"
            text="Level Income Details"
            arrow={arrow}

          />
          <SidebarItem
            icon={<FaCoins size={20} />}
            link="indirect-income"
            text="Indirect Income Details"
            arrow={arrow}

          />
          <SidebarItem
            icon={<FaDiagramSuccessor size={20} />}
            link="success-income"
            text="Success Income"
            arrow={arrow}

          />
          <SidebarItem
            icon={<RiHandCoinFill size={20} />}
            link="interval-income"
            text="Interval Income"
            arrow={arrow}

          />
          <SidebarItem
            icon={<FaBitcoin size={20} />}
            link="Vector-Exchange"
            text="Victor Exchange"
            arrow={arrow}

          />
          <SidebarItem icon={<AiOutlineDollar size={20} />} text="Victor Coin"
            link="Victor"
            arrow={arrow}


          />
          <SidebarItem icon={<GrGamepad size={20} />} text="Victor hub"
            link="Victor"
            arrow={arrow}


          />
          <SidebarItem icon={<AiOutlineAppstoreAdd size={20} />} text="Victor Apps"
            link="Victor"
            arrow={arrow}


          />
          <SidebarItem
            icon={<AiOutlineGlobal size={20} />}
            text="Victor Global"
            link="Victor"
            arrow={arrow}


          />
          <SidebarItem icon={<BiMapPin size={20} />} text="Roadmap"
            arrow={arrow}
            link="Victor"


          />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
export const SidebarItem = ({ icon, text, link, arrow }) => {
  return (
    <div className="admin-link">
      <NavLink to={link}>
        <div
          className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${"text-white hover:bg-gray-800 hover:text-gray-200"}`}
        >
          {icon}
          {!arrow && <span className="">{text}</span>}
        </div>
      </NavLink>
    </div>
  );
};
