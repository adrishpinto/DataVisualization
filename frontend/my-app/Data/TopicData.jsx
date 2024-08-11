import React from "react";
import useReports from "../src/useReports";
import { Counter, removeDuplicates } from "../src/FunctionUtils";

function TopicData() {
  const { topic } = useReports();
  const topicData = Counter(topic);
  let topicKey = [];
  let topicValue = [];

  Object.entries(topicData).map(([i, v]) => {
    topicKey.push(v);
    topicValue.push(i);
  });
  topicKey.sort(function (a, b) {
    return a - b;
  });
  let topicMaxKey = [];
  let topicMaxValue = [];

  for (let i = topicKey.length - 1; i >= topicKey.length - 6; i--) {
    if (topicKey[i] != 93) {
      topicMaxValue.push(topicKey[i]);
    }
  }
  function findKey(obj, V) {
    for (const [key, value] of Object.entries(obj)) {
      if (value == V) {
        return key;
      }
    }
    return null;
  }
  topicMaxValue.forEach((item) => {
    topicMaxKey.push(findKey(topicData, item));
  });

  return { topicKey, topicValue, topicMaxKey, topicMaxValue };
}

export default TopicData;
