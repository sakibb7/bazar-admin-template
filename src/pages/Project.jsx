import SateCard from "../components/card/SateCard";
import GithubIssues from "../layers/project/GithubIssues";
import Header from "../layers/project/Header";
import TaskSchedule from "../layers/project/TaskSchedule";

const Project = () => {
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-4 gap-8 p-8">
        <SateCard />
        <SateCard />
        <SateCard />
        <SateCard />
      </div>
      <div>
        <GithubIssues />
        <TaskSchedule />
      </div>
    </div>
  );
};

export default Project;
