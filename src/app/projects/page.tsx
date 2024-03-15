import ProjectsContainers from "@/components/ProjectsContainers";
import { PersonalProjects, TeamProjects } from "../data/ProjectsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectPage = () => {
  return (
    <div className="w-full flex flex-col mt-6 lg:mt-0">
      <div className="w-full overflow-hidden flex flex-col items-center gap-4">
        <h1 className="w-full text-xl font-semibold">Personal Projects</h1>
        <ProjectsContainers projects={PersonalProjects} />
      </div>
      <div className="w-full overflow-hidden flex flex-col items-center gap-4 mt-10">
        <h1 className="w-full text-xl font-semibold">Team Projects</h1>
        <ProjectsContainers projects={TeamProjects} />
      </div>
    </div>
  );
};

export default ProjectPage;
