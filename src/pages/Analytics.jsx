import { AiFillMail } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import DateTimeChart from "../components/charts/DateTimeChart";
import AnalyticsCard from "../components/card/AnalyticsCard";
import AudienceCard from "../components/card/AudienceCard";

const Analytics = () => {
  return (
    <div className="w-full py-10">
      <div className="flex justify-between items-center px-10">
        <div className="">
          <h1 className="text-2xl text-slate-800 font-[600]">
            Analytics Dashboard
          </h1>
          <p className="text-sm text-slate-600">
            Monitor Matrics, check reports and review performance
          </p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <button className="bg-slate-900 text-slate-50 px-4 py-2 rounded-full flex justify-center items-center gap-2">
            <AiFillMail />
            <p>Messages</p>
          </button>
          <button className="bg-indigo-700 text-slate-50 px-4 py-2 rounded-full flex justify-center items-center gap-2">
            <IoSettings />
            <p>Settings</p>
          </button>
        </div>
      </div>
      <div className="w-full py-10 px-10">
        <DateTimeChart />
      </div>
      <div className="grid grid-cols-3 p-4 gap-8">
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
      <div className="p-8 pt-12">
        <div className="pb-10">
          <h1 className="text-2xl font-[600] text-slate-800">Your Audience</h1>
          <p className="text-slate-700">Demographic properties of your users</p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <AudienceCard />
          <AudienceCard />
          <AudienceCard />
          <AudienceCard />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
