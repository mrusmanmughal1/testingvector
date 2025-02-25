import React from "react";
import { BiLock } from "react-icons/bi";

const AdminTotalSlots = () => {
  return (
    <div className="min-h-screen    ">
      <div className="  mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Slot 1 */}
        <div className="relative rounded-xl border-4 border-cyan-500/50  p-6 overflow-hidden">
          <div className="flex border-b border-cyan-400 justify-between items-start mb-6">
            <h2 className="text-xl font-semibold text-white">Slot 1</h2>
            <span className="text-cyan-400 font-medium">$05</span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm mb-8">
            <div>
              <span className="text-gray-400">Total Users: </span>
              <span className="text-cyan-400">50</span>
            </div>
            <div>
              <span className="text-gray-400">Direct Team: </span>
              <span className="text-cyan-400">50</span>
            </div>
            <div>
              <span className="text-gray-400">Complete Cycle: </span>
              <span className="text-cyan-400">01</span>
            </div>
            <div>
              <span className="text-gray-400">Indirect Team: </span>
              <span className="text-cyan-400">01</span>
            </div>
          </div>

          {/* Network Visualization */}
          <div className="relative h-48">
            {/* Top Level */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400"></div>

            {/* Second Level */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 flex justify-center space-x-20">
              <div className="w-4 h-4 rounded-full border-2 border-cyan-400"></div>
              <div className="w-4 h-4 rounded-full border-2 border-cyan-400"></div>
            </div>

            {/* Third Level */}
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 flex justify-center space-x-12">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full border-2 border-cyan-400"
                ></div>
              ))}
            </div>

            {/* Bottom Level */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4">
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full border border-cyan-400"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Slot 2 */}
        <div className="relative rounded-xl border-4 border-cyan-500/50   p-6">
          <div className="flex justify-between border-b border-cyan-400 items-start">
            <h2 className="text-xl font-semibold text-white">Slot 2</h2>
            <span className="text-cyan-400 font-medium">$10</span>
          </div>
          <div className="flex items-center justify-center h-64">
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-colors connect">
              Activate
            </button>
          </div>
        </div>

        {/* Slot 3 */}
        <div className="relative rounded-xl border-4 border-cyan-500/50   p-6">
          <div className="flex justify-between items-start border-b border-cyan-400">
            <h2 className="text-xl font-semibold text-white">Slot 3</h2>
            <span className="text-cyan-400 font-medium">$20</span>
          </div>
          <div className="flex items-center justify-center h-64">
            <BiLock className="w-12 h-12 text-cyan-500" />
          </div>
        </div>

        {/* Slot 4 */}
        <div className="relative rounded-xl border-4 border-cyan-500/50   p-6">
          <div className="flex justify-between items-start border-b border-cyan-400">
            <h2 className="text-xl font-semibold text-white">Slot 4</h2>
            <span className="text-cyan-400 font-medium">$40</span>
          </div>
          <div className="flex items-center justify-center h-64">
            <BiLock className="w-12 h-12 text-cyan-500" />
          </div>
        </div>
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-colors">
          Show More
        </button>
      </div>
    </div>
  );
};

export default AdminTotalSlots;
