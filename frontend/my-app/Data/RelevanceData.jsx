import React from "react";
import useReports from "../src/useReports";

function RelevanceData() {
  const { relevance } = useReports();
  const RelCount = Array(7).fill(0); // Initializes an array with 7 zeros

  relevance.forEach((item) => {
    if (item >= 1 && item <= 7) {
      RelCount[item - 1]++;
    }
  });

  return { RelCount };
}

export default RelevanceData;
