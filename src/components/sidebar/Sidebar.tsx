import { Button, HStack, Image } from "@chakra-ui/react";
import { BsFileEarmarkPdf, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import SidebarLinks from "./SidebarLinks";
import SocialsGrid from "./SocialsGrid";

const Sidebar = () => {
  return (
    <div className="xl:sticky xl:top-[4rem] h-fit w-full xl:w-[30rem] flex flex-col md:flex-row xl:flex-col justify-center items-center">
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
      <div className="xl:w-[90%] flex flex-col gap-2 mt-4 p-4 xl:p-0">
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

        <SidebarLinks />

        <div className="w-full h-[1px] bg-[#1F2937] my-4"></div>
        <p>Socials</p>
        <SocialsGrid />
      </div>
    </div>
  );
};

export default Sidebar;
