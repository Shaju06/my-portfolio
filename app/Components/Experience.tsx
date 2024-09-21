"use client";
import React from "react";
import { useSectionInView } from "@/lib/customHooks";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/Context/Theme";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-40 text-center"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="#22c55e">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              className="vertical-timeline-element--work"
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "3px solid #22c55e",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid ",
              }}
              icon={item.icon}
              iconStyle={{
                background: "#22c55e",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-bold text-xl text-primary capitalize">
                {item.comapany}
              </h3>
              <p className="font-bold  text-gray-700 dark:text-white/75">
                {item.title} <span className=" text-sm">| {item.date} </span>
              </p>
              <p className=" !font-normal text-gray-500 dark:text-white/50">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
