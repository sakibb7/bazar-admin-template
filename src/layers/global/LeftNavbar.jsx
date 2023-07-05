import { Link } from "react-router-dom";
import { SiMarketo, RxHamburgerMenu } from "../../assets/icons";
import { mainUser } from "../../assets/images";
import { leftSideNav } from "../../data/menuItems";

const LeftNavbar = ({ setCollapse }) => {
  return (
    <div className="bg-slate-800 text-slate-50 flex flex-col gap-12 sticky top-0 h-full z-20 w-[18em]  overflow-y-scroll h-[100vh]">
      <div className="flex justify-between items-center text-lg p-6">
        <Link to="/">
          <div className="flex justify-between items-center">
            <SiMarketo /> <p className="pl-2">Bazar</p>
          </div>
        </Link>
        <div className="cursor-pointer" onClick={() => setCollapse(true)}>
          <RxHamburgerMenu />
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <img src={mainUser} alt="" className="rounded-full w-24" />
        <div className="text-center">
          <p className="font-[600] text-sm">Md Sakib</p>
          <p className="text-slate-400 text-xs font-[600]">hello@sakibb.com</p>
        </div>
      </div>
      <div className="flex flex-col gap-16 p-2">
        {leftSideNav.map(({ id, name, desc, menuItems }) => (
          <div key={id}>
            <div className="pl-4">
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
  );
};

export default LeftNavbar;
