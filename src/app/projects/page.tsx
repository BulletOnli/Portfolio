import ProjectCard from "@/components/ProjectCard";

const ProjectPage = () => {
    return (
        <div className="w-full flex flex-col mt-6 lg:mt-0">
            <h1 className="text-2xl font-semibold mb-6">My Works</h1>
            <div className="w-full flex flex-wrap justify-evenly gap-4">
                <ProjectCard
                    title="Linkgrove"
                    description="Discover and share all your important links in one place."
                    imgSrc="/projects/linkgrove.png"
                    techStack={["MongoDB", "ExpressTS", "NextTS", "NodeTS"]}
                />
                <ProjectCard
                    title="Ookra"
                    description="E-Commerce website with User and Seller Account"
                    imgSrc="/projects/ookra.png"
                    techStack={["MongoDB", "ExpressTS", "NextTS", "NodeTS"]}
                />
                <ProjectCard
                    title="TypeMoko"
                    description="A website to measure your typing speed and accuracy."
                    imgSrc="/projects/typemoko.png"
                    techStack={["HTML", "CSS", "JS"]}
                />
            </div>
        </div>
    );
};

export default ProjectPage;
