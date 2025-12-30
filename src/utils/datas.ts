// Stack Icons
import htmlIcon from "@icons/html.svg";
import cssIcon from "@icons/css.svg";
import jsIcon from "@icons/js.svg";
import phpIcon from "@icons/php.svg";
import sassIcon from "@icons/sass.svg";
import bootstrapIcon from "@icons/bootstrap.svg";
import tailwindIcon from "@icons/tailwind.svg";
import reactIcon from "@icons/react.svg";
import nextjsIcon from "@icons/nextjs.svg";
import threejsIcon from "@icons/threejs.svg";
import laravelIcon from "@icons/laravel.svg";
import nodejsIcon from "@icons/nodejs.svg";
import npmIcon from "@icons/npm.svg";
import yarnIcon from "@icons/yarn.svg";
import blenderIcon from "@icons/blender.svg";
import figmaIcon from "@icons/figma.svg";
import gitIcon from "@icons/git.svg";
import githubIcon from "@icons/github.svg";
import mysqlIcon from "@icons/mysql.svg";
import splineIcon from "@icons/spline.svg";
import vscodeIcon from "@icons/vscode.svg";
import vite from "@icons/vite.svg";
import webpackIcon from "@icons/webpack.svg";
import expressIcon from "@icons/express.svg";
import mongodbIcon from "@icons/mongodb.svg";
import typescriptIcon from "@icons/typescript.svg";
import reactQueryIcon from "@icons/react-query.svg";
import formikIcon from "@icons/formik.png";

// Project Images

import comingsoon from "@images/comingsoon.webp";
import gocJoki from "@images/gocJoki-blog.webp";
import gocJokiGif from "@images/gocJokiGif.gif";
import techPointGif from "@images/techPoint.gif";
import TechPoint from "@images/TechPoint.webp";
import HEOC from "@images/HEOC.webp";
import HeocGif from "@images/heoc.gif";
import Karnexa from "@images/karnexa-project.webp";
import KarnexaGif from "@images/karnexa.gif";

const tools = {
  Git: { name: "Git", src: gitIcon, level: "Version control" },
  Github: { name: "Github", src: githubIcon, level: "Git hosting" },
  NPM: { name: "NPM", src: npmIcon, level: "Package manager" },
  Yarn: { name: "Yarn", src: yarnIcon, level: "Package manager" },
  Vite: { name: "Vite", src: vite, level: "Build tool" },
  VSCode: { name: "VSCode", src: vscodeIcon, level: "Code editor" },
  Figma: { name: "Figma", src: figmaIcon, level: "UIUX Design tool" },
  Blender: { name: "Blender", src: blenderIcon, level: "3D software" },
  Spline: { name: "Spline", src: splineIcon, level: "Web 3D design" },
};

const stacks = {
  HTML: { name: "HTML", src: htmlIcon, level: "Advanced" },
  CSS: { name: "CSS", src: cssIcon, level: "Advanced" },
  SASS: { name: "SASS", src: sassIcon, level: "Advanced" },
  PHP: { name: "PHP", src: phpIcon, level: "Intermediate" },
  JS: { name: "Javascript", src: jsIcon, level: "Advanced" },
  Typescript: { name: "Typescript", src: typescriptIcon, level: "Beginer" },
  Webpack: { name: "Webpack", src: webpackIcon, level: "Advanced" },
  React: { name: "ReactJS", src: reactIcon, level: "Advanced" },
  NextJS: { name: "NextJS", src: nextjsIcon, level: "Advanced" },
  ReactQuery: {
    name: "React Query",
    src: reactQueryIcon,
    level: "Intermediate",
  },
  Formik: { name: "Formik", src: formikIcon, level: "Intermediate" },
  ThreeJS: {
    name: "ThreeJS",
    src: threejsIcon,
    level: "Use Spline Tools",
  },
  Laravel: { name: "Laravel", src: laravelIcon, level: "Beginer" },
  Express: { name: "ExpressJS", src: expressIcon, level: "Beginner" },
  Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Intermediate" },
  Tailwind: { name: "TailwindCSS", src: tailwindIcon, level: "Advanced" },
  MySQL: { name: "MySQL", src: mysqlIcon, level: "Intermediate" },
  MongoDB: { name: "MongoDB", src: mongodbIcon, level: "Beginer" },
  Node: { name: "NodeJS", src: nodejsIcon, level: "Development Environtment" },

};
const projects = [
  ...Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: "Coming Soon!",
    desc: "This project is currently under development. Stay tuned for something exciting!",
    image: comingsoon,
    web: "/under-develop-project",
    repo: "",
    stack: "HTML, CSS, JavaScript",
    gif: "",
  })),
  {
    id: 12,
    name: "KARNEXA – Interactive Portfolio & Creative Studio Platform",
    desc: "KARNEXA is a high-fidelity interactive portfolio platform engineered to showcase advanced frontend craftsmanship and motion-driven user experience. The project emphasizes tactile UI interactions through custom cursor systems, magnetic components, and smooth GSAP–Framer Motion orchestration, while maintaining performance integrity alongside Three.js scenes. Designed as a premium digital presence, KARNEXA represents a fusion of engineering precision and visual storytelling for modern web-based creative studios.",
    image: Karnexa,
    web: "https://karnexa.vercel.app/",
    repo: "https://github.com/Bramahimm/Karnexa",
    stack:
      "Next.js, TypeScript, Tailwind CSS v4, Framer Motion, GSAP, Three.js (R3F)",
    gif: KarnexaGif,
  },
  {
    id: 11,
    name: "TechPoint - Mini ECommerce Business Website",
    desc: "TechPoint is a modern e-commerce solution focused on the technology retail sector, engineered using a high-performance Monorepo architecture. By decoupling the Back-end (API) from the Front-end (UI/UX), the project ensures superior scalability, optimized load speeds, and a seamless user experience. The platform features a robust product management system and a responsive interface tailored for high-conversion digital commerce.",
    image: TechPoint,
    web: "/under-develop-project",
    repo: "https://github.com/Bramahimm/TechPoint",
    stack: "React, Laravel, Tailwind CSS, TypeScript, Postgresql",
    gif: techPointGif,
  },
  {
    id: 10,
    name: "Heoc - Health Emergency Operation Center",
    desc: "HEOC is a mission-critical crisis management platform specifically engineered to streamline health coordination and logistics in response to the current natural disaster crisis in Aceh. This system serves as a tactical command center that integrates real-time disease surveillance data to monitor trends at evacuation sites, alongside volunteer performance tracking and medical logistics distribution. Developed to ensure data-driven decision-making in high-pressure environments, HEOC facilitates a rapid response by mapping urgent medical needs at field outposts and ensuring transparent, accountable aid delivery across the most affected regions in Aceh.",
    image: HEOC,
    web: "https://www.heoc-aceh.id/",
    repo: "https://github.com/Putraa70/HEOC-ATAM",
    stack: "Laravel, JavaSciript, Tailwind CSS, MySql",
    gif: HeocGif,
  },
  {
    id: 9,
    name: "JokiGoC - Joki's Blog Template",
    desc: "JokiGoC is a versatile digital service and commercial template platform designed for IT and creative service providers. The project functions as both a service-oriented business portal and a marketplace for ready-to-use website and mobile application templates. Built with a focus on modern aesthetics and clean code, it offers a professional interface for managing client inquiries and digital product sales.",
    image: gocJoki,
    web: "/under-develop-project",
    repo: "https://github.com/Bramahimm/gocJoki-blog",
    stack: "React ,Next.js, Tailwind CSS, TypeScript",
    gif: gocJokiGif,
  },
];

export { tools, stacks, projects };
