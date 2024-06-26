"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/customHooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      ref={ref}
      id="project-section"
      className="text-center scroll-mt-20 mb-20 text-light-Accent dark:text-dark-Accent  pt-10"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="grid  gap-4">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
