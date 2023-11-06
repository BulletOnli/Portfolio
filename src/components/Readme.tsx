"use client";
import { GoPencil } from "react-icons/go";
import Typewriter from "typewriter-effect";

const Readme = () => {
    return (
        <div className="relative w-full h-[9rem] p-2 lg:p-4 flex justify-center items-center border border-[#2B3138] rounded-lg">
            <div className="absolute top-0 w-full p-3 lg:p-5 flex justify-between items-center">
                <p className="text-white text-xs">
                    BulletOnli / README
                    <span className="text-[#696E73] text-[11px]">.md</span>
                </p>
                <GoPencil className="cursor-pointer text-[#696E73] " />
            </div>
            <p className="text-[#30A4D7] tracking-wider text-lg lg:text-2xl font-semibold text-center">
                <Typewriter
                    options={{
                        strings: [
                            "I love to build things.",
                            "Things for the web.",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </p>
        </div>
    );
};

export default Readme;
