import React from "react";
import useReports from "../src/useReports";
import { Counter } from "../src/FunctionUtils";

const useCountryMap = () => {
  const { country } = useReports();

  function removeDuplicates(a) {
    return a.reduce((acc, i) => {
      if (!acc.includes(i)) acc.push(i);
      return acc;
    }, []);
  }

  const CountryObj = Counter(country);
  let countryArray = [];
  countryArray = Object.entries(CountryObj);
  countryArray[2] = ["", 0];

  countryArray[0] = ["United States", 112];
  return countryArray;
};

export default useCountryMap;
