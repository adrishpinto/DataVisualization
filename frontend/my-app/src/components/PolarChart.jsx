import React from "react";
import { PolarArea } from "react-chartjs-2";
import IntensityData from "../../Data/IntensityData";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarChart = () => {
  const { mean, mode, median } = IntensityData();

  const labels = ["Mean", "Mode", "Median"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Average Intensity",
        data: [mean, mode, median],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            // Access the data and label for each tooltip item
            const label = context.label || "";
            const value = context.raw || 0;
            return ` ${value}`;
          },
        },
      },
    },
    scales: {
      r: {
        grid: {
          display: true,
        },
        angleLines: {
          display: true,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return <PolarArea data={data} options={options} />;
};

export default PolarChart;
