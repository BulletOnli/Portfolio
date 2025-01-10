import ProjectsContainers from "@/app/projects/_components/ProjectsContainers";
import { Metadata } from "next";
import { PROJECT_QUERIES } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECT_QUERIESResult } from "../../../sanity.types";
import { PROJECT_TYPE } from "@/constants";

export const metadata: Metadata = {
  title: "Projects",
};

export const dynamic = "force-dynamic";

const ProjectPage = async () => {
  const projects = await sanityFetch<PROJECT_QUERIESResult>({
    query: PROJECT_QUERIES,
    revalidate: 60,
  });

  const personalProjects = projects.filter(
    (project) => project.type === PROJECT_TYPE.Personal
  );

  const teamProjects = projects.filter(
    (project) => project.type === PROJECT_TYPE.Team
  );

  return (
    <div className="w-full flex flex-col mt-6 lg:mt-0">
      <div className="w-full overflow-hidden flex flex-col items-center gap-4">
        <h1 className="w-full text-xl font-semibold">Personal Projects</h1>
        <ProjectsContainers projects={personalProjects} />
      </div>
      <div className="w-full overflow-hidden flex flex-col items-center gap-4 mt-10">
        <h1 className="w-full text-xl font-semibold">Team Projects</h1>
        <ProjectsContainers projects={teamProjects} />
      </div>
    </div>
  );
};

export default ProjectPage;
