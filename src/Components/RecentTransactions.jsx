import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const RecentTransactions = () => {
  const [selected, setSelected] = useState("Completed")

  const transactionData = [
    {
      sno: "01",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Completed"
    },
    {
      sno: "02",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Completed"

    },
    {
      sno: "03",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Completed"

    },
    {
      sno: "04",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Completed"

    },
    {
      sno: "05",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Completed"

    },
    {
      sno: "06",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Completed"

    },
    {
      sno: "07",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Completed"

    },
    {
      sno: "08",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Completed"

    },
    {
      sno: "09",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Completed"

    },
    {
      sno: "10",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Completed"

    },
    {
      sno: "11",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Cancelled"

    },
    {
      sno: "12",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Cancelled"

    },
    {
      sno: "13",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Inprogress"

    },
    {
      sno: "14",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Inprogress"

    },
    {
      sno: "15",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Inprogress"

    },
    {
      sno: "16",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Inprogress"

    },
    {
      sno: "17",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Cancelled"

    },
  ];
  const filteredTransactions = selected
    ? transactionData.filter((transaction) => transaction.status === selected)
    : transactionData;
  return (

    <div className=" pb-20 md:py-10">
      <div className="flex justify-center items-center flex-col relative">
      <div className="radient-effect  top-20      left-0 "></div>
      <div className=" green-radient     right-0 "></div>
        <div className="title_font  mt-12 mb-24">Recent  &nbsp; Transactions</div>
        <div className="  w-[95%] md:w-[90%]">
          <div className=" flex items-center   gap-2 md:gap-8 mb-8 poppins">
            <button
              onClick={() => setSelected("Completed")}
              className={`${selected === "Completed" ? "!bg-teal-950 selectedbtn    text-cyan-400" : "text-cyan-500"
                } text-base  md:text-lg rounded-md px-4 md:px-12 py-2`}
            >
              Completed
            </button>
            <button
              onClick={() => setSelected("Cancelled")}
              className={`${selected === "Cancelled" ? "!bg-teal-950 selectedbtn    text-cyan-400" : "text-cyan-500"
                } text-base  md:text-lg rounded-md px-4  md:px-12 py-2`}
            >
              Cancelled
            </button>
            <button
              onClick={() => setSelected("Inprogress")}
              className={`${selected === "Inprogress" ? "!bg-teal-950 selectedbtn    text-cyan-400" : "text-cyan-500"
                } text-base  md:text-lg rounded-md px-4 md:px-12  py-2`}
            >
              InProgress
            </button>
          </div>
          
        </div>
        <div className="w-[95%] md:w-[90%] rounded-2xl   mx-auto text-white  transaction-table">
          <div className=" border-4 md:border-0 border-cyan-500 rounded-2xl    vector tableT   ">
            <div className="relative overflow-hidden rounded-2xl   bg-navy-900">
              {/* Glow Effect */}
              <div className="absolute inset-0 pointer-events-none     "></div>

              <table className="w-full Oxanium md:w-full text-cyan-500">
                <thead>
                  <tr className="border-b text-xs md:text-2xl border-cyan-500/70">
                    <th className="  md:px-4 py-3 font-bold">#Sno</th>
                    <th className="text-start  md:px-4 py-3 font-bold">Name</th>
                    <th className=" text-start md:px-4 py-3 font-bold">Date</th>
                    <th className="  text-start md:px-4 py-3 font-bold">Category</th>
                    <th className="text-start md:px-4 py-3 font-bold">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-white   text-xs md:text-2xl  ">
                  {filteredTransactions.map((row) => (
                    <tr
                      key={row.sno}
                      className="border-b font-light border-cyan-500/20 hover:bg-cyan-500/5 transition-colors"
                    >
                      <td className=" text-center  md:px-4 py-3">{row.sno}</td>
                      <td className=" text-start md:px-4 py-3">{row.name}</td>
                      <td className="text-start md:px-4 py-3">{row.date}</td>
                      <td className=" text-start md:px-4 py-3">{row.category}</td>
                      <td className=" text-start md:px-4 py-3 ">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
