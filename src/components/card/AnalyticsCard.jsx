import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { FaArrowTrendDown } from "react-icons/fa6";

const AnalyticsCard = () => {
  const [state] = useState({
    series: [
      {
        name: "Visitors",
        data: [30, 20, 27, 20],
      },
    ],
    options: {
      chart: {
        type: "area",
        //for not showing toolbar
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        labels: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
        ],
      },
      //This removes y axis line data
      yaxis: {
        labels: {
          show: false,
        },
      },
      //This removes row lines
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="bg-slate-50 rounded-[1.5rem] pt-4">
      <div className="flex justify-between px-8 py-4">
        <p className="font-[500] text-lg">Conversations</p>
        <p className="font-[500] text-sm bg-slate-200 px-4 py-1.5 rounded-full">
          30 days
        </p>
      </div>
      <div className="flex justify-start items-center gap-4 px-8">
        <h1 className="font-[700] text-5xl">4,112</h1>
        <div className="text-red-600">
          <div className="text">
            <FaArrowTrendDown />
          </div>
          <p className="text-sm">
            2% <span className="text-slate-600">below target</span>
          </p>
        </div>
      </div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={150}
      />
    </div>
  );
};

export default AnalyticsCard;
