import React from "react";
import useReports from "../src/useReports";
import { Counter } from "../src/FunctionUtils";

function StartYearData() {
  const { startYear } = useReports();
  const SYobj = Counter(startYear);
  const SYarr = Object.entries(SYobj);
  let SYvalue = [];
  let SYtitle = [];
  SYarr.forEach((item) => {
    SYtitle.push(item[0]);
    SYvalue.push(item[1]);
  });

  return { SYvalue, SYtitle };
}

export default StartYearData;
