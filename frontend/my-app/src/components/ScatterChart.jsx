import React from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import StartYearData from "../../Data/StartYearData";

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ScatterChart = () => {
  const { SYtitle, SYvalue } = StartYearData();
  const combinedData = SYtitle.map((year, index) => ({
    x: year,
    y: SYvalue[index],
  }));
  const data = {
    datasets: [
      {
        label: "Frequency   ",
        data: combinedData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Year: ${context.raw.x}, Frequency: ${context.raw.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default ScatterChart;
