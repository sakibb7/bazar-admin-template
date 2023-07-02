import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const PolarChart = () => {
  const [state] = useState({
    series: [22, 18, 21, 17, 15, 18, 12],
    options: {
      chart: {
        type: "polarArea",
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="polarArea"
        height={450}
      />
    </div>
  );
};

export default PolarChart;
