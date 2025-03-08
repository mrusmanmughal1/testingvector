import React from "react";
import { FaAngleDown } from "react-icons/fa";

const MiniTable = ({ TableHeaders, data, title ,fs="text-[12px] md:text-[22px]" }) => {
  return (
    <>
      <div className="flex justify-between items-center pe-2">
        <h1 className="admin_title_font text-white  py-3 ps-2 md:py-6 ">
          {title}
        </h1>
        <div className="">
          <button className=" bg-gradient-to-r from-teal-700 to-cyan-600 text-white text-lg px-7 rounded-2xl flex items-center Oxanium gap-2 py-1 md:py-2">
            
            Filter <FaAngleDown />
          </button>
        </div>
      </div>
      <div className="overflow-x-auto     relative rounded-xl border-2 border-cyan-500/50  border-cyan-300">
        <table className="w-full Oxanium  border-collapse">
          <thead className="w-full">
            <tr className={` text-cyan-400  ${fs} w-full `}>
              {TableHeaders.map((val, i) => {
                return (
                  <th
                    key={i}
                    className="text-center py-3 px-2 md:px-3 border border-cyan-500    font-medium"
                  >
                    {val}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className=" text-[12px] md:text-[20px] md:text-base">
            {data.map((slot, index) => (
              <tr
                key={index}
                className="border border-cyan-300  text-gray-400   hover:bg-cyan-950/30 transition-colors"
              >
                <td className="py-3 text-center border border-cyan-400 px-0 md:px-4 text-white">
                  {slot.slot}
                </td>
                <td className="py-3 text-center px-0 md:px-4 text-white border border-cyan-400 ">
                  {slot.status}
                </td>
                <td className="py-3 text-center px-0 md:px-4 text-white border border-cyan-400 ">
                  ${slot.amount}
                </td>
                <td className="py-3 text-center px-0 md:px-4 text-white border border-cyan-400 ">
                  {slot.members}
                </td>
                 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MiniTable;
