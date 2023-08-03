import {
  RxHamburgerMenu,
  AiOutlineCalendar,
  HiOutlineMail,
  AiOutlineContacts,
  AiFillStar,
  HiLanguage,
  AiOutlineFontSize,
  AiOutlineFullscreen,
  // AiOutlineFullscreenExit,
  GoSearch,
  BsBookmark,
  AiOutlineNotification,
  //  CgProfile,
  //  GoSignOut,
} from "../../assets/icons";
import { mainUser } from "../../assets/images";

const TopNavbar = ({ collapse, setCollapse }) => {
  return (
    <div className=" flex justify-between items-center  leading-[1.2rem] text-slate-700 sticky top-0 z-18 py-3 px-8 bg-slate-50 drop-shadow-md">
      <div className="flex justify-start">
        <button
          className={` hover:bg-slate-200 p-2 rounded-full`}
          onClick={() => setCollapse(!collapse)}
        >
          <RxHamburgerMenu />
        </button>
        <div className="flex gap-2 justify-between text-2xl max-[768px]:hidden">
          <button className="hover:bg-slate-200 p-2 rounded-full">
            <AiOutlineCalendar />
          </button>
          <button className="hover:bg-slate-200 p-2 rounded-full">
            <HiOutlineMail />
          </button>
          <button className="hover:bg-slate-200 p-2 rounded-full">
            <AiOutlineContacts />
          </button>
          <button className="hover:bg-slate-200 p-2 rounded-full text-amber-400">
            <AiFillStar />
          </button>
        </div>
      </div>
      <div className="flex gap-8 justify-center items-center cursor-pointer">
        <div className="flex gap-2 text-xl">
          <button className="hover:bg-slate-200 p-2 rounded-full">
            <HiLanguage />
          </button>
          <button className="hover:bg-slate-200 p-2 rounded-full">
            <AiOutlineFontSize />
          </button>
          <button className="hover:bg-slate-200 p-2 rounded-full">
            <AiOutlineFullscreen />
          </button>
          <button className="hover:bg-slate-200 p-2 rounded-full">
            <GoSearch />
          </button>
          <button className="hover:bg-slate-200 p-2 rounded-full">
            <BsBookmark />
          </button>
          <button className="hover:bg-slate-200 p-2 rounded-full">
            <AiOutlineNotification />
          </button>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="">
            <p className="text-base font-[600] text-slate-800">Md Sakib</p>
            <p className="text-xs text-slate-500 text-end">Admin</p>
          </div>
          <img src={mainUser} alt="" className="w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
