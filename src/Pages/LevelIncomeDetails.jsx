import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaAngleDown } from "react-icons/fa";
import DahbordWidgets from "../Components/DahbordWidgets";
import MiniTable from "../UI/MiniTable";
import DounughtModel from "../UI/DounughtModel";
const LevelIncomeDetails = (props) => {
  const income = [
    { slot: "Level 1", amount: 5, status: "10% of 30%", members: 8 },
    { slot: "Level 2", amount: 10, status: "10% of 30%", members: 8 },
    { slot: "Level 3", amount: 20, status: "10% of 30%", members: 8 },
    { slot: "Level 4", amount: 40, status: "10% of 30%", members: 8 },
  ];

  const TableHeaders = ["Level", " % of 30", "Earned Amount", "Total Members"];
  return (
    <>
      <DahbordWidgets />

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[60%]   ">
          <MiniTable
            TableHeaders={TableHeaders}
            data={income}
            title="Level Income Overview"
          />
        </div>
        <div className="w-full md:w-[40%]   ">
          <DounughtModel title="Earning Distribution" />
        </div>
      </div>
    </>
  );
};

export default LevelIncomeDetails;
