import { HStack } from "@chakra-ui/react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaGitlab } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import Link from "next/link";

const SidebarLinks = () => {
    return (
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
        </div>
    );
};

export default SidebarLinks;
