"use client";
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    IconButton,
    useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBook, BsStar } from "react-icons/bs";
import { PiBookBookmark } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const pathname = usePathname();

    return (
        <>
            <div className="sticky top-0 z-50 w-full h-[4rem] lg:h-[5rem] flex justify-center items-center lg:items-end bg-opacity-25 bg-gray-38 shadow-lg backdrop-blur-md backdrop-filter rounded-10 border-b border-primary">
                <div className="w-full flex lg:hidden items-center justify-between mx-6 lg:mx-0">
                    <h1>Gemmuel</h1>
                    <FiMenu onClick={onOpen} />
                </div>
                <div className="hidden lg:flex gap-[7rem] ml-[20%] text-sm">
                    <HStack
                        as={Link}
                        href={"/"}
                        p={2}
                        borderBottom={"1px"}
                        borderColor={pathname === "/" ? "white" : "transparent"}
                        color={pathname === "/" ? "white" : "#9CA3AF"}
                    >
                        <BsBook color={"#7D8590"} />
                        <p>Overview</p>
                    </HStack>
                    <HStack
                        as={Link}
                        href={"/projects"}
                        p={2}
                        borderBottom={"1px"}
                        borderColor={
                            pathname === "/projects" ? "white" : "transparent"
                        }
                        color={pathname === "/projects" ? "white" : "#9CA3AF"}
                    >
                        <PiBookBookmark size={19} color={"#7D8590"} />
                        <p>Projects</p>
                    </HStack>
                    <HStack
                        as={Link}
                        href={"/about"}
                        p={2}
                        borderBottom={"1px"}
                        borderColor={
                            pathname === "/about" ? "white" : "transparent"
                        }
                        color={pathname === "/about" ? "white" : "#9CA3AF"}
                    >
                        <BsStar color={"#7D8590"} />
                        <p>About Me</p>
                    </HStack>
                    <HStack
                        as={Link}
                        href={"/contact"}
                        p={2}
                        borderBottom={"1px"}
                        borderColor={
                            pathname === "/contact" ? "white" : "transparent"
                        }
                        color={pathname === "/contact" ? "white" : "#9CA3AF"}
                    >
                        <RiContactsFill color={"#7D8590"} />
                        <p>Contact</p>
                    </HStack>
                </div>
            </div>

            <SidebarDrawer
                onClose={onClose}
                isOpen={isOpen}
                pathname={pathname}
            />
        </>
    );
};

const SidebarDrawer = ({
    onClose,
    isOpen,
    pathname,
}: {
    onClose: () => void;
    isOpen: boolean;
    pathname: string;
}) => {
    return (
        <Drawer onClose={onClose} isOpen={isOpen} size="xs">
            <DrawerOverlay />
            <DrawerContent bg="#0D1117" textColor="#F9FAFB">
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                    <div className="flex flex-col gap-1 ">
                        <HStack
                            as={Link}
                            href={"/"}
                            px={4}
                            py={2}
                            rounded={"lg"}
                            bg={pathname === "/" ? "#30363D" : "transparent"}
                            onClick={onClose}
                        >
                            <BsBook size={17} color={"#7D8590"} />
                            <p>Overview</p>
                        </HStack>
                        <HStack
                            as={Link}
                            href={"/projects"}
                            px={4}
                            py={2}
                            rounded={"lg"}
                            bg={
                                pathname === "/projects"
                                    ? "#30363D"
                                    : "transparent"
                            }
                            onClick={onClose}
                        >
                            <PiBookBookmark size={18} color={"#7D8590"} />
                            <p>Projects</p>
                        </HStack>
                        <HStack
                            as={Link}
                            href={"/about"}
                            px={4}
                            py={2}
                            rounded={"lg"}
                            bg={
                                pathname === "/about"
                                    ? "#30363D"
                                    : "transparent"
                            }
                            onClick={onClose}
                        >
                            <BsStar size={17} color={"#7D8590"} />
                            <p>About Me</p>
                        </HStack>
                        <HStack
                            as={Link}
                            href={"/contact"}
                            px={4}
                            py={2}
                            rounded={"lg"}
                            bg={
                                pathname === "/contact"
                                    ? "#30363D"
                                    : "transparent"
                            }
                            onClick={onClose}
                        >
                            <RiContactsFill size={17} color={"#7D8590"} />
                            <p>Contact</p>
                        </HStack>
                    </div>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default Navbar;
