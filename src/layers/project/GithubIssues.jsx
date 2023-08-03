import OverviewCard from "../../components/card/OverviewCard";
import LineChart from "../../components/charts/LineChart";

const GithubIssues = () => {
  return (
    <div className="bg-slate-50 p-8 my-4 flex justify-center gap-24 rounded-[1rem] drop-shadow-md mx-8 w-[97%] max-[768px]:flex-col">
      <div className="w-1/2 max-[768px]:w-full">
        <h2 className="font-[500]">Github Issues Summary</h2>
        <p className="pt-8 text-slate-500 font-[500]">New vs Closed</p>
        <div className="">
          <LineChart />
        </div>
      </div>
      <div className="">
        <div className="flex justify-end items-center gap-4 text-slate-500 font-[600] pb-4">
          <button className="hover:bg-slate-200 hover:text-slate-800 px-4 py-2 rounded-full">
            This Week
          </button>
          <button className="hover:bg-slate-200 hover:text-slate-800 px-4 py-2 rounded-full">
            Last Week
          </button>
        </div>
        <p className="text-sm font-[500] text-slate-600 pb-6">Overview</p>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 text-green-600">
            <OverviewCard number="214" desc="New Issues" />
          </div>
          <div className="col-span-2 text-sky-400">
            <OverviewCard number="75" desc="Closed" />
          </div>
          <OverviewCard number="3" desc="Fixed" />
          <OverviewCard number="4" desc="Won't Fix" />
          <OverviewCard number="8" desc="Re-opened" />
          <OverviewCard number="6" desc="Needs Triage" />
        </div>
      </div>
    </div>
  );
};

export default GithubIssues;
