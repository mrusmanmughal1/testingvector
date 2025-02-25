import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
const DounughtModel = ({props,title}) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: [],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3],
        backgroundColor: ["#00A478", "#01B0C7", "#0074E8"],
        hoverBackgroundColor: ["#00A478", "#01B0C7", "#0074E8"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };
  return (
    <div>
      <h1 className="admin_title_font text-white  py-3 ps-2 md:py-6 ">
        {title}
      </h1>
      <div className="  flex justify-center  border border-cyan-400  rounded-2xl shadow-lg p-7  ">
        <div className="h-48">
          <Doughnut data={data} options={options} {...props} />
        </div>
      </div>
    </div>
  );
};

export default DounughtModel;
