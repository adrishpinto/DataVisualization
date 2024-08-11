import React from "react";
import { Line } from "react-chartjs-2";
import useReports from "../useReports";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale);

const LineChart = (props) => {
  const { relevance } = useReports();
  let x = [];
  for (let i = 1; i <= 7; i++) {
    x.push(i);
  }

  const data = {
    labels: x,
    datasets: [
      {
        label: `Relevance Frequency`,
        data: props.data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      title: {
        display: true,
        text: "hello",
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Relevance Number",
          },
        },
        y: {
          title: {
            display: true,
            text: "Frequency",
          },
          suggestedMin: 0,
          suggestedMax: 300,
          ticks: {
            stepSize: 50,
          },
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={config.options} />
    </div>
  );
};

export default LineChart;
