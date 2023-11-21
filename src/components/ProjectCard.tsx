import { HStack, Image } from "@chakra-ui/react";
import Link from "next/link";

type ProjectCardProps = {
    imgSrc: string;
    title: string;
    description: string;
    techStack: string[];
    link?: string;
};

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Link
            href={props.link || "/"}
            target="_blank"
            className="max-w-[23rem] p-4 flex flex-grow flex-col items-center hover:bg-[#0E0A26] bg-[#050914] gap-2 border border-primary rounded-xl"
        >
            <Image
                src={props.imgSrc}
                w={"full"}
                h={170}
                objectFit={"cover"}
                aspectRatio={16 / 9}
                rounded={"lg"}
            />
            <div className="w-full">
                <p className="font-semibold text-sm lg:text-base mb-1">
                    {props.title}
                </p>
                <p className="text-secondaryGray text-xs lg:text-sm">
                    {props.description}
                </p>
            </div>
            <div className="w-full flex items-center flex-wrap gap-1 mt-1">
                {props.techStack.map((tech) => (
                    <div
                        key={tech}
                        className="text-[10px] lg:text-xs text-secondaryGray lg:py-1 px-3 rounded-md bg-secondary"
                    >
                        {tech}
                    </div>
                ))}
            </div>
        </Link>
    );
};

export default ProjectCard;
