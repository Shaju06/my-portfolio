"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/customHooks";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact-us"
      className="mb-20 sm:mb-28  text-center"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <div className="flex justify-center">
        <div className=" flex justify-center gap-2 items-center  border border-zinc-500 rounded-3xl p-[1.5rem]   dark:text-white/80">
          <Link
            href="mailto:Varipaul@gmail.com"
            className="flex justify-center items-center gap-2"
          >
            <p className="bg-white border border-black/5 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer  dark:bg-white/10 dark:text-white/60">
              <MdOutlineEmail />
            </p>
            <p className="mr-2">Varipaul@gmail.com </p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/varinder-pal-singh-4896b743/"
            className="flex justify-center items-center gap-2"
            target="_blank"
          >
            <p className="bg-white border border-black/5 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer  dark:bg-white/10 dark:text-white/60">
              {" "}
              <BsLinkedin />
            </p>
            <p>Linkedin</p>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
