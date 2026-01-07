"use client";

import { useSectionInView } from "@/lib/customHooks";
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
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills-section"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsSet.map((skill, index) => (
          <motion.li
            className="bg-white/80 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 backdrop-blur-[0.5rem] shadow-sm hover:shadow-md hover:scale-105 transition duration-300"
            key={index}
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
