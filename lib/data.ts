import corpcommentImg from "@/public/corpcomment.png";
import React, { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export const skillsSet = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "GraphQL",
  "Apollo",
  "Node.js",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
  "SQL",
  "MySql",
  "MongoDB",
] as const;

export const navLinks = [
  {
    title: "Home",
    path: "#home-section",
    icon: MdHome,
  },
  {
    title: "Projects",
    path: "#project-section",
    icon: AiFillProject,
  },
  {
    title: "Skills",
    path: "#skills-section",
    icon: FaReact,
  },
  {
    title: "Experience",
    path: "#experience",
    icon: CgWorkAlt,
  },
  {
    title: "Contact",
    path: "#contact-us",
    icon: MdEmail,
  },
] as const;

export const projects = [
  {
    title: "Url Shortner",
    description:
      "Designed and implemented a URL shortener application that converts lengthy web addresses into compact, easy-to-share links. Integrated features include click tracking analytics.",
    tags: [
      "React",
      "Next.js",
      "Supabase",
      "Tailwind",
      "Server action",
      "React chartjs",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: corpcommentImg,
  },
] as const;

export const experiencesData = [
  {
    comapany: "Sapiens Technologies",
    title: "Software developer",
    description: `Currently working as a Software Developer, specializing in Next.js and MongoDB. Responsible for designing and developing reusable components, which are packaged and distributed as npm libraries to streamline project development. Actively involved in optimizing performance, enhancing user experiences, and collaborating with cross-functional teams to deliver scalable solutions`,
    icon: createElement(CgWorkAlt),
    date: "Sep 2023 - present",
  },
  {
    comapany: "Trantor software pvt ltd",
    title: "Frontend developer",
    description:
      "Worked as a Frontend Developer, leading the migration of a Backbone.js-based GRC portal to Next.js and implementing new features from the ground up. Played a key role in guiding the team through research and development of reusable components and efficient deployment strategies.",
    icon: createElement(CgWorkAlt),
    date: "Jan 2022 - Sep 2023",
  },
  {
    comapany: "Destm technologies",
    title: "Full-stack developer",
    description:
      "Worked as mern stack to build end-to-end chatbot for customer to communicate or place order. Worked on add-cart, managing state using redux, and fixed bugs.",
    icon: createElement(FaReact),
    date: "Mar 2021 - Jan 2022",
  },
  {
    comapany: "Henceforth Solutions",
    title: "Full-stack developer",
    description:
      "Worked as a developer to build a backend API to interact with the mobile app, and also built an admin panel UI with APIs to interact with the database.",
    icon: createElement(FaReact),
    date: "Aug 2020 - Mar 2021",
  },
  {
    comapany: "Brightroots software soultions",
    title: "Full-stack developer",
    description:
      "Worked as a developer to build a backend API to interact with the mobile app, and also built an admin panel UI with APIs to interact with the database.",
    icon: createElement(FaReact),
    date: "Sep 2019 - Apr 2020",
  },
] as const;
