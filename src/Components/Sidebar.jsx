import React from "react";
import vector from "../assets/logo.png";
import { AiFillAppstore } from "react-icons/ai";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { NavLink } from "react-router-dom";
import user from "../assets/user.png";
import { IoIosArrowDown } from "react-icons/io";
import { BiCross } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ setnav }) => {
  return (
    <div className="">
      <div className="hidden md:block">
        <div className="relative border-cyan-400 border-b p-2 flex flex-col justify-center w-full items-center">
          <img src={vector} alt="" className="w-20 relative  " />

          <span className=" absolute bottom-0 -right-3 text-xl bg-cyan-400 logo  p-[6px] rounded-full">
            {" "}
            <MdOutlineKeyboardDoubleArrowLeft className="" />
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
          />
          <SidebarItem
            icon={<AiFillAppstore size={20} />}
            link="level-income"
            text="Level Income Details"
          />
          <SidebarItem
            icon={<AiFillAppstore size={20} />}
            link="indirect-income"
            text="Indirect Income Details"
          />
          <SidebarItem
            icon={<AiFillAppstore size={20} />}
            link="success-income"
            text="Success Income"
          />
          <SidebarItem
            icon={<AiFillAppstore size={20} />}
            link="interval-income"
            text="Interval Income"
          />
          <SidebarItem
            icon={<AiFillAppstore size={20} />}
            link="Vector-Exchange"
            text="Victor Exchange"
          />
          <SidebarItem icon={<AiFillAppstore size={20} />} text="Victor Coin" />
          <SidebarItem icon={<AiFillAppstore size={20} />} text="Gaming hub" />
          <SidebarItem icon={<AiFillAppstore size={20} />} text="Victor Apps" />
          <SidebarItem
            icon={<AiFillAppstore size={20} />}
            text="Victor Global"
          />
          <SidebarItem icon={<AiFillAppstore size={20} />} text="Roadmap" />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
export const SidebarItem = ({ icon, text, link }) => {
  return (
    <div className="admin-link">
      <NavLink to={link}>
        <div
          className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${"text-white hover:bg-gray-800 hover:text-gray-200"}`}
        >
          {icon}
          <span className="text-lg">{text}</span>
        </div>
      </NavLink>
    </div>
  );
};
