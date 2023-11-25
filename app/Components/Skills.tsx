'use client'

import React from "react";
import { skillsSet } from "@/lib/data";
import { motion } from "framer-motion";

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
        <section id='my-skills-section' className="text-center text-light-Accent dark:text-dark-Accent  mt-6 mb-20">
            <h1 className='text-[24px] border-b-4 border-light-Primary dark:border-dark-Primary inline-block pb-1 mb-20'>My Skills</h1>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsSet.map((skill, index) => (
          <motion.li
            className="bg-red borderBlack rounded-xl px-5 py-3 bg-light-Primary/20 dark:bg-dark-Primary/20 dark:text-white/80"
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
    )

}

export default Skills