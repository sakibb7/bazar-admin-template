import OverviewCard from "../../components/card/OverviewCard";
import { schedule } from "../../data/schedule";
import {
  MdOutlineKeyboardArrowRight,
  BiSolidTimeFive,
  IoLocationSharp,
} from "../../assets/icons";
import PolarChart from "../../components/charts/PolarChart";

const TaskSchedule = () => {
  return (
    <div className="flex gap-4 w-full p-8 drop-shadow-lg max-[768px]:flex-col">
      <div className="w-1/2 bg-slate-50 rounded-[1em] max-[768px]:w-full">
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="font-[500]">Github Issues Summary</h2>
          <div className="flex justify-end items-center gap-4 text-slate-500 font-[600] pb-4">
            <button className="hover:bg-slate-200 hover:text-slate-800 px-4 py-2 rounded-full">
              This Week
            </button>
            <button className="hover:bg-slate-200 hover:text-slate-800 px-4 py-2 rounded-full">
              Last Week
            </button>
          </div>
        </div>
        <div className="p-4">
          <PolarChart />
        </div>
        <div className="bg-slate-100 flex justify-between w-full border items-center mt-4 rounded-b-[1rem]">
          <div className="w-1/2">
            <OverviewCard
              number="594"
              desc="New tasks"
              style={{ borderRight: "1px solid #ffff" }}
            />
          </div>
          <div className="border-l w-1/2">
            <OverviewCard number="287" desc="Completed tasks" />
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-slate-50 rounded-[1em] pb-24 max-[768px]:w-full">
        <div className="flex justify-between items-center px-6 py-4">
          <h2 className="font-[500]">Schedule</h2>
          <div className="flex justify-end items-center gap-4 text-slate-500 font-[600] pb-4">
            <button className="hover:bg-slate-200 hover:text-slate-800 px-4 py-2 rounded-full">
              Today
            </button>
            <button className="hover:bg-slate-200 hover:text-slate-800 px-4 py-2 rounded-full">
              Tomorrow
            </button>
          </div>
        </div>
        <div className="px-6">
          {schedule.map(({ id, task, time, location }) => (
            <div
              key={id}
              className="flex justify-between items-center border-b pt-2"
            >
              <div>
                <p className="text-slate-900 font-[500]">{task}</p>
                <div className="flex items-center gap-6 text-slate-600 text-sm pb-4">
                  <p className="flex items-center gap-2">
                    {" "}
                    <span>
                      <BiSolidTimeFive />
                    </span>
                    {time}
                  </p>
                  <p className="flex gap-2 items-center">
                    {location && <IoLocationSharp />} {location}
                  </p>
                </div>
              </div>
              <div>
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskSchedule;
