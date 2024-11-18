import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

// Register components needed for the chart
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

const MultilineChart = ({ relevance, likelihood }) => {
  const data = {
    labels: relevance.map((_, index) => `Label ${index + 1}`), // Assuming labels are based on data length
    datasets: [
      {
        label: "Relevance",
        data: relevance,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: false,
        pointRadius: 0, // Removes points on the line
        borderWidth: 2,
      },
      {
        label: "Likelihood",
        data: likelihood,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: false,
        pointRadius: 0, // Removes points on the line
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Multiline Chart",
      },
    },
    elements: {
      point: {
        radius: 0, 
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "X Axis Title",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Y Axis Title",
        },
        suggestedMin: 0, // Adjust according to your data range
        suggestedMax: 10, // Adjust according to your data range
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default MultilineChart;
