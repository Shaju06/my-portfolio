import corpcommentImg from "@/public/corpcomment.png";
import React, { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
  },
  {
    title: "Projects",
    path: "#project-section",
  },
  {
    title: "Skills",
    path: "#skills-section",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Contact",
    path: "#contact-us",
  },
] as const;

export const projects = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
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
    description: `I'm working as software developer mainly on nextjs and mongodb. Responsible to design and develope inaurance related features to the products.`,
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    comapany: "Trantor software pvt ltd",
    title: "Frontend developer",
    description:
      "Worked as frontend dev, migrated backbone product to nextjs and implement new feature to it from the scratch.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    comapany: "Destm technologies",
    title: "Full-stack developer",
    description:
      "Worked as mern stack to build end-to-end chatbot for customer to communicate or place order. Worked on add-cart, managing state using redux, and fixed bugs",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    comapany: "Henceforth Solutions",
    title: "Full-stack developer",
    description:
      "Worked as a developer to build a backend API to interact with the mobile app, and also built an admin panel UI with APIs to interact with the database.",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    comapany: "Brightroots software soultions",
    title: "Full-stack developer",
    description:
      "Worked as a developer to build a backend API to interact with the mobile app, and also built an admin panel UI with APIs to interact with the database.",
    icon: React.createElement(FaReact),
    date: "2019 - 2020",
  },
] as const;
