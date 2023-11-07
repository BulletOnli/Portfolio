import { HStack, IconButton } from "@chakra-ui/react";
import { BsFillEyeFill } from "react-icons/bs";
import { BiLink } from "react-icons/bi";

const ProjectPage = () => {
    return (
        <div className="w-full flex flex-col ">
            <h1 className="text-2xl font-semibold mb-6">My Works</h1>
            <div className="w-full grid grid-cols-3 gap-10 justify-items-center justify-center items-center">
                <div className="project-container w-[17rem] h-[12rem] bg-[url('/linkgrove.png')] bg-center bg-cover ">
                    <div className="project-overlay absolute hidden w-full h-full flex-col justify-center items-center bg-black bg-opacity-60 ">
                        <p className="font-medium mb-4">Project Name</p>
                        <HStack spacing={7}>
                            <BsFillEyeFill
                                size={21}
                                className="cursor-pointer "
                            />
                            <BiLink size={21} className="cursor-pointer " />
                        </HStack>
                    </div>
                </div>

                <div className="project-container w-[17rem] h-[12rem] bg-[url('/linkgrove.png')] bg-center bg-cover ">
                    <div className="project-overlay absolute hidden w-full h-full flex-col justify-center items-center bg-black bg-opacity-60 ">
                        <p className="font-medium mb-4">Project Name</p>
                        <HStack spacing={7}>
                            <BsFillEyeFill
                                size={21}
                                className="cursor-pointer "
                            />
                            <BiLink size={21} className="cursor-pointer " />
                        </HStack>
                    </div>
                </div>

                <div className="project-container w-[17rem] h-[12rem] bg-[url('/linkgrove.png')] bg-center bg-cover ">
                    <div className="project-overlay absolute hidden w-full h-full flex-col justify-center items-center bg-black bg-opacity-60 ">
                        <p className="font-medium mb-4">Project Name</p>
                        <HStack spacing={7}>
                            <BsFillEyeFill
                                size={21}
                                className="cursor-pointer "
                            />
                            <BiLink size={21} className="cursor-pointer " />
                        </HStack>
                    </div>
                </div>

                <div className="project-container w-[17rem] h-[12rem] bg-[url('/linkgrove.png')] bg-center bg-cover ">
                    <div className="project-overlay absolute hidden w-full h-full flex-col justify-center items-center bg-black bg-opacity-60 ">
                        <p className="font-medium mb-4">Project Name</p>
                        <HStack spacing={7}>
                            <BsFillEyeFill
                                size={21}
                                className="cursor-pointer "
                            />
                            <BiLink size={21} className="cursor-pointer " />
                        </HStack>
                    </div>
                </div>

                <div className="project-container w-[17rem] h-[12rem] bg-[url('/linkgrove.png')] bg-center bg-cover ">
                    <div className="project-overlay absolute hidden w-full h-full flex-col justify-center items-center bg-black bg-opacity-60 ">
                        <p className="font-medium mb-4">Project Name</p>
                        <HStack spacing={7}>
                            <BsFillEyeFill
                                size={21}
                                className="cursor-pointer "
                            />
                            <BiLink size={21} className="cursor-pointer " />
                        </HStack>
                    </div>
                </div>

                <div className="project-container w-[17rem] h-[12rem] bg-[url('/linkgrove.png')] bg-center bg-cover ">
                    <div className="project-overlay absolute hidden w-full h-full flex-col justify-center items-center bg-black bg-opacity-60 ">
                        <p className="font-medium mb-4">Project Name</p>
                        <HStack spacing={7}>
                            <BsFillEyeFill
                                size={21}
                                className="cursor-pointer "
                            />
                            <BiLink size={21} className="cursor-pointer " />
                        </HStack>
                    </div>
                </div>

                <div className="project-container w-[17rem] h-[12rem] bg-[url('/linkgrove.png')] bg-center bg-cover ">
                    <div className="project-overlay absolute hidden w-full h-full flex-col justify-center items-center bg-black bg-opacity-60 ">
                        <p className="font-medium mb-4">Project Name</p>
                        <HStack spacing={7}>
                            <BsFillEyeFill
                                size={21}
                                className="cursor-pointer "
                            />
                            <BiLink size={21} className="cursor-pointer " />
                        </HStack>
                    </div>
                </div>

                <div className="project-container w-[17rem] h-[12rem] bg-[url('/linkgrove.png')] bg-center bg-cover ">
                    <div className="project-overlay absolute hidden w-full h-full flex-col justify-center items-center bg-black bg-opacity-60 ">
                        <p className="font-medium mb-4">Project Name</p>
                        <HStack spacing={7}>
                            <BsFillEyeFill
                                size={21}
                                className="cursor-pointer "
                            />
                            <BiLink size={21} className="cursor-pointer " />
                        </HStack>
                    </div>
                </div>

                <div className="project-container w-[17rem] h-[12rem] bg-[url('/linkgrove.png')] bg-center bg-cover ">
                    <div className="project-overlay absolute hidden w-full h-full flex-col justify-center items-center bg-black bg-opacity-60 ">
                        <p className="font-medium mb-4">Project Name</p>
                        <HStack spacing={7}>
                            <BsFillEyeFill
                                size={21}
                                className="cursor-pointer "
                            />
                            <BiLink size={21} className="cursor-pointer " />
                        </HStack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
