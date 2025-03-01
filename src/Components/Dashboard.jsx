import { IoIosSend } from "react-icons/io";
import AdminTotalSlots from "./AdminTotalSlots";
import DahbordWidgets from "./DahbordWidgets";

const Dashboard = () => {
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
  const slotDetails = [
    { slot: "Slot 1", amount: 5, status: "Completed" },
    { slot: "Slot 2", amount: 10, status: "Completed" },
    { slot: "Slot 3", amount: 20, status: "Completed" },
    { slot: "Slot 4", amount: 40, status: "Not Upgraded" },
    { slot: "Slot 5", amount: 40, status: "Not Upgraded" },

    { slot: "Slot 6", amount: 40, status: "Not Upgraded" },

  ];
  const transactions = [
    {
      id: "01",
      name: "Nashat",
      date: "20/01/2025",
      category: "Interval Income",
      amount: "$500",
    },
    {
      id: "02",
      name: "Nashat",
      date: "20/01/2025",
      category: "Interval Income",
      amount: "$500",
    },
    {
      id: "03",
      name: "Nashat",
      date: "20/01/2025",
      category: "Interval Income",
      amount: "$500",
    },
    {
      id: "04",
      name: "Nashat",
      date: "20/01/2025",
      category: "Interval Income",
      amount: "$500",
    },
    {
      id: "05",
      name: "Nashat",
      date: "20/01/2025",
      category: "Interval Income",
      amount: "$500",
    },
  ];
  return (
    <div>
      <div className="block md:hidden">
        <h1 className="admin_title_font text-white  py-3 ps-2 md:py-6 ">
          Dashboard
        </h1>
      </div>
      <DahbordWidgets />
      {/*Slot Details */}
      <div className=" flex flex-col md:flex-row  gap-8">
        <div className="md:w-[60%] ">
          <div>
            <p className="text-2xl ps-2  pb-6 text-white admin_title_font">
              Slot Details
            </p>
          </div>
          <div className="overflow-x-auto        relative rounded-xl border-2 border-cyan-500/50  border-cyan-300">
            <table className="w-full Oxanium   border-collapse">
              <thead>
                <tr className="   md:text-xl ">
                  <th className="text-center py-3 px-4 border border-cyan-400  text-white font-medium">
                    Slot No.
                  </th>
                  <th className="text-center py-3 px-4 border border-cyan-400  text-white font-medium">
                    Amount ($)
                  </th>
                  <th className="text-center py-3 px-4 border border-cyan-400  text-white font-medium">
                    Upgrade Status
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {slotDetails.map((slot, index) => (
                  <tr
                    key={index}
                    className="border border-cyan-300  text-gray-400   hover:bg-cyan-950/30 transition-colors"
                  >
                    <td className="py-3 text-center border border-cyan-400 px-4 text-white">
                      {slot.slot}
                    </td>
                    <td className="py-3 text-center px-4 text-white border border-cyan-400 ">
                      {slot.amount}
                    </td>
                    <td className="py-3 text-center px-4 text-white border border-cyan-400 ">
                      {slot.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Transaction Details Table */}
        <div className="md:w-[40%]">
          <div className="">
            <h2 className=" text-2xl ps-2  pb-6 text-white admin_title_font">
              Transaction Details
            </h2>
          </div>
          <div className="overflow-x-auto   rounded-lg border  border-cyan-300">
            <table className="w-full md:text-sm Oxanium border-collapse">
              <thead>
                <tr className="border-b border-cyan-400">
                  <th className="text-left py-3 px-4 text-cyan-400 font-medium">
                    #Sno
                  </th>
                  <th className="text-left py-3 px-4 text-cyan-400 font-medium">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 text-cyan-400 font-medium">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 text-cyan-400 font-medium">
                    Category
                  </th>
                  <th className="text-left py-3 px-4 text-cyan-400 font-medium">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, index) => (
                  <tr
                    key={index}
                    className="border-b border-cyan-400 text-xs last:border-0 hover:bg-cyan-950/30 transition-colors"
                  >
                    <td className="py-3 px-4 text-white">{tx.id}</td>
                    <td className="py-3 px-4 text-white">{tx.name}</td>
                    <td className="py-3 px-4 text-white">{tx.date}</td>
                    <td className="py-3 px-4 text-white">{tx.category}</td>
                    <td className="py-3 px-4 text-white">{tx.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* total SLots */}
      </div>
      <div className="">
        <div>
          <p className="text-2xl ps-2  py-6 text-white admin_title_font">
            Total Slot (12)
          </p>
        </div>
        <AdminTotalSlots />
      </div>
    </div>
  );
};

export default Dashboard;
