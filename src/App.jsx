import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LeftNavbar from "./layers/global/LeftNavbar";
import TopNavbar from "./layers/global/TopNavbar";
import Project from "./pages/Project";
import Analytics from "./pages/Analytics";
import Calendar from "./pages/Calendar";
import Products from "./pages/Products";
import { useState } from "react";

function App() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="bg-slate-100">
      <Router>
        <div className="flex w-full z-20">
          <div
            className={`z-99 h-screen sticky top-0 overflow-y-scroll overflow-x-hidden `}
          >
            <LeftNavbar collapse={collapse} />
          </div>

          <div className="w-full z-30">
            <div className=" sticky top-0 z-30">
              <TopNavbar collapse={collapse} setCollapse={setCollapse} />
            </div>
            <div className=" z-10">
              <Routes>
                <Route path="/" element={<Project />} />
                <Route path="/dashboard" element={<Project />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/products" element={<Products />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
