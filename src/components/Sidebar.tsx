import { Button, HStack, Image } from "@chakra-ui/react";
import { BsFileEarmarkPdf, BsLinkedin } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="lg:sticky lg:top-[4rem] h-fit w-full lg:w-[30rem] flex flex-col items-center">
            <Image
                src="/me.JPG"
                alt="pic"
                height={270}
                objectFit="cover"
                rounded="full"
                border={"2px"}
                borderColor="#2B3138"
                aspectRatio={1 / 1}
            />
            <div className="lg:w-[90%] flex flex-col gap-2 mt-4 p-4 lg:p-0">
                <div className="w-full flex flex-col">
                    <p className="text-xl 2xl:text-2xl font-semibold">
                        Gemmuel Dela Peña
                    </p>
                    <p className="text-secondaryGray text-lg">
                        Web developer | MERN | NextJS
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
                        <HiOutlineLocationMarker
                            size={18}
                            className="text-secondaryGray"
                        />
                        <p className="text-sm text-secondaryGray">
                            Nueva Ecija, Philippines
                        </p>
                    </HStack>
                    <HStack>
                        <IoMailOpenOutline className=" text-secondaryGray" />
                        <Link
                            href="mailto:bulletlangto@gmail.com"
                            className="text-sm text-secondaryGray hover:underline hover:text-blue-500"
                        >
                            bulletlangto@gmail.com
                        </Link>
                    </HStack>
                    <HStack>
                        <FaGithub className=" text-secondaryGray" />
                        <Link
                            href="https://github.com/BulletOnli"
                            target="_blank"
                            className="text-sm text-secondaryGray hover:underline hover:text-blue-500"
                        >
                            https://github.com/BulletOnli
                        </Link>
                    </HStack>
                </div>

                <div className="w-full h-[1px] bg-[#1F2937] my-4"></div>
                <p>Socials</p>
                <div className="flex items-center">
                    <Link
                        href="https://www.youtube.com/@bulletonli"
                        target="_blank"
                    >
                        <Image src="/socials/youtube.png" w={39} h={39} />
                    </Link>
                    <Link
                        href="https://www.tiktok.com/@bulletonli"
                        target="_blank"
                        className="-ml-[1rem]"
                    >
                        <Image src="/socials/tiktok.png" w={42} h={42} />
                    </Link>
                    <Link
                        href="https://www.facebook.com/gemmuel.delapena/"
                        target="_blank"
                        className="-ml-[1rem]"
                    >
                        <Image src="/socials/facebook.png" w={37} h={37} />
                    </Link>
                    <Link
                        href="https://instagram.com/gem.muel"
                        target="_blank"
                        className="-ml-[1rem]"
                    >
                        <Image src="/socials/instagram.png" w={45} h={45} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
