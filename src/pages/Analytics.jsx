import { AiFillMail } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";

const Analytics = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-2xl text-slate-800">Analytics Dashboard</h1>
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
    </div>
  );
};

export default Analytics;
