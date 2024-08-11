import React from "react";
import useReports from "../src/useReports";
import { Counter } from "../src/FunctionUtils";

function IntensityData() {
  const { intensity, totalIntensity } = useReports();
  const intensityObj = Counter(intensity);
  const getMaxKey = (obj) => {
    let maxKey = null;
    let maxValue = 0;

    for (const [key, value] of Object.entries(obj)) {
      if (value > maxValue) {
        maxValue = value;
        maxKey = key;
      }
    }

    return maxKey;
  };
  const mode = getMaxKey(intensityObj);
  const median = intensity[499];
  const mean = totalIntensity / intensity.length;

  return { mean, mode, median };
}

export default IntensityData;
