import ProjectsContainers from "@/app/projects/_components/ProjectsContainers";
import { Metadata } from "next";
import { sanityFetch } from "@/utils/sanity";
import { PROJECT_QUERIES } from "@/queries/sanityQueries";

export const metadata: Metadata = {
  title: "Projects",
};

const ProjectPage = async () => {
  const projects = await sanityFetch({
    query: PROJECT_QUERIES,
    revalidate: 60,
  });

  return (
    <div className="w-full flex flex-col mt-6 lg:mt-0">
      <div className="w-full overflow-hidden flex flex-col items-center gap-4">
        <h1 className="w-full text-xl font-semibold">Personal Projects</h1>
        <ProjectsContainers projects={projects as any} />
      </div>
      {/* <div className="w-full overflow-hidden flex flex-col items-center gap-4 mt-10">
        <h1 className="w-full text-xl font-semibold">Team Projects</h1>
        <ProjectsContainers projects={TeamProjects} />
      </div> */}
    </div>
  );
};

export default ProjectPage;
