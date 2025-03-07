import React from "react";
import { IoIosSend } from "react-icons/io";

const DahbordWidgets = () => {
  const incomeCards = [
    {
      title: "Direct Income",
      icon: <IoIosSend className="md:text-2xl" />,
      amount: "$34,850",
      avg: "3.4",
    },
    {
      title: "Indirect Income",
      icon: <IoIosSend className="md:text-2xl" />,
      amount: "$34,850",
      avg: "3.4",
    },
    {
      title: "Cashback Income",
      icon: <IoIosSend className="md:text-2xl" />,
      amount: "$34,850",
      avg: "3.4",
    },
    {
      title: "Success Income",
      icon: <IoIosSend className="md:text-2xl" />,
      amount: "$34,850",
      avg: "3.4",
    },
    {
      title: "Level Income",
      icon: <IoIosSend className="md:text-2xl" />,
      amount: "$34,850",
      avg: "3.4",
    },
    {
      title: "Total Income",
      icon: <IoIosSend className="md:text-2xl" />,
      amount: "$34,850",
      avg: "3.4",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3   lg:grid-cols-6  gap-3 gap-y-6 md:gap-4 mb-6">
        {incomeCards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-900  border-cyan-900  rounded-sm widgets vector p-2  md:p-4"
          >
            <div className="flex flex-row items-center  gap-2 pb-2 md:pb-3">
              <span className="bg-cyan-500 rounded-full p-1 text-white">
                {card.icon}
              </span>

              <div className="md:text-sm text-[8px] font-medium Oxanium text-gray-200/65">
                {card.title}
              </div>
            </div>
            <div>
              <div className="text-[10px] md:text-[19px] text-start inter font-semibold text-white">
                {card.amount}
              </div>
              <p className="text-[5px] md:text-[10px] text-start inter text-gray-400">{card.avg}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DahbordWidgets;
