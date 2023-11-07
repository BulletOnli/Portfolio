import { Button, HStack, Image } from "@chakra-ui/react";
import { BsFileEarmarkPdf, BsLinkedin } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="w-full lg:w-[30rem] flex flex-col items-center">
            <Image
                src="/me.JPG"
                alt="pic"
                height={270}
                objectFit="cover"
                rounded="full"
                border={"2px"}
                borderColor="#2B3138"
                mt={10}
                aspectRatio={1 / 1}
            />
            <div className="lg:w-[90%] flex flex-col gap-2 mt-4 p-4 lg:p-0">
                <div className="w-full flex flex-col">
                    <p className="text-xl 2xl:text-2xl font-semibold">
                        Gemmuel Dela Peña
                    </p>
                    <p className="text-[#585e68] text-lg">
                        Web developer | MERN
                    </p>
                </div>

                <HStack w="full" my={1}>
                    <Button
                        w="full"
                        size="sm"
                        colorScheme=""
                        bgColor={"#30363D"}
                        border={"1px"}
                        borderColor={"#5D6064"}
                        textColor={"#ACCCD9"}
                        leftIcon={<BsFileEarmarkPdf size={16} />}
                    >
                        Resume
                    </Button>
                    <Button
                        w="full"
                        size="sm"
                        colorScheme=""
                        bgColor={"#30363D"}
                        border={"1px"}
                        borderColor={"#5D6064"}
                        textColor={"#ACCCD9"}
                        leftIcon={<BsLinkedin />}
                        as={Link}
                        href={"https://www.linkedin.com/in/gemmuel-dela-pena/"}
                        target="_blank"
                    >
                        LinkedIn
                    </Button>
                </HStack>

                <div className="mt-4 flex flex-col gap-1">
                    <HStack>
                        <HiOutlineLocationMarker className=" text-[#ACCCD9]" />
                        <p className="text-sm text-[#ACCCD9]">
                            Nueva Ecija, Philippines
                        </p>
                    </HStack>
                    <HStack>
                        <AiOutlineFileProtect className=" text-[#ACCCD9]" />
                        <p className="text-sm text-[#ACCCD9]">
                            Lorem ipsum dolor sit amet.
                        </p>
                        1
                    </HStack>
                    <HStack>
                        <AiOutlineFileProtect className=" text-[#ACCCD9]" />
                        <p className="text-sm text-[#ACCCD9]">
                            Lorem ipsum dolor sit amet.
                        </p>
                    </HStack>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
