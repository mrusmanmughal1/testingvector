import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { IoSearch } from "react-icons/io5";
import user from "../assets/user.png";
import { IoIosArrowDown } from "react-icons/io";
import { Outlet, useLocation } from "react-router-dom";
import vector from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

import { RxCross1, RxCross2 } from "react-icons/rx";
const Admin = () => {
  const [navbar, ShowNavbar] = useState(false);
  const [arrow, setarrow] = useState(false)

  const { pathname } = useLocation();
  useEffect(() => {
    ShowNavbar(false);
  }, [pathname]);
  return (
    <div className="relative">
      <div className="block md:hidden">
        <div className="flex justify-between  border-b border-cyan-400/55 pb-2 w-full items-center px-4">
          <div className="">
            <img src={vector} alt="" className=" w-14 relative  " />
          </div>
          <div className="relative flex items-center gap-2 bg-teal-950 p-3 border-cyan-400 border rounded-md">
            <IoSearch className="      text-gray-400  " />
            <input
              placeholder="Search User ID"
              className=" bg-transparent outline-none text-xs md:text-sm  text-white"
            />
          </div>
          <div className="">
            <div className="rounded-full  mblbtn card  !bg-[#1E1825]">
              <button
                onClick={() => {
                  ShowNavbar(!navbar);
                }}
                className="flex   text-lg text-cyan-400"
              >
                {navbar ? <RxCross1 /> : <GiHamburgerMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full">
        {/* sidebar */}
        <div
          className={`fixed w-full md:w-[20%] top-0 ${arrow ? "md:w-[5%]" : "md:w-[20%]"} ${navbar ? "right-0" : "-right-[100%] md:right-0"
            } duration-1000 bg-black z-[9999] min-h-full md:min-h-screen sticky top-0`}
        >
          <Sidebar setnav={ShowNavbar} setarrow={setarrow} arrow={arrow} />
        </div>
        {/* sidebar end */}

        <div className="w-full  flex flex-col">
          {/* header */}
          <div className="hidden md:block sticky top-0 bg-[#1F2020]  z-[9998] ">
            <div className="flex  justify-between items-center p-5 border-b border-cyan-400">
              <h1 className="admin_title_font text-white">Dashboard</h1>
              <div className="flex items-center gap-4">
                <div className="relative flex items-center gap-2 bg-teal-950 p-4 border-cyan-400 border rounded-md">
                  <IoSearch className="      text-gray-400  " />
                  <input
                    placeholder="Search User ID"
                    className="w-64 bg-transparent outline-none text-sm  text-white"
                  />
                </div>
                <div className="flex items-center gap-2   rounded-md px-4 py-2 border border-cyan-400">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8">
                      <img src={user} />
                    </div>
                    <div className="text-sm text-white">
                      <p>Wade Warren</p>
                      <div className="flex items-center  gap-4 justify-between">
                        <p className="text-[9px]">Upline ID #2311231</p>
                        <IoIosArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* header end  */}
          <div className=" flex-1 overflow-y-auto md:p-6 p-2 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
