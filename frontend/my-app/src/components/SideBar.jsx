import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  PresentationChartBarIcon,
  LightBulbIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <div
        className={`h-screen bg-white-300 border-r border-slate-400 text-black flex flex-col ${
          isExpanded ? "w-40" : "w-12"
        } transition-all`}
      >
        <button
          className="size-9 pl-2 pt-1 self-end mr-2"
          onClick={toggleSidebar}
        >
          <Bars3Icon />
        </button>

        <ul className="mt-4 space-y-2">
          {/* Home Item */}
          <div className="flex items-center">
            <li
              className={`ml-1 cursor-pointer p-2 w-fit transition-all hover:bg-slate-300 rounded flex items-center ${
                isActive("/") ? "bg-slate-300" : ""
              }`}
              onClick={() => navigate("/")}
            >
              <PresentationChartBarIcon className="h-6 w-6" />
              <span
                className={`transition-opacity duration ${
                  isExpanded ? "opacity-100 mr-10 ml-2" : "opacity-0"
                }`}
              >
                {isExpanded && "Home"}
              </span>
            </li>
          </div>

          {/* About Item */}
          <div className="flex items-center">
            <li
              className={`ml-1 cursor-pointer p-2 transition-all duration-500 hover:bg-slate-300 rounded flex items-center ${
                isActive("/about") ? "bg-slate-300" : ""
              } ${isExpanded ? "w-[135px]" : "w-fit"}`}
              onClick={() => navigate("/about")}
            >
              <LightBulbIcon className="h-6 w-6" />
              <span
                className={`transition-opacity ${
                  isExpanded ? "opacity-100 mr-10 ml-2" : "opacity-0"
                }`}
              >
                {isExpanded && "About"}
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
