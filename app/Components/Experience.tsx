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
                    ? '#f3f4f6'
                    : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === 'light'
                    ? 'white'
                    : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
                color:
                  theme === 'light' ? '#1f2937' : '#e5e7eb',
                backdropFilter: 'blur(8px)',
              }}
              className="vertical-timeline-element--work"
            >
              <h3 className="font-semibold capitalize dark:text-white/90">
                {item.title}
              </h3>
              <p className="font-normal !mt-0 dark:text-white/70">
                {item.comapany}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/50">
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
