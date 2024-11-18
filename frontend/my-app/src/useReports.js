import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/get`);
      setReports(res.data);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  const intensity = [];
  const title = [];
  const relevance = [];
  const country = [];
  const topic = [];
  const likelihood = [];
  const startYear = [];
  const region = [];
  let totalRelevance = 0;
  let totalIntensity = 0;
  let totalLikelihood = 0;
  reports.map((item) => {
    totalIntensity = totalIntensity + item.intensity;
    totalRelevance = totalRelevance + item.relevance;
    totalLikelihood = totalLikelihood + item.likelihood;
    region.push(item.region);
    likelihood.push(item.likelihood);
    intensity.push(item.intensity);
    title.push(item.title);
    country.push(item.country);
    relevance.push(item.relevance);
    topic.push(item.topic);
    if (item.start_year != "") {
      startYear.push(item.start_year);
    }
  });

  return {
    reports,
    intensity,
    title,
    country,
    relevance,
    topic,
    likelihood,
    totalIntensity,
    totalRelevance,
    totalLikelihood,
    region,
    startYear,
  };
};

export default useReports;
