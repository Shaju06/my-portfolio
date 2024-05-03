"use client";

import React from "react";
import { skillsSet } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="my-skills-section"
      className="text-center text-light-Accent dark:text-dark-Accent  mt-6 mb-20"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsSet.map((skill, index) => (
          <motion.li
            className=" borderBlack rounded-xl px-5 py-3 bg-indigo-300 text-white/80 dark:text-black/80"
            key={index}
            aria-label={skill}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
