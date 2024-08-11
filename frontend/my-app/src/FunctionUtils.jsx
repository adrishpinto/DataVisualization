import React from "react";

export const removeDuplicates = (a) => {
  return a.reduce((acc, i) => {
    if (!acc.includes(i)) acc.push(i);
    return acc;
  }, []);
};

export const Counter = (a) => {
  return a.reduce((acc, i) => {
    acc[i] = acc[i] === undefined ? 1 : acc[i] + 1;
    return acc;
  }, {});
};
