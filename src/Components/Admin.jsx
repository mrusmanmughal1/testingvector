import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { IoSearch } from "react-icons/io5";
import user from "../assets/user.png";
import { IoIosArrowDown } from "react-icons/io";
import { Outlet, useLocation } from "react-router-dom";
import vector from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { BiEdit, BiShare } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { FaShareFromSquare } from "react-icons/fa6";
const Admin = () => {
  const [navbar, ShowNavbar] = useState(false);
  const [arrow, setarrow] = useState(false);
  const [profile, Showprofile] = useState(false);


  const { pathname } = useLocation();
  useEffect(() => {
    ShowNavbar(false);
  }, [pathname]);
  return (
    <div className="relative">

      <div className="block md:hidden">
        <div className="flex justify-between  border-b border-[#01B0C7]/70 pb-2 w-full items-center px-4">
          <div className="">
            <img src={vector} alt="" className=" w-14 relative  " />
          </div>
          <div className="relative flex items-center gap-2 bg-teal-950 p-3 border-[#01B0C7] border rounded-md">
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
                className="flex   text-lg text-cyan-500"
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
          className={` w-full   top-0 ${arrow ? "md:w-[5%]" : "md:w-[20%]"} ${navbar ? "right-0" : "-right-[100%] md:left-0"
            } duration-1000 bg-neutral-900 z-[9999] min-h-full md:min-h-screen md:fixed top-0`}
        >
          <Sidebar setnav={ShowNavbar} setarrow={setarrow} arrow={arrow} />
        </div>
        {/* sidebar end */}

        <div className={`w-full relative ${arrow ? "ml-[5%]" : "ml-[20%]"} flex flex-col`}>
          {profile && <div className="absolute z-[999999] top-14 md:top-20   w-72 right-20 md:right-12 py-4 px-2 border border-cyan-400 rounded-xl  bg-gray-900 ">
            <div className="flex px-1 justify-between items-center">
              <p className="text-white  font-bold ">Profile</p>
              <p className=" rounded-full  p-[1px] bg-[#00B0C7]">
                {" "}
                <RxCross2 className="text-sm" />
              </p>
            </div>
            <div className=" border rounded-lg p-2 mt-4 border-cyan-500 bg-cyan-950">
              <div className="flex  justify-between ">
                <div className="flex items-center gap-2 ">
                  <div className="h-8 w-8">
                    <img src={user} />
                  </div>
                  <div className="text-sm text-white w-full">
                    <p>Wade Warren</p>
                    <div className="flex items-center  w-full  gap-4 justify-between">
                      <p className="text-[9px]">Upline ID #2311231</p>
                    </div>
                  </div>
                </div>
                <BiEdit className="text-white" />
              </div>
            </div>
            <div className=" border   flex items-center gap-2 text-white rounded-lg p-2 mt-4 border-cyan-500 bg-cyan-950">
              <FiShare2 /> Share
            </div>
            <div className=" border flex items-center text-sm   gap-2 text-white rounded-lg p-2 mt-4 border-cyan-500 bg-cyan-950">
              <FaShareFromSquare /> Logout
            </div>

          </div>}
          {/* header */}
          <div className="hidden md:block sticky top-0 bg-[#1F2020]  z-[9998] ">
            <div className="flex  justify-between items-center p-5 border-b border-cyan-500/70">
              <h1 className="admin_title_font text-white">Dashboard</h1>
              <div className="flex items-center gap-4">
                <div className="relative flex items-center gap-2 bg-teal-950 p-4 border-cyan-500 border rounded-md">
                  <IoSearch className="      text-gray-400  " />
                  <input
                    placeholder="Search User ID"
                    className="w-64 bg-transparent outline-none text-sm  text-white"
                  />
                </div>
                <div className="flex items-center gap-2   relative rounded-md px-4 py-2 border border-cyan-500">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8">
                      <img src={user} />
                    </div>
                    <div className="text-sm text-white">
                      <p>Wade Warren</p>
                      <div className="flex items-center  gap-4 justify-between">
                        <p className="text-[9px]">Upline ID #2311231</p>
                        <IoIosArrowDown onClick={() => Showprofile(!profile)} className={`cursor-pointer ${profile ? "rotate-180" : ""}`} />
                      </div>
                    </div>
                  </div>
                  {/* login box  */}


                </div>
              </div>
            </div>
          </div>
          {/* header end  */}
          <div className=" flex-1 overflow-y-auto md:p-6 p-2  relative">
            <div className=" hidden md:block radient-effect  top-96"></div>
            <div className=" hidden md:block green-radient  top-96 left-[50%]"></div>
            <div className=" hidden md:block green-radient  top-[60%] left-[50%]"></div>



            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
