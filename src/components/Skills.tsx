import { Image } from "@chakra-ui/react";

const Skills = () => {
    return (
        <div className="grid grid-cols-3 lg:grid-cols-6  justify-items-center items-center gap-7">
            <Skill src="/html.png" name="HTML" />
            <Skill src="/css.png" name="CSS" />
            <Skill src="/sass.png" name="SASS" />
            <div className="w-[6rem] h-[6rem] lg:w-[7rem] lg:h-[7rem] flex flex-col items-center justify-center border border-[#2B3138] rounded-md">
                <Image
                    src="/tailwind.png"
                    alt="tailwind"
                    width={["35px", "40px"]}
                />
                <p className="mt-4 text-xs lg:text-sm">Tailwind</p>
            </div>
            <Skill src="/javascript.png" name="Javascript" />
            <Skill src="/typescript.png" name="Typescript" />
            <Skill src="/react.png" name="ReactJS" />
            <Skill src="/next.png" name="NextJS" />
            <Skill src="/node.svg" name="NodeJS" />
            <Skill src="/express.png" name="ExpressJS" />
            <Skill src="/mongo.png" name="MongoDB" />
            <div className="w-[6rem] h-[6rem] lg:w-[7rem] lg:h-[7rem] flex flex-col items-center justify-center border border-[#2B3138] rounded-md">
                <Image
                    src="/chakra.png"
                    alt="chakraui"
                    width={["60px", "70px"]}
                />
                <p className="text-xs lg:text-sm">ChakraUI</p>
            </div>
            <Skill src="/git.png" name="Git" />
            <Skill src="/figma.png" name="Figma" />
        </div>
    );
};

const Skill = ({ src, name }: { src: string; name: string }) => {
    return (
        <div className="w-[6rem] h-[6rem] lg:w-[7rem] lg:h-[7rem] flex flex-col gap-2 items-center justify-center border border-[#2B3138] rounded-md">
            <Image src={src} alt={name} width={["32px", "40px"]} />
            <p className="text-xs lg:text-sm">{name}</p>
        </div>
    );
};

export default Skills;
