"use client";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "@/styles/swiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { PROJECT_QUERIESResult } from "../../../../sanity.types";

const ProjectsContainers = ({
  projects,
}: {
  projects: PROJECT_QUERIESResult;
}) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={15}
      cssMode={true}
      navigation={true}
      grabCursor={true}
      modules={[Navigation, Pagination]}
      className="mySwiper w-full max-w-5xl flex items-center"
    >
      {projects.map((project) => (
        <SwiperSlide
          key={project?.title}
          className="w-fit flex justify-center items-center"
        >
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsContainers;
