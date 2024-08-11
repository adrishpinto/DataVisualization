import React from "react";
import { Chart } from "react-google-charts";
import useCountryMap from "../../Data/CountryMapData";

const MapComponent = () => {
  const countryArray = useCountryMap();
  const data = [["Country", "Frequency"], ...countryArray];

  const options = {
    colorAxis: { colors: ["#e5f5f9", "#2ca25f"] },
    backgroundColor: "#f1f5f9",
    defaultColor: "#f1f5f9",
    zoomLevel: 10,
  };

  return (
    <div className="shadow-lg rounded-md border-box">
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="550px"
        height="300px"
        data={data}
        options={options} 
      />
    </div>
  );
};

export default MapComponent;
