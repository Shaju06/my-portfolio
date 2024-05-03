"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import myImage from "@/public/varinder.png";

const Skills = dynamic(() => import("./Skills"), {
  loading: () => <p>Loading...</p>,
});

const Contact = dynamic(() => import("./Contact"), {
  loading: () => <p>Loading...</p>,
});

const Projects = dynamic(() => import("./Projects"), {
  loading: () => <p>Loading...</p>,
});

const Hero = () => {
  return (
    <>
      <section id="home-section" className="pt-10 min-h-800">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center mb-5">
            <Image
              src={myImage}
              alt="Project I worked on"
              // quality={95}
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
      </section>
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Hero;
