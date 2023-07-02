import { useState } from "react";
import "./App.css";
import LeftNavbar from "./layers/global/LeftNavbar";
import TopNavbar from "./layers/global/TopNavbar";
import Project from "./pages/Project";

function App() {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="bg-slate-100">
      <div className="flex w-screen z-20">
        <div className={`${collapse ? "hidden" : ""}`}>
          <LeftNavbar setCollapse={setCollapse} />
        </div>
        <div className="w-full z-30">
          <div className=" sticky top-0 z-30">
            <TopNavbar collapse={collapse} setCollapse={setCollapse} />
          </div>
          <div className="relative z-10">
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
