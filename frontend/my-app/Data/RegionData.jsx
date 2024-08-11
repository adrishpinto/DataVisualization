import React from "react";
import useReports from "../src/useReports";
import { Counter } from "../src/FunctionUtils";

function RegionData() {
  let regionArr = [];
  const { region } = useReports();
  const regions = Counter(region);
  regionArr = Object.entries(regions);
  regionArr[3] = ["", 0];

  return regionArr;
}

export default RegionData;
