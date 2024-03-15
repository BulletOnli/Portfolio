import Readme from "@/components/Readme";
import Skills from "@/components/Skills";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Readme />

      <div className="w-full flex flex-col gap-4 mt-10">
        <p className="text-xl font-semibold tracking">Languages & Tools</p>
        <Skills />
      </div>
    </div>
  );
};

export default HomePage;
