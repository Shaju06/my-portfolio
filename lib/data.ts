import corpcommentImg from "@/public/corpcomment.png";

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
    title: "About",
    path: "#about-me-section",
  },
  {
    title: "Projects",
    path: "#project-section",
  },
  {
    title: "Skills",
    path: "#my-skills-section",
  },
  {
    title: "Contact",
    path: "#my-skills-section",
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
