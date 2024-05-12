"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import myImage from "@/public/varinder.png";
import { useSectionInView } from "@/lib/customHooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveLinkContext } from "@/Context/ActiveLinkContext";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveLinkContext();

  return (
    <>
      <section
        ref={ref}
        id="home-section"
        className="pt-10 min-h-800 scroll-mt-[100rem] "
      >
        <div className="flex flex-col justify-center">
          <div className="flex justify-center mb-5">
            <Image
              src={myImage}
              alt="Project I worked on"
              // quality={95}
              priority
              className="w-[250px] h-[250px]  rounded-full animate-curve border-primary"
            />
          </div>
          <div className="text-light-Accent dark:text-dark-Accent flex justify-normal flex-col">
            <h1 className="text-xxl text-center md:text-5xl font-black leading-none pb-4 md:pb-8">
              Varinder Pal Singh
            </h1>
            <h1 className="text-xxl text-center md:text-5xl font-black leading-none pb-4 md:pb-8">
              Full Stack
            </h1>
            {/* <div className=" grid grid-cols-2 gap-4 mt-[100px] relative"> */}
            <p className="">
              I am &nbsp;
              <span className="font-bold text-light-Primary dark:text-dark-Primary">
                Full-stack Developer &nbsp;
              </span>
              based in India, skilled at crafting websites and applications
              using React, Next, JavaScript, TypeScript, Express and MongoDB,
              though I am very capable of learning new skills fast and happy to
              work in any environment.
              <br />
              <br />
              My greatest strengths are in Front End. I have excellent
              commercial experience in this area, with a keen interest to expand
              my skillset in a diverse range of technologies.
            </p>

            {/* </div> */}
          </div>
        </div>
        <motion.div
          className="flex items-center flex-col sm:flex-row justify-center mt-8  gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            className="bg-primary group rounded-full text-white px-7 py-3 flex items-center focus:scale-110 hover:scale-110 hover:bg-hover-primary"
            href="#contact-us"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <Link
            href="#"
            className="group  border border-black/5  dark:text-white dark:bg-white/10 flex justify-center items-center gap-2 px-7 py-3 rounded-full outline-none"
          >
            Download Resume
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </Link>
          <Link
            className="bg-white border border-black/5 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/varinder-pal-singh-4896b743/"
            target="_blank"
          >
            <BsLinkedin />
          </Link>
          <Link
            className="bg-white border border-black/5 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Shaju06"
            target="_blank"
          >
            <FaGithubSquare />
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
