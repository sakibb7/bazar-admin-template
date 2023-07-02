import { BsThreeDotsVertical } from "react-icons/bs";

const SateCard = () => {
  return (
    <div className="w-full bg-slate-50 rounded-[1rem] flex flex-col items-center gap-8 p-8 drop-shadow-md text-slate-500 font-[600]">
      <div className="flex justify-between items-center w-full">
        <p>Features</p>
        <p>
          <BsThreeDotsVertical />
        </p>
      </div>
      <div className=" text-center text-sky-600">
        <h1 className=" text-6xl font-[700]">32</h1>
        <p>Proposals</p>
      </div>
      <div>
        <p>
          <span className="font-[400]">Implemented: </span> 8
        </p>
      </div>
    </div>
  );
};

export default SateCard;
