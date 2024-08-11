import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

function BarChartTitle(props) {
  return (
    <>
      <Bar
        data={{
          labels: props.title,
          datasets: [
            {
              label: props.label,
              data: props.data,
              backgroundColor: props.color,
              borderRadius: 5,
            },
          ],
        }}
        options={{
          tooltips: {
            mode: "index",
            intersect: false,
            display: false,
          },
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              display: false,
            },
          },
        }}
        plugins={{}}
      />
    </>
  );
}

export default BarChartTitle;
