import { Image } from "@chakra-ui/react";

const Skills = () => {
    return (
        <div className="flex flex-wrap justify-center gap-2 lg:gap-7">
            <Skill width={["32px", "40px"]} src="/html.png" name="HTML" />
            <Skill width={["32px", "40px"]} src="/css.png" name="CSS" />
            <Skill width={["32px", "40px"]} src="/sass.png" name="SASS" />
            <Skill
                width={["35px", "40px"]}
                src="/tailwind.png"
                name="Tailwind"
            />
            <Skill
                width={["32px", "40px"]}
                src="/javascript.png"
                name="Javascript"
            />
            <Skill
                width={["32px", "40px"]}
                src="/typescript.png"
                name="Typescript"
            />
            <Skill width={["32px", "40px"]} src="/react.png" name="ReactJS" />
            <Skill width={["32px", "40px"]} src="/next.png" name="NextJS" />
            <Skill width={["32px", "40px"]} src="/node.svg" name="NodeJS" />
            <Skill
                width={["32px", "40px"]}
                src="/express.png"
                name="ExpressJS"
            />
            <Skill width={["32px", "40px"]} src="/mongo.png" name="MongoDB" />
            <Skill width={["60px", "70px"]} src="/chakra.png" name="ChakraUI" />
            <Skill
                width={["40px", "50px"]}
                src="/firebase.png"
                name="Firebase"
            />
            <Skill width={["40px", "80px"]} src="/zustand.png" name="Zustand" />
            <Skill
                width={["32px", "40px"]}
                src="/reactquery.png"
                name="React Query"
            />
            <Skill width={["32px", "40px"]} src="/git.png" name="Git" />
            <Skill width={["28px", "32px"]} src="/figma.png" name="Figma" />
        </div>
    );
};

const Skill = ({
    src,
    name,
    width,
}: {
    src: string;
    name: string;
    width: string[];
}) => {
    return (
        <div className="w-[6rem] h-[6rem] lg:w-[7rem] lg:h-[7rem] flex flex-col gap-2 items-center justify-center border border-[#1F2937] rounded-md">
            <Image src={src} alt={name} width={width} />
            <p className="text-xs lg:text-sm">{name}</p>
        </div>
    );
};

export default Skills;
