import React, { useState } from "react";

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
      status: "Cancelled"

    },
    {
      sno: "05",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Cancelled"

    },
    {
      sno: "06",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Cancelled"

    },
    {
      sno: "07",
      name: "Nashat",
      date: "22/01/2025",
      category: "Interval Income",
      amount: "$500",
      status: "Inprogress"

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
      status: "Completed"

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
    <div className="py-20">
      <div className="flex justify-center items-center flex-col">
        <div className="title_font mb-20">Recent Transactions</div>
        <div className="flex justify-between w-[95%] md:w-[90%]">
          <div className=" flex items-center   gap-2 md:gap-8 mb-8 poppins">
            <button
              onClick={() => setSelected("Completed")}
              className={`${selected === "Completed" ? "!bg-teal-950 selectedbtn    text-cyan-400" : "text-cyan-500"
                } text-sm md:text-lg rounded-md px-4 md:px-12 py-3`}
            >
              Completed
            </button>
            <button
              onClick={() => setSelected("Cancelled")}
              className={`${selected === "Cancelled" ? "!bg-teal-950 selectedbtn    text-cyan-400" : "text-cyan-500"
                } text-sm md:text-lg rounded-md px-4  md:px-12 py-3`}
            >
              Cancelled
            </button>
            <button
              onClick={() => setSelected("Inprogress")}
              className={`${selected === "Inprogress" ? "!bg-teal-950 selectedbtn    text-cyan-400" : "text-cyan-500"
                } text-sm md:text-lg rounded-md px-4 md:px-12  py-3`}
            >
              Inprogress
            </button>
          </div>
          <div className="">s</div>
        </div>
        <div className="w-[95%] md:w-[90%] rounded-xl   mx-auto text-white  transaction-table">
          <div className="  vector   ">
            <div className="relative overflow-hidden rounded-2xl    bg-navy-900">
              {/* Glow Effect */}
              <div className="absolute inset-0 pointer-events-none border border-cyan-500 rounded-2xl blur-[2px]"></div>

              <table className="w-[95%] text-cyan-500">
                <thead>
                  <tr className="border-b text-xs md:text-lg border-cyan-500/20">
                    <th className="  md:px-4 py-2 font-medium">#Sno</th>
                    <th className="  md:px-4 py-2 font-medium">Name</th>
                    <th className="  md:px-4 py-2 font-medium">Date</th>
                    <th className="  md:px-4 py-2 font-medium">Category</th>
                    <th className="text-right md:px-4 py-2 font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-white   text-xs md:text-lg 0/80">
                  {filteredTransactions.map((row) => (
                    <tr
                      key={row.sno}
                      className="border-b border-cyan-500/10 hover:bg-cyan-500/5 transition-colors"
                    >
                      <td className="md:px-4 py-2">{row.sno}</td>
                      <td className="md:px-4 py-2">{row.name}</td>
                      <td className="md:px-4 py-2">{row.date}</td>
                      <td className="md:px-4 py-2">{row.category}</td>
                      <td className="md:px-4 py-2 text-right">{row.amount}</td>
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
