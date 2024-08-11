import React from "react";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BubbleController,
  PointElement,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import RegionData from "../../Data/RegionData";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BubbleController,
  PointElement
);

const BubbleChart = () => {
  const regionArr = RegionData();
  const data = regionArr;

  const getRadius = (number) => {
    if (number > 100) {
      return 60;
    } else if (number < 30) {
      return number + 5;
    } else {
      return number;
    }
  };

  const chartData = {
    datasets: [
      {
        label: "Regions",
        data: data.map(([country, number]) => ({
          x: number,
          y: Math.floor(Math.random() * 80) + 10,
          r: getRadius(number),
          originalNumber: number,
        })),
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
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const dataIndex = tooltipItem.dataIndex;
            const country = data[dataIndex][0];
            const originalNumber = dataset.data[dataIndex].originalNumber;
            return `${country}: ${originalNumber}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "no. of regions",
        },
        min: 0,
        max: 150,
        ticks: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Y Axis",
        },
        min: 0,
        max: 100,
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Bubble data={chartData} options={options} />
    </div>
  );
};

export default BubbleChart;
