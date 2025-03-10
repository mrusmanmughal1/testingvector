import React from "react";
import { BiLock } from "react-icons/bi";
import loc from "../assets/dashboard/lock.png"
const AdminTotalSlots = () => {
  return (
    <div className="min-h-screen    ">
      <div className="  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Slot 1 */}
        <div className="relative rounded-2xl border-4 border-cyan-500/80 bg-black md:bg-transparent  pb-16 md:pb-2 p-2 overflow-hidden">
          <div className="flex border-b border-cyan-500 justify-between  pb-4 text-lg md:text-2xl items-start mb-6">
            <h2 className=" Oxanium font-semibold text-white">Slot 1</h2>
            <span className="text-cyan-500   font-medium Oxanium">$05</span>
          </div>

          <div className="grid grid-cols-2 gap-2 border-b md:border-none border-b-cyan-700 pb-3 md:pb-0 lato text-base mb-8">
            <div>
              <span className="text-white font-semibold">Total Users: </span>
              <span className="text-cyan-500">50</span>
            </div>
            <div className="text-end pe-3">
              <span className="text-white">Direct Team: </span>
              <span className="text-cyan-500">50</span>
            </div>
            <div>
              <span className="text-white">Complete Cycle: </span>
              <span className="text-cyan-500">01</span>
            </div>
            <div className="text-end">
              <span className="text-white">Indirect Team: </span>
              <span className="text-cyan-500">01</span>
            </div>
          </div>

          {/* Network Visualization */}
          <div className="relative  space-y-6 ">
            {/* Top Level */}

            {/* Second Level */}
            <div className="       transform  flex justify-between  md:px-[20%]">
              <div className="w-5 h-6 md:w-10  md:h-12  rounded-[50%]  border-2 border-cyan-500"></div>

              <div className="w-5 h-6 md:w-10  md:h-12  rounded-[50%] border-2 border-cyan-500"></div>
            </div>

            {/* Third Level */}
            <div className="     flex justify-between  px-3 md:px-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-5 md:w-8 md:h-10 rounded-[50%] border-2 border-cyan-500"
                ></div>
              ))}
            </div>

            {/* Bottom Level */}
            <div className="     flex justify-between space-x-2 ">
              {[...Array(18)].map((_, i) => (
                <>
                  <div
                    key={i}
                    className="w-2 h-3 md:w-5 md:h-6 rounded-[50%] border-2 border-cyan-500"
                  ></div>
                  {(i + 1) % 3 === 0 && i !== 17 && <div className="w-[1px]"></div>}
                </>
              ))}
            </div>
          </div>
        </div>

        {/* Slot 2 */}
        <div className="relative rounded-2xl border-4 border-cyan-500/80 bg-black md:bg-transparent   p-2">
          <div className="flex absolute  w-full h-full   items-center justify-center ">
            <div className="
           bg-gradient-to-r from-teal-700 to-cyan-600
            px-16 py-3 text-lg    text-white rounded-full transition-colors  
            ">
              <button className="Oxanium">
                Activate
              </button>
            </div>
          </div>
          <div className="flex justify-between border-b border-cyan-500 text-lg md:text-2xl pb-4 Oxanium items-start">
            <h2 className="  font-semibold text-white">Slot 2</h2>
            <span className="text-cyan-500 font-medium">$10</span>
          </div>
          <div className="blur-lg">
            <div className="grid grid-cols-2 gap-4   lato text-lg mb-8">
              <div>
                <span className="text-white font-semibold">Total Users: </span>
                <span className="text-cyan-500">50</span>
              </div>
              <div className="text-end">
                <span className="text-white">Direct Team: </span>
                <span className="text-cyan-500">50</span>
              </div>
              <div>
                <span className="text-white">Complete Cycle: </span>
                <span className="text-cyan-500">01</span>
              </div>
              <div className="text-end">
                <span className="text-white">Indirect Team: </span>
                <span className="text-cyan-500">01</span>
              </div>
            </div>

            {/* Network Visualization */}
            <div className="relative  space-y-10 ">
              {/* Top Level */}

              {/* Second Level */}
              <div className="       transform  flex justify-center space-x-32 md:space-x-60">
                <div className="w-5 h-6 md:w-12  md:h-14  rounded-[50%]  border-2 border-cyan-500"></div>

                <div className="w-5 h-6 md:w-12  md:h-14  rounded-[50%] border-2 border-cyan-500"></div>
              </div>

              {/* Third Level */}
              <div className="     flex justify-center space-x-10 md:space-x-16">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-5 md:w-10 md:h-10 rounded-[50%] border-2 border-cyan-500"
                  ></div>
                ))}
              </div>

              {/* Bottom Level */}
              <div className="     flex justify-center space-x-2">
                {[...Array(18)].map((_, i) => (
                  <>
                    <div
                      key={i}
                      className="w-2 h-3 md:w-4 md:h-4 rounded-[50%] border border-cyan-500"
                    ></div>
                    {(i + 1) % 3 === 0 && i !== 17 && <div className="w-[1px]"></div>}
                  </>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Slot 3 */}
        <div className="relative rounded-2xl border-4 border-cyan-500/80 bg-black md:bg-transparent p-2">
          <div className="flex absolute  w-full h-full   items-center justify-center  ">
            <img src={loc} alt="" />
          </div>
          <div className="text-2xl Oxanium flex justify-between items-start border-b pb-4 border-cyan-500">
            <h2 className=" font-semibold text-white">Slot 3</h2>
            <span className="text-cyan-500 font-medium">$20</span>
          </div>
          <div className="blur-lg">
            <div className="grid grid-cols-2 gap-4  lato text-lg mb-8">
              <div>
                <span className="text-white font-semibold">Total Users: </span>
                <span className="text-cyan-500">50</span>
              </div>
              <div className="text-end">
                <span className="text-white">Direct Team: </span>
                <span className="text-cyan-500">50</span>
              </div>
              <div>
                <span className="text-white">Complete Cycle: </span>
                <span className="text-cyan-500">01</span>
              </div>
              <div className="text-end">
                <span className="text-white">Indirect Team: </span>
                <span className="text-cyan-500">01</span>
              </div>
            </div>

            {/* Network Visualization */}
            <div className="relative h-48">
              {/* Top Level */}

              {/* Second Level */}
              <div className="absolute top-7 left-1/2 transform -translate-x-1/2 flex justify-center space-x-56">
                <div className="w-12 h-14 rounded-full border-2 border-cyan-500"></div>
                <div className="w-12 h-14 rounded-full border-2 border-cyan-500"></div>
              </div>

              {/* Third Level */}
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 flex justify-center space-x-14">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-cyan-500"
                  ></div>
                ))}
              </div>

              {/* Bottom Level */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full border border-cyan-500"
                  ></div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Slot 4 */}
        <div className="relative rounded-2xl border-4 border-cyan-500/80 bg-black md:bg-transparent  p-2">
          <div className="flex absolute  w-full h-full   items-center justify-center ">
            <img src={loc} alt="" />

          </div>
          <div className="text-2xl Oxanium flex justify-between items-start border-b pb-4 border-cyan-500">
            <h2 className=" font-semibold text-white">Slot 4</h2>
            <span className="text-cyan-500 font-medium">$40</span>
          </div>
          <div className="blur-lg">
            <div className="grid grid-cols-2 gap-4   lato text-lg mb-8">
              <div>
                <span className="text-white font-semibold">Total Users: </span>
                <span className="text-cyan-500">50</span>
              </div>
              <div className="text-end">
                <span className="text-white">Direct Team: </span>
                <span className="text-cyan-500">50</span>
              </div>
              <div>
                <span className="text-white">Complete Cycle: </span>
                <span className="text-cyan-500">01</span>
              </div>
              <div className="text-end">
                <span className="text-white">Indirect Team: </span>
                <span className="text-cyan-500">01</span>
              </div>
            </div>

            {/* Network Visualization */}
            <div className="relative h-48">
              {/* Top Level */}

              {/* Second Level */}
              <div className="absolute top-7 left-1/2 transform -translate-x-1/2 flex justify-center space-x-56">
                <div className="w-12 h-14 rounded-full border-2 border-cyan-500"></div>
                <div className="w-12 h-14 rounded-full border-2 border-cyan-500"></div>
              </div>

              {/* Third Level */}
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 flex justify-center space-x-14">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-cyan-500"
                  ></div>
                ))}
              </div>

              {/* Bottom Level */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full border border-cyan-500"
                  ></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-32 py-4 text-lg Oxanium bg-gradient-to-r from-teal-700 to-cyan-600 text-white rounded-full transition-colors">
          Show More
        </button>
      </div>
    </div>
  );
};

export default AdminTotalSlots;
