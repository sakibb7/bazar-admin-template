const OverviewCard = ({ number, desc }) => {
  return (
    <div className="bg-slate-100 text-slate-800 text-center p-8 rounded-[1rem] ">
      <h1 className="text-4xl font-[600]">{number}</h1>
      <p className="font-[400]">{desc}</p>
    </div>
  );
};

export default OverviewCard;
