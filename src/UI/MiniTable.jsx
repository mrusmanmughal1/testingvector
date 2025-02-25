import React from "react";
import { FaAngleDown } from "react-icons/fa";

const MiniTable = ({ TableHeaders, data, title }) => {
  return (
    <>
      <div className="flex justify-between items-center pe-2">
        <h1 className="admin_title_font text-white  py-3 ps-2 md:py-6 ">
          {title}
        </h1>
        <div className="">
          <button className="connect text-sm px-6 rounded-md flex items-center gap-2 py-1">
            {" "}
            Filter <FaAngleDown />{" "}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto     relative rounded-xl border-2 border-cyan-500/50  border-cyan-300">
        <table className="w-full Oxanium  border-collapse">
          <thead className="w-full">
            <tr className=" text-cyan-400  text-xs w-full ">
              {TableHeaders.map((val, i) => {
                return (
                  <th
                    key={i}
                    className="text-center py-3 px-2 md:px-4 border border-cyan-400    font-medium"
                  >
                    {val}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className=" text-xs md:text-base">
            {data.map((slot, index) => (
              <tr
                key={index}
                className="border border-cyan-300  text-gray-400   hover:bg-cyan-950/30 transition-colors"
              >
                <td className="py-3 text-center border border-cyan-400 px-4 text-white">
                  {slot.slot}
                </td>
                <td className="py-3 text-center px-4 text-white border border-cyan-400 ">
                  {slot.status}
                </td>
                <td className="py-3 text-center px-4 text-white border border-cyan-400 ">
                  ${slot.amount}
                </td>
                <td className="py-3 text-center px-4 text-white border border-cyan-400 ">
                  {slot.members}
                </td>
                <td className="py-3 text-center px-4 text-white border border-cyan-400 ">
                  Claimed
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
