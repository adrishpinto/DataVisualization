import React from "react";
import BarChart from "./components/Barchart.jsx";
import BarChartLH from "./components/BarChartLH.jsx";
import { useState, useEffect } from "react";
import "./App.css";
import useReports from "./useReports";
import MapComponent from "./components/MapComponent.jsx";
import RelevanceData from "../Data/RelevanceData.jsx";
import SideBar from "../src/components/SideBar.jsx";
import TopicData from "../Data/TopicData.jsx";
import Piechart from "../src/components/Piechart.jsx";
import LineChart from "./components/LineChart.jsx";
import StatCard from "./components/StatCard.jsx";
import RegionData from "../Data/RegionData.jsx";
import BubbleChart from "./components/BubbleChart.jsx";
import LikelihoodData from "../Data/LikelihoodData.jsx";
import { FaDice } from "react-icons/fa";
import {
  ArrowUpIcon,
  LightBulbIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";
import PolarChart from "./components/PolarChart.jsx";
import ScatterChart from "./components/ScatterChart.jsx";

const Home = () => {
  const {
    intensity,
    title,
    totalIntensity,
    totalRelevance,
    totalLikelihood,
    likelihood,
    relevance,
  } = useReports();
  const intensityBar = intensity.slice(0, 30);
  const titleBar = title.slice(0, 30);
  const { RelCount } = RelevanceData();
  let [side, setSide] = useState("0");
  const { lhValue, lhTitle } = LikelihoodData();
  const [check, setCheck] = useState(0);

  useEffect(() => {
    if (intensity.length > 0) {
      setCheck(1);
    }
  }, [intensity]);
  return (
    <div>
      {intensity.length > 1 ? (
        <div className="bg-white min-h-screen">
          {/* ddd */}
          <div className="flex">
            <div className="w-[83%] mx-auto">
              <div className="mt-10  mx-auto space-y-10 w-[90%]">
                {/* Flex 1st row */}
                <h1 className="bg-slate-50 col-span-3 py-5 shadow-xl border border-slate-300 rounded-xl text-5xl font-extralight font-sans mx-auto w-[100%] text-center ">
                  Dashboard Reports
                </h1>
                <div className="bg-slate-50 shadow-xl border border-slate-300 px-5 py-5 rounded-xl">
                  This data consists of projections and insights across various
                  sectors, including energy, oil, and gas. It includes key
                  factors such as impact, likelihood, intensity, and relevance.
                  The data is sourced from reliable online platforms, primarily
                  based in the U.S., including government agencies,
                  publications, and news outlets. For more info check about
                  section.
                </div>
                <div className="flex space-x-20">
                  <StatCard
                    title="Total Intensity"
                    value={totalIntensity}
                    icon={<LightBulbIcon className="h-5 w-5" />}
                    color="blue-500"
                  />
                  <StatCard
                    title="Total Relevance"
                    value={totalRelevance}
                    icon={<ArrowUpIcon className="w-5 h-5" />}
                    color="red-500"
                  />
                  <StatCard
                    title="Total Countries"
                    value="52"
                    icon={<GlobeAsiaAustraliaIcon className="h-5 w-5" />}
                    color="green-500"
                  />
                  <StatCard
                    title="Total Likelihood"
                    value={totalLikelihood}
                    icon={<FaDice className="w-5 h-5" />}
                    color="cyan-500"
                  />
                </div>
                {/* Flex 2nd row */}
                <div className="flex justify-between">
                  <div className=" border shadow-lg h-[300px] bg-white w-[530px] rounded-lg boxCard">
                    <BarChart
                      data={intensityBar}
                      title={titleBar}
                      label="intensity"
                      color="#2993c4"
                    />
                  </div>
                  <div className=" border-black w-[530px]">
                    <MapComponent />
                  </div>
                </div>
                <div className="border border-slate-300 rounded-lg bg-white p-5 pb-10">
                  <h2 className="text-2xl mx-8 font-thin">
                    Line Chart for Relevant Frequency
                  </h2>
                  <div className="border border-slate-300 rounded w-[95%] mx-auto h-[96]">
                    <LineChart data={RelCount} />
                  </div>
                </div>
                <div className="border border-slate-300 rounded-lg bg-white p-5 pb-10">
                  <h2 className="text-2xl mx-8 font-thin">Region Data Graph</h2>
                  <div className="border border-slate-300 rounded w-[95%] mx-auto h-[96]">
                    <BubbleChart />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="border border-slate-300 rounded-lg bg-white p-7 pt-0">
                    <p className="text-2xl font-thin ">
                      PieChart for top 5 topics in Reports
                    </p>
                    <div className="border border-slate-300 rounded w-[500px] mx-auto h-[96] p-10">
                      <Piechart />
                    </div>
                  </div>
                  <div className="border border-slate-300 rounded-lg bg-white p-7 pt-0">
                    <p className="text-2xl font-thin ">
                      Polar Chart for average Intensity
                    </p>
                    <div className="border border-slate-300 rounded w-[500px] mx-auto h-[96] p-10">
                      <PolarChart />
                    </div>
                  </div>
                </div>
                <div className="border border-slate-300 rounded-lg bg-white p-7 pt-0 w-[95%]">
                  <p className="text-2xl font-thin ">BarChart for Likelihood</p>
                  <div className="border border-slate-300 rounded w-[1/2] mx-auto h-[500px] p-10">
                    <BarChartLH
                      data={lhValue}
                      title={lhTitle}
                      label="Likelihood"
                      color="#8c1aff"
                    />
                  </div>
                </div>
                <div className="border border-slate-300 rounded-lg bg-white p-7 pt-0 w-[95%]">
                  <p className="text-2xl font-thin ">
                    ScatterChart for Start Year Frequency
                  </p>
                  <div className="border border-slate-300 rounded w-[1/2] mx-auto h-[550px] p-10">
                    <ScatterChart />
                  </div>
                </div>
                <br></br> <br></br> <br></br> <br></br>{" "}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-5xl font-thin  mt-20">
          Server is hosted using free services. Please wait 30-60 seconds for
          the data to load.
        </div>
      )}
    </div>
  );
};

export default Home;
