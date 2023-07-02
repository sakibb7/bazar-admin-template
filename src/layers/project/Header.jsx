import { AiFillMail, AiFillNotification } from "react-icons/ai";
import { mainUser } from "../../assets/images";
import { IoSettings } from "react-icons/io5";

const Header = () => {
  return (
    <div className=" flex justify-between items-center p-12 bg-slate-50 drop-shadow-sm">
      <div className="flex justify-start items-center gap-6">
        <img src={mainUser} alt="" className="w-20 rounded-full" />
        <div>
          <h1 className="text-4xl font-[600] text-slate-900 pb-2">
            Wecome back, Md Sakib
          </h1>
          <div className="flex justify-start items-center gap-2 text-slate-600">
            <AiFillNotification />
            <p>You have 2 new messages and 15 new tasks</p>
          </div>
        </div>
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
  );
};

export default Header;
