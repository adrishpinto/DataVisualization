import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import TopicData from "../../Data/TopicData";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {
  const { topicMaxKey, topicMaxValue } = TopicData();

  const data = {
    labels: topicMaxKey,
    datasets: [
      {
        label: "Sample Data",
        data: topicMaxValue,
        backgroundColor: [
          "#06C",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "#73C5C5",
          "#7CC674",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: false,
        text: "Top 5 Topics in reports",
        position: "top",
        padding: {
          top: 1,
          bottom: 10,
        },
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => ` ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
