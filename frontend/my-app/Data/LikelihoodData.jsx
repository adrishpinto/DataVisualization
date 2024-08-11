import React from "react";
import useReports from "../src/useReports";
import { Counter } from "../src/FunctionUtils";

function LikelihoodData() {
  const { likelihood, totalLikelihood } = useReports();

  const likelihoodObj = Counter(likelihood);

  const likelihoodArr = Object.entries(likelihoodObj);
  let lhValue = [];
  let lhTitle = [];
  likelihoodArr.forEach((item, i) => {
    lhValue.push(item[1]);
    lhTitle.push(item[0]);
  });
  lhValue.splice(4);
  lhTitle.splice(4);

  return { lhTitle, lhValue };
}

export default LikelihoodData;
