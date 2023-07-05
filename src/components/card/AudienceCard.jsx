import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const AudienceCard = () => {
  const [state] = useState({
    series: [25, 75],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Male", "Female"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {},
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div className="bg-slate-50 p-8 rounded-[1.5rem]">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-[600]">Language</p>
          <p className="text-xs font-[500] text-slate-700 bg-slate-200 rounded-full px-3 py-1">
            30 days
          </p>
        </div>
        <div>
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <p className="w-2 h-2 bg-sky-600 rounded-full"></p>
            <p>Male </p>
          </div>
          <p>11,2345.75</p>
          <p>25%</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <p className="w-2 h-2 bg-sky-400 rounded-full"></p>
            <p>Female </p>
          </div>
          <p>31,4745.25</p>
          <p>75%</p>
        </div>
      </div>
    </div>
  );
};

export default AudienceCard;
