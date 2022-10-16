import React from "react";
import CalenderIcon from "../Icons/CalenderIcon";
import RepeatIcon from "../Icons/RepeatIcon";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

function Chart(props) {
  const data = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17"],
    datasets: [
      {
        data: [800, 900, 600, 800, 700, 600],
        backgroundColor: "transparent",
        borderColor: "#05EEF4",
        tension: 0.5,
        fill: false,
        pointBorderWidth: 4,
        pointStyle: "star",
      },
      {
        data: [600, 800, 850, 600, 700, 700],
        backgroundColor: "transparent",
        borderColor: "#D79DDA",
        tension: 0.5,
        fill: false,
        pointBorderWidth: 4,
        pointStyle: "star",
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
      tooltip: {
        usePointStyle: true,
        boxPadding: 5,
        boxHeight: 20,
        callbacks: {
          title: () => {
            return "";
          },
          labelPointStyle: () => {
            return {
              pointStyle: "star",
              rotation: 0,
            };
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: { callback: (value) => "$" + value },
      },
    },
  };
  return (
    <div className="flex flex-col mt-10 bg-[#121317] rounded-2xl p-5">
      <div className="flex justify-between">
        <div className="flex flex-row">
          <button type="button" className="p-2 bg-black rounded">
            1H
          </button>
          <button type="button" className="p-2 bg-black rounded ml-1">
            1D
          </button>
          <button type="button" className="p-2 bg-black rounded ml-1">
            3D
          </button>
          <button type="button" className="p-2 bg-black rounded ml-1">
            1W
          </button>
          <button type="button" className="p-2 bg-black rounded ml-1">
            1M
          </button>
          <button type="date" className="p-2 bg-black rounded ml-1">
            <CalenderIcon />
          </button>
        </div>
        <div className="flex flex-row">
          <select className="p-2 bg-black rounded">
            <option value="BTC">BTC</option>
          </select>
          <span className="ml-5 p-2">
            <RepeatIcon />
          </span>
          <select className="ml-5 p-2 bg-black rounded">
            <option value="ETH">ETH</option>
          </select>
        </div>
      </div>
      <div className="mt-10">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default Chart;
