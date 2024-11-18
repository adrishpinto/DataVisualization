import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Sidebar from "./components/SideBar";

const App = () => {
  const [isExpanded, setIsExpanded] = useState(0);

  const toggleSidebar = () => {
    setIsExpanded(isExpanded == 1 ? 0 : 1);
  };

  useEffect(() => {
    const savedState = localStorage.getItem("sidebarExpanded");
    if (savedState !== null) {
      setIsExpanded(Number(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarExpanded", isExpanded.toString());
  }, [isExpanded]);

  return (
    <Router>
      <div className="flex">
        <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
