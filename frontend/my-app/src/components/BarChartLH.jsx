import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

function BarChartTitle(props) {
  const a = props.data;
  a[0] = 79;
  return (
    <>
      <Bar
        data={{
          labels: props.title,
          datasets: [
            {
              label: props.label,
              data: a,
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
              title: {
                display: true,
                text: "Frequency of appearance",
                font: {
                  size: 14,
                },
              },
            },
            x: {
              display: true,
              title: {
                display: true,
                text: "Value of Likelihood",
                font: {
                  size: 14,
                },
              },
            },
          },
        }}
        plugins={{}}
      />
    </>
  );
}

export default BarChartTitle;
