import StateCard from "../components/card/SateCard";
import { projectCard } from "../data/projectData";
import GithubIssues from "../layers/project/GithubIssues";
import Header from "../layers/project/Header";
import TaskSchedule from "../layers/project/TaskSchedule";

const Project = () => {
  return (
    <div className="">
      <Header />
      <div className="grid lg:grid-cols-4 gap-8 p-8 grid-cols-1 md:grid-cols-2">
        {projectCard.map(
          ({ id, title, total, desc, status, remaining, color }) => (
            <StateCard
              key={id}
              title={title}
              total={total}
              desc={desc}
              status={status}
              remaining={remaining}
              color={color}
            />
          )
        )}
      </div>
      <div className="">
        <GithubIssues />
        <TaskSchedule />
      </div>
    </div>
  );
};

export default Project;
