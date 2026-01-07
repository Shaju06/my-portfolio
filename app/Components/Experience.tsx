"use client";

import { useSectionInView } from '@/lib/customHooks';
import { experiencesData } from '@/lib/data';
import React from 'react';
import SectionHeading from './SectionHeading';

import { useTheme } from 'next-themes';
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
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                background:
                  theme === 'light'
                    ? "rgba(255, 255, 255, 0.6)" // Glass effect light
                    : "rgba(255, 255, 255, 0.05)", // Glass effect dark
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "1rem", // Softer corners
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? "0.4rem solid rgba(255, 255, 255, 0.6)"
                    : "0.4rem solid rgba(255, 255, 255, 0.05)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === 'light'
                    ? "rgba(255, 255, 255, 0.9)"
                    : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
                color: theme === 'light' ? "#1f2937" : "#e5e7eb",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
              }}
              className="vertical-timeline-element--work"
            >
              <h3 className="font-bold text-xl capitalize dark:text-white/90">
                {item.title}
              </h3>
              <p className="font-medium text-gray-700 dark:text-white/75 !mt-0">
                {item.comapany}
              </p>
              <p className="!mt-4 !font-normal text-gray-600 dark:text-white/60 leading-relaxed">
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
