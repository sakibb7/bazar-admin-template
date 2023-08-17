import { Link } from "react-router-dom";
import { SiMarketo } from "../../assets/icons";
import { mainUser } from "../../assets/images";
import { leftSideNav } from "../../data/menuItems";
import { AiOutlineClose } from "react-icons/ai";

const LeftNavbar = ({ collapse, setCollapse }) => {
  return (
    <div
      className={`bg-slate-800 text-slate-50 flex flex-col gap-12 z-50 w-[18rem] max-[1023px]:fixed sticky top-0 overflow-y-scroll h-screen ${
        collapse ? "ml-0" : "ml-[-18rem]"
      }`}
    >
      {/* Desktop Menu */}
      <div className={`p-4 overflow-x-hidden max-[1023px]:hidden`}>
        <div className="flex justify-between items-center text-lg py-4">
          <Link to="/">
            <div className="flex items-center  gap-28">
              <div className="flex items-center">
                <SiMarketo /> <span className="pl-2">Bazar</span>
              </div>
              {collapse && (
                <AiOutlineClose
                  className="pointer"
                  onClick={() => setCollapse(!collapse)}
                />
              )}
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4 items-center pb-8">
          <img src={mainUser} alt="" className="rounded-full w-16" />
          <div className="text-center">
            <p className="font-[600] text-sm">Md Sakib</p>
            <p className="text-slate-400 text-xs font-[600]">
              hello@sakibb.com
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {leftSideNav.map(({ id, name, desc, menuItems }) => (
            <div key={id}>
              <div className="">
                <p className="text-indigo-400 font-[600] text-xs uppercase">
                  {name}
                </p>
                <p className="text-xxs text-slate-400">{desc}</p>
              </div>
              <div className="pt-4">
                <ul className="flex flex-col gap-1.5 text-slate-300">
                  {menuItems.map(({ id, name, icon, link }) => (
                    <Link key={id} to={link}>
                      <li className="flex justify-start items-center hover:bg-slate-700 hover:text-white px-4 gap-4 py-3 rounded-lg font-[500] cursor-pointer">
                        <p className="text-2xl">{icon}</p>
                        <p className="text-sm">{name}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={` lg:hidden`}>
        <div className="flex justify-between items-center text-lg p-8">
          <Link to="/">
            <div className="flex items-center gap-28">
              <div className="flex items-center">
                <SiMarketo /> <span className="pl-2">Bazar</span>
              </div>
              {collapse && (
                <AiOutlineClose
                  className="pointer"
                  onClick={() => setCollapse(!collapse)}
                />
              )}
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4 items-center pb-8">
          <img src={mainUser} alt="" className="rounded-full w-16" />
          <div className="text-center">
            <p className="font-[600] text-sm">Md Sakib</p>
            <p className="text-slate-400 text-xs font-[600]">
              hello@sakibb.com
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-start px-8">
          {leftSideNav.map(({ id, name, desc, menuItems }) => (
            <div key={id}>
              <div className="text-center">
                <p className="text-indigo-400 font-[600] text-xs uppercase">
                  {name}
                </p>
                <p className="text-xxs text-slate-400">{desc}</p>
              </div>
              <div className="pt-4">
                <ul className="flex flex-col gap-1.5 text-slate-300">
                  {menuItems.map(({ id, name, icon, link }) => (
                    <Link
                      key={id}
                      to={link}
                      onClick={() => setCollapse(!collapse)}
                    >
                      <li className="flex justify-start items-center hover:bg-slate-700 hover:text-white px-4 gap-4 py-3 rounded-lg font-[500] cursor-pointer">
                        <p className="text-2xl">{icon}</p>
                        <p className="text-sm">{name}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
