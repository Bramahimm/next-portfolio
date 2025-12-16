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
};
const projects = [
  ...Array.from({ length: 11 }, (_, i) => ({
    id: i + 1,
    name: "Coming Soon!",
    desc: "This project is currently under development. Stay tuned for something exciting!",
    image: comingsoon,
    web: "",
    repo: "",
    stack: "HTML, CSS, JavaScript",
    gif: "",
  })),
  {
    id: 12,
    name: "JokiGoC - Joki's Blog Template",
    desc: "Website jasa joki tugas IT & Non-IT, pembuatan website, mobile apps, serta penjualan template siap pakai.",
    image: gocJoki,
    web: "/under-develop-project",
    repo: "https://github.com/Bramahimm/gocJoki-blog",
    stack: "React ,Next.js, Tailwind CSS, TypeScript",
    gif: gocJokiGif,
  },
  {
    id: 11,
    name: "TechPoint - Mini E-Commerce Website",
    desc: "TechPoint adalah platform e-commerce modern yang berfokus pada penjualan produk teknologi. Proyek ini dibangun dengan arsitektur Monorepo yang memisahkan Back-end (API) dan Front-end (UI/UX) untuk memastikan skalabilitas dan kinerja yang optimal.",
    image: TechPoint,
    web: "/under-develop-project",
    repo: "https://github.com/Bramahimm/TechPoint",
    stack: "React, Laravel, Tailwind CSS, TypeScript, Postgresql",
    gif: techPointGif,
  },
];

export { tools, stacks, projects };
