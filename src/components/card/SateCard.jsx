import { BsThreeDotsVertical } from "react-icons/bs";

const SateCard = ({ title, total, desc, status, remaining, color }) => {
  return (
    <div className="w-full bg-slate-50 rounded-[1rem] flex flex-col items-center gap-8 p-8 drop-shadow-md text-slate-500 font-[600]">
      <div className="flex justify-between items-center w-full">
        <p>{title}</p>
        <p>
          <BsThreeDotsVertical />
        </p>
      </div>
      <div className={`text-center ${color}`}>
        <h1 className=" text-6xl font-[700]">{total}</h1>
        <p>{desc}</p>
      </div>
      <div>
        <p>
          <span className="font-[400]">{status}: </span> {remaining}
        </p>
      </div>
    </div>
  );
};

export default SateCard;
